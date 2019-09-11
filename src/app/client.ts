export class Client {
  constructor(options: {
    id?: string,
    firstname?: string,
    surname?: string,
    phonenumber?: string
  } = {}) {
    this.id = options.id;
    this.firstname = options.firstname || '';
    this.surname = options.surname || '';
    this.phonenumber = options.phonenumber || '';
  }
  id: string;
  firstname: string;
  surname: string;
  phonenumber: string;
}
