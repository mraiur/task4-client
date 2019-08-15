import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { AllclientsComponent } from './allclients/allclients.component';
import { DeleteclientComponent } from './deleteclient/deleteclient.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addform', component: AddformComponent},
  { path: 'allclients', component: AllclientsComponent},
  { path: 'deleteclient', component: DeleteclientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
