import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpsLayoutComponent } from './layouts/ips-layout/ips-layout.component';
import { IpsMainComponent } from './pages/ips-main/ips-main.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PacientListComponent } from './pages/pacient-list/pacient-list.component';
import { PatientSummaryComponent } from './pages/patient-summary/patient-summary.component';

const routes: Routes = [
  {
    path: '',
    component: IpsLayoutComponent,
    children: [
      { path: 'ips', component: IpsMainComponent },
      { path: 'patients', component: PacienteComponent },
      { path: 'patient/:id', component: PacientListComponent },
      { path: 'patientSummary/:id', component: PatientSummaryComponent },
      { path: '**', redirectTo: 'patients' },
      { path: '', redirectTo: 'patients', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: 'patients',
  },
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpsRoutingModule {}
