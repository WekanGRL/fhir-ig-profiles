import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationService } from './services/location-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` {{ locations() }}  `,
  styleUrl: './app.css',
  // templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ServicePatrimoine');

  locationService = inject(LocationService);
  locations = signal(new PatrimoineLocation());

  constructor() {
    this.locationService.getLocations().subscribe((data) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      this.locations.set(data.entry[0].resource);
    });
  }
}
