import {async, TestBed} from '@angular/core/testing';

import { ApiService } from './api.service';
import {AppComponent} from './app.component';
import {AddformComponent} from './addform/addform.component';
import {EditFormComponent} from './editform/editform.component';
import {AllclientsComponent} from './allclients/allclients.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        AddformComponent,
        EditFormComponent,
        AllclientsComponent,
        NavComponent,
        HomeComponent],

      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
