import { AppComponent } from './app.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    loadChildren: () => import('mfeLogin/LoginModule').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('mfeInscription/InscriptionModule').then(m => m.InscriptionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
