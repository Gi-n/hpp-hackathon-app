import { Component, OnInit } from '@angular/core';
import { RouteTypeService } from '../services/routetype.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  isSecurePage: boolean = true;

  constructor(private routeTypeService: RouteTypeService) {
    console.log('HeaderComponent initialized', this.isSecurePage);
  }

  ngOnInit(): void {
    this.isSecurePage = this.routeTypeService.isSecurePage();
  }
}
