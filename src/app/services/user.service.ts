import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4001/users';

  constructor(private http: HttpClient) { }

  registerUser(userObj,email) {
      this.http.post(`${this.uri}/register/${email}`, userObj)
        .subscribe(res => console.log('Done'));
  }
}
