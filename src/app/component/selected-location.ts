import { Component,inject,signal,WritableSignal } from '@angular/core';
import { LocationService } from '../services/location-service';

@Component({
  selector: 'app-selected-location',
  imports: [],
  templateUrl: './selected-location.html',
  styleUrl: './selected-location.css',
})
export class SelectedLocation {

selectedLocation: PatrimoineLocation | null = null;
locations: WritableSignal<PatrimoineLocation[]> = signal([]);

deleteLocation() {
throw new Error('Method not implemented.');
}
modifLocation() {
throw new Error('Method not implemented.');
}
addLocation() {
throw new Error('Method not implemented.');
}
selectLocation(location: any) {
    this.selectedLocation = location;
  }

locationService = inject(LocationService);

constructor() {
    this.locationService.getLocations().subscribe((data) => {
      console.log("Data received in App component:", data);
      this.locations.set(data);
    });
  }
}
