import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'hospitals',
        loadChildren: () => import('./features/hospitals/hospitals.module').then(m => m.HospitalsModule)
      },
      { path: 'blank', loadChildren: () => import('./features/blank/blank.module').then(m => m.BlankModule) },
      { path: 'not-found', loadChildren: () => import('./features/notfound/notfound.module').then(m => m.NotfoundModule) },
    ]
  },
  { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
