import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent,
    },
    { 
        path: '**', redirectTo: 'login' 
    },
    {
        path: 'dashboard',component: DashboardComponent
    }
];
