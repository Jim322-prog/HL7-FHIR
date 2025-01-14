import { Component, OnInit, inject } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Entry, Summary, Resource } from '../../interfaces/summary.interface';
import { Practitioner } from '../../interfaces/practitioner.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrl: './patient-summary.component.css',
})
export class PatientSummaryComponent implements OnInit {
  public loading: boolean = false;
  private patientService = inject(PacienteService);
  private activatedRouter = inject(ActivatedRoute);
  private summaryPatient?: Summary;
  public practitioner!: Practitioner;
  public composition?: Resource;
  public patient?: Resource;
  public allergyIntolerance: Entry[] = [];
  public medicationStatement: Entry[] = [];
  public condition?: Entry[] = [];
  public organization?: Resource;
  public immunization: Entry[] = [];
  public procedure: Entry[] = [];
  public patientId:number = 0;
  public observation: Entry[] = [];
  public medicationRequest: Entry[] = [];
  public fb = inject(FormBuilder);
  public diagnosticoForm = this.fb.group({
    diagnostico: [''],
    codigo: ['']
  });

  public prescipcionForm = this.fb.group({
    dosis: [''],
    codigo: [''],
    frequency: [''],
    periodUnit: [''],
    unit: [''],
    obs: [''],
  })

  ngOnInit(): void {
    this.patientService.getPractitionerById(2332).subscribe((res) => {
      this.practitioner = res;
    });

    this.loading = true;
    this.activatedRouter.params
      .pipe(switchMap(({ id }) => this.patientService.getPatientSummary(id)))
      .subscribe((res) => {
        console.log("res")
        console.log(res)
        this.summaryPatient = res;
        this.loading = false;
        this.callback();
      });
  }

  callback(): void {
    if (!this.summaryPatient) return;
    var Composition = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Composition'
    );
    var Patient = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Patient'
    );
    var AllergyIntolerance = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'AllergyIntolerance'
    );
    var MedicationStatement = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'MedicationStatement'
    );
    var Condition = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Condition'
    );
    var Organization = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Organization'
    );
    var Immunization = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Immunization'
    );
    var Procedure = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Procedure'
    );

    var Observation = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'Observation'
    );

    var MedicationRequest = this.summaryPatient.entry.filter(
      (r: Entry) => r.resource.resourceType === 'MedicationRequest'
    );

    console.log("MedicationRequest")
    console.log(MedicationRequest)
    this.composition = Composition[0].resource;
    this.patient = Patient[0].resource;
    this.allergyIntolerance = AllergyIntolerance;
    this.medicationStatement = MedicationStatement;
    this.condition = Condition;
    this.organization = Organization[0].resource;
    this.immunization = Immunization;
    this.procedure = Procedure;
    this.observation = Observation;
    this.medicationRequest = MedicationRequest;
  }

  postAction(): void {
    var patientId = this.patient?.id;
    var diagnostico = this.diagnosticoForm.controls['diagnostico'].value;
    var codigo = this.diagnosticoForm.controls['codigo'].value;

    var codigoSer = this.diagnosticoForm.controls['codigo'].value;
    var dosis = this.diagnosticoForm.controls['codigo'].value;
    var frequency = this.diagnosticoForm.controls['codigo'].value;
    var periodUnit = this.diagnosticoForm.controls['codigo'].value;
    var unit = this.diagnosticoForm.controls['codigo'].value;
    var obs = this.diagnosticoForm.controls['codigo'].value;
  

    var diagnostic = {
      "resourceType": "DiagnosticReport",
      "id": "2939",
      "meta": {
          "profile": [
              "https://hl7chile.cl/fhir/ig/clips/StructureDefinition/DiagnosticReport-cl-ips"
          ]
      },
      "status": "final",
      "category": [
          {
              "coding": [
                  {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                      "code": "LAB",
                      "display": "Laboratory"
                  }
              ],
              "text": "Laboratorio"
          }
      ],
      "code": {
          "coding": [
              {
                  "system": "http://loinc.org",
                  "code": `${codigo}`,
                  "display": "Laboratory report"
              }
          ],
          "text": "Reporte de laboratorio"
      },
      "subject": {
          "reference": `Patient/${this.patient?.id}`
      },
      "effectiveDateTime": "2025-01-02",
      "performer": [
          {
              "display": "Hospital Dr. Gustavo Fricke"
          }
      ],
      "result": [
          {
              "display": `${diagnostico}`
          }
      ]
  }
  

    var medicationRequest = {
      "resourceType": "MedicationRequest",
      "id": "medicationrequest-pregabalin",
       "meta" : {
        "profile" : [
            "https://hl7chile.cl/fhir/ig/clips/StructureDefinition/MedicationRequest-cl-ips"
        ]
      },
      "status": "active",
      "intent": "original-order",
      "medicationReference" : {
        "reference" : "Medication/886",
        "display" : "Pastilla Aspirina"
      },
      "subject": {
        "reference": `Patient/${this.patient?.id}`
      },
      "dosageInstruction" : [
        {
          "text" : `${obs}`,
          "timing" : {
            "repeat" : {
              "frequency" : frequency,
              "periodUnit" : `${periodUnit}`
            }
          },
          "route" : {
            "coding" : [
              {
                "system" : "http://standardterms.edqm.eu",
                "code" : "20002500",
                "display" : "Buccal use"
              }
            ],
            "text" : "Vía de administración bucal"
          },
          "doseAndRate" : [
            {
              "doseQuantity" : {
                "value" : dosis,
                "unit" : `${unit}`,
                "system" : "http://unitsofmeasure.org",
                "code" : `${unit}`
              }
            }
          ]
        }
      ],
      "dispenseRequest" : {
        "validityPeriod" : {
          "start" : "2025-01-02"
        }
      }
    }


    this.patientService.generateDiagnosticReport(diagnostic).subscribe({
      next: value => console.log("exito"),
      error: err => console.log(err),
      complete() {},
    })
    this.patientService.generateMedicationRequest(medicationRequest).subscribe({
      next: value => console.log("exito"),
      error: err => console.log(err),
      complete() {},
    })

  }
}
