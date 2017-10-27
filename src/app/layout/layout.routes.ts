import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: '../home/home.module#HomeModule'},
   /* { path: 'frailty', loadChildren: '../frailty/frailty.module#FrailtyModule'},
    { path: 'frailty/filtered/:id', loadChildren: '../frailty/frailty.module#FrailtyModule'},
    { path: 'frailty/category/:category', loadChildren: '../shared/table/table.module#TableModule'},
    { path: 'frailty/shortcut', loadChildren: '../shared/shortcut/shortcut.module#ShortcutModule'},
    { path: 'news', loadChildren: '../news/news.module#NewsModule' },
    { path: 'week-changes', loadChildren: '../shared/swingchart/swingchart.module#SwingchartModule'},
    { path: 'patient/:patientid', loadChildren: '../shared/patient/patient.module#PatientModule'},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }*/
  ]}
];

export const ROUTES = RouterModule.forChild(routes);