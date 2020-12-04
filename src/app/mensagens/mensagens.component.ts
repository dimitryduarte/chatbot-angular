import { Component, OnInit, DoCheck, Input, OnChanges  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Mensagem} from '../mensagem';
import {MensagemService} from '../mensagem.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor(private mensagemService: MensagemService) { }

  chatmsg: any = {};
  req: any = {};
  mensagem: any = {};
  response: any = {};  
  option: any = {};  
  datemsg: any = {};  

  ngOnInit() {
    this.mensagemSaudacao(); 
    this.req.tipo = 0;
    
  }

  mensagemSaudacao(){
    this.chatmsg = this.mensagemService.getMensagem();
  }
  
  enviarMensagem(vMsg: any){
    this.chatmsg = this.mensagemService.postMensagem(vMsg,this.response,this.chatmsg,this.option,this.datemsg);                 
  }

}
