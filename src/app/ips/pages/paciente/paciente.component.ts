import { Component, inject, OnInit } from '@angular/core';
import { Entry, Patient, Resource } from '../../interfaces/patient.interface';
import { PacienteService } from '../../services/paciente.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
})
export class PacienteComponent implements OnInit {
  public patientEntry: Entry[] = [];
  private patienService = inject(PacienteService);
  private router = inject(Router);

  ngOnInit(): void {
    this.callPatients();
  }

  callPatients(): void {
    this.patienService.getAllPatients().subscribe((res) => {
      this.patientEntry = res;
    });
  }

  getPatientById(id: string): void {
    const ids = Number(id);
    this.router.navigateByUrl(`/ips/patientSummary/${id}`);
  }
}
