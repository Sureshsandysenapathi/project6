import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
   
    imports: [
      BrowserModule,
      FormsModule, // Add FormsModule here
      // other modules
    ],

  })
  export class AppModule { }
