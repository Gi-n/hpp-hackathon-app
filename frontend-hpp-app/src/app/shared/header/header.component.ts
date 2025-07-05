import { Component } from '@angular/core';
import { RouteTypeService } from '../services/routetype.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../public/login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isSecurePage = this.routeTypeService.isSecurePage();

  constructor(
    private routeTypeService: RouteTypeService,
    private authService: AuthService,
    private router: Router
  ) {}

  onLogout() {
    this.authService.logout();
  }

  toAdminDashboard() {
    this.router.navigate(['/secure/dashboard']);
  }
}
