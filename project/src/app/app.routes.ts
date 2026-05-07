import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'lessons', component: LessonComponent, canActivate:[authGuard]},
    { path: 'register', component: RegisterComponent, canActivate:[authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
