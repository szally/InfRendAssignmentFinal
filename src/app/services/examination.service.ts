import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExaminationDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ExaminationDTO[]>('/api/exams');
  }

  getOne(examID: number) {
    return this.http.get<ExaminationDTO>('/api/exams/' + examID);
  }

  create(product: ExaminationDTO) {
    return this.http.post<ExaminationDTO>('/api/exams', product);
  }

  update(product: ExaminationDTO) {
    return this.http.put<ExaminationDTO>('/api/exams', product);
  }

  delete(examID: number) {
    return this.http.delete('/api/exams/' + examID);
  }
}