import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { LoginComponent } from './app/login/login.component';

bootstrapApplication( LoginComponent,{
  providers: [
    provideRouter(routes) // Use your routing setup if needed
    // Add other global providers here if necessary
  ]
}) .catch((err) => console.error(err));
