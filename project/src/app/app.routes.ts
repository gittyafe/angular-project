import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'lessons', component: LessonComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
