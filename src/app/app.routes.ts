import { Routes, RouterModule } from '@angular/router';
import { Deber1Component } from './deber1/deber1.component';
import { Deber2Component } from './deber2/deber2.component';
import { Deber3Component } from './deber3/deber3.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Deber4Component } from './deber4/deber4.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'deber1', component:Deber1Component},
    {path:'deber2', component:Deber2Component},
    {path:'deber3', component:Deber3Component},
    {path:'deber4', component:Deber4Component}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}