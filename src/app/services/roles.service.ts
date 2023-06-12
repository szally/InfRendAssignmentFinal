import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<RoleDTO[]>('api/roles');
  }

  getOne(id: number) {
    return this.http.get<RoleDTO>('/api/roles/' + id);
  }

  create(user: RoleDTO) {
    return this.http.post<RoleDTO>('/api/roles', user);
  }

  update(user: RoleDTO) {
    return this.http.put<RoleDTO>('/api/roles', user);
  }

  delete(id: number) {
    return this.http.delete('/api/roles/' + id);
  }

}