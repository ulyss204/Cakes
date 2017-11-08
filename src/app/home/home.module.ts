import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { CakeChoiceComponent } from './cake-choice/cake-choice.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: ':id',      component: CakeDetailsComponent},
  { path: 'selected/:id',      component: CakeChoiceComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    HomeComponent,
    CakeDetailsComponent,
    CakeChoiceComponent
  ]
})
export class HomeModule {
  static routes = routes;
}
