import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Client} from '../client';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.messageForm = this.formBuilder.group( {
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.pattern('^\\+4407([0-9]{9,14})')]],
    });
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.messageForm.controls.phonenumber);
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
    this.createOne();
  }

  ngOnInit() {
  }

  createOne() {
    const client = new Client();
    client.firstname = this.messageForm.value.firstname;
    client.surname = this.messageForm.value.surname;
    client.phonenumber = this.messageForm.value.phonenumber;

     return this.apiService.createOneClient( client ).subscribe((result) => {
       if (result && result['client']) {
         alert(`Client created ${result['client']}`);
       } else {
         alert(`Error creating client`);
       }
     });
  }

}
