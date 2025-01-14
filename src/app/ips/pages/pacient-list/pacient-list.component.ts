import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { PacienteService } from '../../services/paciente.service';
import { FormArray, FormBuilder } from '@angular/forms';
import {
  Address,
  Coding,
  Identifier,
  Meta,
  Name,
  PacienteID,
  Text,
} from '../../interfaces/patientID.interface';
import { Practitioner } from '../../interfaces/practitioner.interface';
import { Boundle } from '../../interfaces/boundle.interface';
import { Entry, Patient } from '../../interfaces/patient.interface';
import { Entry as ent } from '../../interfaces/boundle.interface';
@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-list.component.html',
  styleUrl: './pacient-list.component.css',
})
export class PacientListComponent implements OnInit {
  private activatedRouter = inject(ActivatedRoute);
  private patientService = inject(PacienteService);
  private fb = inject(FormBuilder);
  public pacienteId?: PacienteID;
  public practitioner!:Practitioner;

  public pacienteForm = this.fb.group({
    resourceType: [''],
    id: [''],
    meta: {} as Meta,
    text: {} as Text,
    identifier: [] as Identifier[],
    active: [false],
    name: [] as Name[],
    telecom: [] as Identifier[],
    gender: [''],
    birthDate: [''],
    address: [] as Address[],
  });

  public nameForm = this.fb.group({
    use: [''],
    family: [''],
    given: [''],
  });

  public loading: boolean = false;

  ngOnInit(): void {
    this.patientService.getPractitionerById(1163).subscribe((res) => {
      this.practitioner = res;
    })

    this.loading = true;
    this.activatedRouter.params
      .pipe(switchMap(({ id }) => this.patientService.getPatientById(id)))
      .subscribe((res) => {
        this.pacienteId = res;
        this.loading = false;
        this.nameForm.reset({
          use: res.name ? res.name[0].use : '',
          family: res.name ? res.name[0].family : '',
          given: res.name
            ? res.name[0].given[0] + ' ' + res.name[0].given[1]
            : '',
        });

        this.pacienteForm.reset({
          resourceType: res.resourceType,
          id: res.id,
          meta: res.meta,
          text: res.text,
          identifier: res.identifier ? res.identifier[0] : null,
          name: res.name ? res.name[0] : null,
          telecom: res.telecom ? res.telecom[0] : null,
          gender: res.gender,
          birthDate: res.birthDate,
          address: res.address ? res.address[0] : null,
        });

        
      });

      
  }




  generateBoundle(){
    var boundle = {
      resourceType: "Bundle",
      id: "bundle-example",
      type: "document",
      entry: [
      ]
    }

  
    
  }
}
