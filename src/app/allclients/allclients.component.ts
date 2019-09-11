import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Client} from '../client';

@Component({
  selector: 'app-allclients',
  templateUrl: './allclients.component.html',
  styleUrls: ['./allclients.component.scss']
})
export class AllclientsComponent implements OnInit {
  private clients: Client[];

  constructor(private apiService: ApiService ) {}

  ngOnInit() {
    this.getList();
  }

  onReload() {
    this.getList();
  }

  onShowClient( client: Client) {
    alert(`View ${client.firstname} ${client.surname} `);
  }

  onDeleteClient( client: Client) {
    if (confirm(`Delete ${client.firstname} ${client.surname} ?`) ) {
      this.apiService.deleteClient(client.id).subscribe( (result) => {
        if (result && result['message'] === 'success') {
          alert('Deleted');
          this.getList();
        } else {
          alert(`Error occurred while deleting ${client.firstname} ${client.surname}`);
        }
      });
    }
  }

  getList() {
    return this.apiService.getAllClients().subscribe((data) => {
      this.clients = data;
    });
  }
}
