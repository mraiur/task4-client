import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    this.messageForm = this.formBuilder.group( {
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      phonenumber: ['', Validators.required]    
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

  createOne() {
     return this.http.post('localhost:3000/api/v1/clients', {
      "firstname": this.messageForm.value.firstname,
      "surname": this.messageForm.value.surname,
      "phoneNumber": this.messageForm.value.phonenumber
    });
  }

}
