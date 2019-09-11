import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditFormComponent } from './editform.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from '../home/home.component';
import {AppComponent} from '../app.component';
import {AddformComponent} from '../addform/addform.component';
import {AllclientsComponent} from '../allclients/allclients.component';
import {NavComponent} from '../nav/nav.component';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;

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
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
