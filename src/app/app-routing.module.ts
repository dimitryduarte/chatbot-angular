import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensagensComponent } from './mensagens/mensagens.component';


const routes: Routes = [
  {path: 'mensagens', component: MensagensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
