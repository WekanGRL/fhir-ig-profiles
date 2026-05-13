import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationService } from './services/location-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ServicePatrimoine');

  locationService = inject(LocationService);
  locations: WritableSignal<PatrimoineLocation[]> = signal([]);

  constructor() {
    this.locationService.getLocations().subscribe((data) => {
      console.log("Data received in App component:", data);
      this.locations.set(data);
    });
  }
}
