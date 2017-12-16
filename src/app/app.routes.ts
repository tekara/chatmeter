import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';

const appRoutes: Routes = [
  { path: '', component : FormComponent },
  { path: 'review', component : ReviewComponent },
  { path: '**', redirectTo: '' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);