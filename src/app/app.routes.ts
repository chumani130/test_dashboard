import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { TablesComponent } from './pages/tables/tables.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { FogotPasswordComponent } from './pages/fogot-password/fogot-password.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'error', component: ErrorPageComponent
    },
    // { 
    //     path: '**', redirectTo: 'login' 
    // },
    {
        path: 'dashboard',component: DashboardComponent
    },
    {
        path: 'forgot-password',component: FogotPasswordComponent
    },
    
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'tables', component: TablesComponent
    },
    {
        path: 'charts',component: ChartsComponent
    },
    
];
