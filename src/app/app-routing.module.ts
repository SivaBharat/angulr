import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { MouseComponent } from './mouse/mouse.component';
import { CreateComponent } from './create/create.component';
import{ParentComponent} from './parent/parent.component';
import{ChildComponent} from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductsComponent } from './products/products.component';
import { MenComponent } from './products/men/men.component';
import { WomenComponent } from './products/women/women.component';
import { KidsComponent } from './products/kids/kids.component';
import{MenclothesComponent} from './products/men/menclothes/menclothes.component';
import{MenfootwearComponent} from './products/men/menfootwear/menfootwear.component';
import{WomenclothesComponent} from './products/women/womenclothes/womenclothes.component';
import{WomenfootwearComponent} from './products/women/womenfootwear/womenfootwear.component';
import{KidsclothesComponent} from './products/kids/kidsclothes/kidsclothes.component';
import{KidsfootwearComponent} from './products/kids/kidsfootwear/kidsfootwear.component';
const routes: Routes = [
  {path:"Myhome",component:HomeComponent},
  {path:"Career",component:CareerComponent},
  {path:"Mouse",component:MouseComponent},
  {path:"Create",component:CreateComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"template",component:TemplateComponent},
  {path:"reactive",component:ReactiveComponent},
  {path:"products/:id",component:ProductsComponent},
  {path:"products",component:ProductsComponent,
children:[
  {path:"men",component:MenComponent,children:[
    {path:"menclothes",component:MenclothesComponent},
    {path:"menFootwear",component:MenfootwearComponent}
  ]},
{path:"women",component:WomenComponent,children:[
 {path:"womenClothes",component:WomenclothesComponent},
 {path:"womenFootwear",component:WomenfootwearComponent}
]},
{path:"kids",component:KidsComponent,children:[
  {path:"kidsClothes",component:KidsclothesComponent},
  {path:"kidsFootwear",component:KidsfootwearComponent}
]}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
