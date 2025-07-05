import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { email, password } = this.loginForm.value;
    const payload = { email, password };
    this.authService.login(payload)
      .pipe(debounceTime(2000))
      .subscribe(
      (response) => this.handleLoginSuccess(response),
      (error) => this.handleLoginError(error)
      );
  }
  private handleLoginSuccess(response: any): void {
    this.errorMessage = null;
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('user', JSON.stringify(response.user));
    this.router.navigate(['/secure/home']);
  }

  private handleLoginError(error: any) {
    this.errorMessage = 'Login failed. Please check your credentials.';
  }
}
