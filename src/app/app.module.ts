import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { HomeComponent } from './components/home/home.component';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { QuillModule } from 'ngx-quill'

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent,
    children: [
      {
        path: '',
        redirectTo: 'control',
        pathMatch: 'full'
      },
      {
        path: 'control',
        component: FormControlComponent
      },
      {
        path: 'group',
        component: FormGroupComponent
      },
      {
        path: 'example/1',
        component: ExampleOneComponent
      },
      {
        path: 'example/1/:id',
        component: ExampleOneComponent
      },
      
    ]
  }

]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormComponent,
    FormGroupComponent,
    HomeComponent,
    ExampleOneComponent
  ],
  imports: [
    // Modulo para formularios reactivos
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,


    // Modulo para editor de textos
    QuillModule.forRoot(),
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
