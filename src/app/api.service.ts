import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiUri + environment.apiVersionUri;

  constructor(private httpClient: HttpClient) { }

  getAllClients() {
    return this.httpClient.get<Client[]>(`${this.apiURL}/clients`);
  }

  getOneClient(id: String) {
    return this.httpClient.get<Client[]>(`${this.apiURL}/clients/${id}`);
  }

  createOneClient(client: Client) {
    return this.httpClient.post(`${this.apiURL}/clients`, client);
  }

  deleteClient(id: String) {
    return this.httpClient.delete(`${this.apiURL}/clients/${id}`);
  }

  updateClient(client: Client) {
    return this.httpClient.put(`${this.apiURL}/clients/${client.id}`, client);
  }
}
