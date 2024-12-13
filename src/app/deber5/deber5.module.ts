import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deber5Component } from './deber5.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Deber5Component],
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      {path:'', component:Deber5Component}
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class Deber5Module { }
