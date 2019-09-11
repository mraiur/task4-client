import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclientsComponent } from './allclients.component';
import {AppComponent} from '../app.component';
import {AddformComponent} from '../addform/addform.component';
import {EditFormComponent} from '../editform/editform.component';
import {NavComponent} from '../nav/nav.component';
import {HomeComponent} from '../home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';

describe('AllclientsComponent', () => {
  let component: AllclientsComponent;
  let fixture: ComponentFixture<AllclientsComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AllclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
