import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ips',
    loadChildren: () => import('./ips/ips.module').then((m) => m.IpsModule),
  },
  {
    path: '**',
    redirectTo: 'ips',
  },
  {
    path: '',
    redirectTo: 'ips',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
