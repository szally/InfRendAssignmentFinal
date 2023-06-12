import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PatientDTO[]>('/api/patients');
  }

  getOne(taj: number) {
    return this.http.get<PatientDTO>('/api/patients/' + taj);
  }

  create(patient: PatientDTO) {
    return this.http.post<PatientDTO>('/api/patients', patient);
  }

  update(patient: PatientDTO) {
    return this.http.put<PatientDTO>('/api/patients', patient);
  }

  delete(taj: number) {
    return this.http.delete('/api/patients/' + taj);
  }
}