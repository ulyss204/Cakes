import { Routes } from '@angular/router';



export const ROUTES: Routes = [{
   path: '', redirectTo: '' ,pathMatch: 'full'
  },
  {
    path: '', loadChildren: './layout/layout.module#LayoutModule' 
  }
];