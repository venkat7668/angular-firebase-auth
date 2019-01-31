import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './common/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        path: 'signup', component: SignupComponent,
    }, {
        path: 'login', component: LoginComponent
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }
];