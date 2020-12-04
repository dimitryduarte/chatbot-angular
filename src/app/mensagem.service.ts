import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from './mensagem';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MensagemService {

  endPoint: string = "https://localhost:3000/api/conversation";
  lista: Mensagem[] = []
  msg: any
  uf: any  

  constructor(private http:HttpClient) { }

  getMensagem(): any{
    this.http.get(this.endPoint).subscribe(dados => {
        this.msg = dados;
        }, (erro) => {
        console.log(erro);            
    }); 
    return this.msg;
  }
  
  getMensagemResponse(response: string): any{
    this.http.get(this.endPoint +'conversation' + response).subscribe(dados => {
        this.msg = dados;
        }, (erro) => {
          console.log(erro);
      });      
    return this.msg;
  }
  
  getMensagemText(text: string): any{
    this.http.get(this.endPoint +'conversation' + text ).subscribe(dados => {
        this.msg = dados;
        }, (erro) => {
          console.log(erro);
      });      
    return this.msg;
  }

  postMensagem( text: string,
                response: string,
                msg: string,
                option: string,
                datemsg: string)
    {
      this.http.post(this.endPoint +'conversation/&modelo.text='+ text +
        '&modelo.response=' + response +
        '&modelo.msg='+ msg +
        '&modelo.option='+ option +
        '&modelo.datemsg='+ datemsg , null).subscribe(dados => {  
                                              console.log(dados);     
                                            }, (erro) => {
                                              console.log(erro);
    });
    }

}
