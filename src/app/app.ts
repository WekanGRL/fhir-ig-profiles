import { Component, inject, signal,WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationService } from './services/location-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //template: ` {{ locations() }}  `,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
deleteLocation() {
throw new Error('Method not implemented.');
}
modifLocation() {
throw new Error('Method not implemented.');
}
addLocation() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('ServicePatrimoine');

  locationService = inject(LocationService);
  //locations = signal(new PatrimoineLocation());
  selectedLocation: PatrimoineLocation | null = null;

  locations: WritableSignal<PatrimoineLocation[]> = signal([]);

  constructor() {
    this.locationService.getLocations().subscribe((data) => {
      console.log("Data received in App component:", data);
      this.locations.set(data);
    });
  }

selectLocation(location: any) {
    this.selectedLocation = location;
  }
}
