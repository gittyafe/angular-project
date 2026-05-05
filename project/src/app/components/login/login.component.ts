import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions,
  MatTooltipModule,
} from '@angular/material/tooltip';
/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 100,
  hideDelay: 100,
  touchendHideDelay: 100,
};
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }],
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatTooltipModule, MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  usersList: any[] = [];
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.usersList = this.usersService.getUsers();
  }
  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const user = this.usersList.find(u => u.name === username && u.password === password);
    if (user) {
      if (user.role === 'secretary') {
        this.router.navigate(['/register']);
      }
      else {
        this.router.navigate(['/lessons']);
      }
    } else {
      alert('שם משתמש או סיסמה שגויים. אנא נסה שוב.');
    }
  }

}

