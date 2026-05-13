import { Component, inject, signal } from '@angular/core';
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
  selectedLocation: any = null;
  Location = [
    { id: 1, numero: '101', type: 'Individuelle', etage: 1, disponible: true, equipements: ['TV', 'Wifi', 'Climatisation'] },
    { id: 2, numero: '102', type: 'Double', etage: 1, disponible: false, equipements: ['TV', 'Wifi'] },
    { id: 3, numero: '201', type: 'Soins intensifs', etage: 2, disponible: true, equipements: ['Moniteur cardiaque', 'Oxygène'] },
    { id: 4, numero: '205', type: 'Individuelle', etage: 2, disponible: true, equipements: ['TV', 'Balcon'] },
  ];
selectLocation(Location: any) {
    this.selectedLocation = Location;
  }
  constructor() {
    this.locationService.getLocations().subscribe((data) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      //this.locations.set(data.entry[0].resource);
    });
  }
}
