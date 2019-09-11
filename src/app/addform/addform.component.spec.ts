import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddformComponent } from './addform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {EditFormComponent} from '../editform/editform.component';
import {AllclientsComponent} from '../allclients/allclients.component';
import {NavComponent} from '../nav/nav.component';
import {HomeComponent} from '../home/home.component';

describe('AddformComponent', () => {
  let component: AddformComponent;
  let fixture: ComponentFixture<AddformComponent>;

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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
