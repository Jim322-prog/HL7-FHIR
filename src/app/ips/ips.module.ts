import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpsRoutingModule } from './ips-routing.module';
import { IpsLayoutComponent } from './layouts/ips-layout/ips-layout.component';
import { IpsMainComponent } from './pages/ips-main/ips-main.component';

import { SharedComponentModule } from '../shared-component/shared-component.module';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PatientPipePipe } from './pipes/patient-pipe.pipe';
import { PacientListComponent } from './pages/pacient-list/pacient-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';

@NgModule({
  declarations: [
    IpsLayoutComponent,
    IpsMainComponent,
    PacienteComponent,
    PatientPipePipe,
    PacientListComponent,
    GenderPipePipe,
  ],
  imports: [
    CommonModule,
    IpsRoutingModule,
    SharedComponentModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class IpsModule {}
