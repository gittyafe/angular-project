import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: any[] = [
    { id: 1, name: "Sara", password: '123', role: "gym teacher" },
    { id: 2, name: "Rivka", password: '456', role: "secretary" },
    { id: 3, name: "Rachel", password: '789', role: "gym teacher" },
    { id: 4, name: "Leah", password: '000', role: "secretary" },
  ];
  constructor() { }

  getUsers() {
    return this.users;
  }
}
