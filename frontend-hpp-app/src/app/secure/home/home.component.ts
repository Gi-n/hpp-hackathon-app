import { Component, OnDestroy, OnInit } from '@angular/core';
import { JsonContentService } from '../../core/services/content/json-content.service';
import { HomeContent } from './models/home.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  labels!: HomeContent;
  private jsonContentSub?: Subscription;
  showLoader: boolean = false;
  constructor(private jsonContentService: JsonContentService) {}

  ngOnInit() {
    this.getJsonContent();
  }

  ngOnDestroy() {
    this.jsonContentSub?.unsubscribe();
  }

  /**
   * Fetches JSON content for the home component using a centralized content management approach.
   * All content is loaded dynamically from JSON, allowing for easy updates and localization.
   * 
   * Highlights:
   * - Centralized content management: Any content can be fetched from JSON across the app.
   * - Dynamic content: No hardcoding of content; everything is loaded based on the JSON file.
   * - Extensible: If you need to fetch multiple JSON files (e.g., for different modules or countries), 
   *   you can use RxJS forkJoin to fetch them in parallel. This is especially useful for multi-branch 
   *   scenarios (e.g., 20 countries, different dashboards for UN, UK, IN, etc.), where you can pull 
   *   the appropriate JSON file dynamically without hardcoding file names like home_U or home.
   * - For demonstration, this is implemented only in this component due to time constraints.
   */
  getJsonContent() {
    this.showLoader = true;
    this.jsonContentSub = this.jsonContentService.getJson('home').subscribe(
      (data) => {
        this.labels = data;
        this.showLoader = false;
      },
      (error) => {
        this.showLoader = false;
        console.error('Error fetching JSON content:', error);
      }
    );
  }
}
