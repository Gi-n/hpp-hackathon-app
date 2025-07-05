import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RegisterService } from './services/register.service';
import { RegisterForm } from './models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string | null = null;
  showRoleDropdown: boolean = false;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    // Show role dropdown only if URL ends with /admin/register
    this.showRoleDropdown = this.router.url.endsWith('/admin/register');

    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        role: [''],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { name, email, password } = this.registerForm.value;
    const payload: RegisterForm = { name, email, password };
    // if (this.showRoleDropdown && role) {
    //   payload.role = role;
    // }
    this.registerService.register(payload).subscribe(
      (response) => {
        this.errorMessage = null;
        this.router.navigate(['/public/login']);
      },
      (error) => {
        this.errorMessage =
          error?.error?.message || 'Registration failed. Please try again.';
      }
    );
  }
}
