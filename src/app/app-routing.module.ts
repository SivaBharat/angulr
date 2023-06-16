import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { MouseComponent } from './mouse/mouse.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
  {path:"Myhome",component:HomeComponent},
  {path:"Career",component:CareerComponent},
  {path:"Mouse",component:MouseComponent},
  {path:"Create",component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
