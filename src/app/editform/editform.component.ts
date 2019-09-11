import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Client} from '../client';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditFormComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  success = null;
  error = null;
  private record: Client;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute) {
    this.editForm = this.formBuilder.group( {
      firstname: ['', Validators.required],
      surname: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.editForm.controls.phonenumber);
    if (this.editForm.invalid) {
      return;
    }
    this.success = 'Your form is valid!';
    this.saveChanges();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params['params']['id'];
      this.apiService.getOneClient(id).subscribe( (record) => {
        this.editForm.patchValue(record);
        this.record = new Client(...record);
      }, (err) => {
        alert('Failed to load record');
      });
    });
  }

  saveChanges() {
    this.error = null;
    this.record['firstname'] = this.editForm.value.firstname;
    this.record['surname'] = this.editForm.value.surname;
    console.log('client', this.record);
     return this.apiService.updateClient(this.record).subscribe((result) => {
       this.submitted = false;
       this.success = `${this.record['firstname']} ${this.record['surname']} updated !`;
     }, (err) => {
       if (err['error']) {
         let msg = [];
         msg.push(err['error']['message']);
         msg = msg.concat(err['error']['data']['errors']);
         this.error = msg.join('<br />');
       }
     });
  }

}
