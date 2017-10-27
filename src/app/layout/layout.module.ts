import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { ROUTES } from './layout.routes';

@NgModule({
  imports: [
    CommonModule,
    ROUTES
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
