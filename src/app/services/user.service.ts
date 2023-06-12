import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<UserDTO[]>('api/users');
  }

  getOne(username: string) {
    return this.http.get<UserDTO>('/api/users/' + username);
  }

  create(user: UserDTO) {
    return this.http.post<UserDTO>('/api/users', user);
  }

  update(user: UserDTO) {
    return this.http.put<UserDTO>('/api/users', user);
  }

  delete(username: string) {
    return this.http.delete('/api/users/' + username);
  }

}