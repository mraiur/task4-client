import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { AllclientsComponent } from './allclients/allclients.component';
import {EditFormComponent} from './editform/editform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addform', component: AddformComponent},
  { path: 'allclients', component: AllclientsComponent},
  { path: 'client/:id/edit', component: EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
