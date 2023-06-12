import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
    patients: PatientDTO[] = [];

    constructor(
      private patientService: PatientService,
      private toastrService: ToastrService,
      private router: Router) { }

      ngOnInit(): void {
        this.patientService.getAll().subscribe({
          next: (products) => { this.patients = products },
          error: (err) => {
            this.toastrService.error('A termék lista betöltésekor hiba keletkezett.', 'Hiba');
          }
        });
      }
}
