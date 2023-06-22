import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MouseComponent } from './mouse/mouse.component';
import { CreateComponent } from './create/create.component';
import { ButtonModule } from 'primeng/button';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MenComponent } from './products/men/men.component';
import { WomenComponent } from './products/women/women.component';
import { KidsComponent } from './products/kids/kids.component';
import { MenclothesComponent } from './products/men/menclothes/menclothes.component';
import { MenfootwearComponent } from './products/men/menfootwear/menfootwear.component';
import { WomenclothesComponent } from './products/women/womenclothes/womenclothes.component';
import { WomenfootwearComponent } from './products/women/womenfootwear/womenfootwear.component';
import { KidsclothesComponent } from './products/kids/kidsclothes/kidsclothes.component';
import { KidsfootwearComponent } from './products/kids/kidsfootwear/kidsfootwear.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    MouseComponent,
    CreateComponent,
    ParentComponent,
    ChildComponent,
    TemplateComponent,
    ReactiveComponent,
    ProductsComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    MenclothesComponent,
    MenfootwearComponent,
    WomenclothesComponent,
    WomenfootwearComponent,
    KidsclothesComponent,
    KidsfootwearComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    AccordionModule,
    BrowserAnimationsModule,
    ImageModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
