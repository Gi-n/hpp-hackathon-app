import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_MODULE } from './shared/shared.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...SHARED_MODULE],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Healthcare patient portal';
}
