import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { HomeComponent } from './components/home/home.component';

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
      }
    ]
  }

]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormComponent,
    FormGroupComponent,
    HomeComponent
  ],
  imports: [
    // Modulo para formularios reactivos
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
