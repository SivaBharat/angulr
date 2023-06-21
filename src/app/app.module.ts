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
