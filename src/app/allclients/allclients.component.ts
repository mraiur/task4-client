import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allclients',
  templateUrl: './allclients.component.html',
  styleUrls: ['./allclients.component.scss']
})
export class AllclientsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getList() {
    return this.http.get('/api/v1/clients').subscribe;
  }

  showList() {
    const res = this.getList();
    console.log(res);
    
  }

}
