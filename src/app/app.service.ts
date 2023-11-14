import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';
import { Credentials } from './interfaces/credentials';
import { JWTToken } from './interfaces/jwttoken';
import { BehaviorSubject } from 'rxjs';

const API = 'http://localhost:3000/users';
const NESTJS_API = 'http://localhost:3001';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient = inject(HttpClient)) { }

  getAllUsers() {
    return this.http.get<Person[]>(API)
  }

  getUserById(id: number) {
    return this.http.get<Person>(`${API}/${id}`)
  }

  addUser(user: Person) {
    return this.http.post<Person>(API, user)
  }

  deleteUser(id: number) {
    return this.http.delete<Person>(`${API}/${id}`)
  }

  updateUser(user: Person) {
    return this.http.put<Person>(`${API}/${user.id}`, user)
  }

  //nest Js
  login(credentials: Credentials) {
    return this.http.post<JWTToken>(`${NESTJS_API}/auth/login`, credentials);
  }

  isLoggedIn = new BehaviorSubject<boolean>(false);
  fullname = new BehaviorSubject<string>('');

  logout() {
    this.isLoggedIn.next(false);
    this.fullname.next('');
    localStorage.removeItem('access_token');
  }
}
