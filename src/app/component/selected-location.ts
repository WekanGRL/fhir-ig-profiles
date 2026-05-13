import { Component,inject,signal,WritableSignal,computed } from '@angular/core';
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

filterSelected: WritableSignal<string | null> = signal(null)

filteredLocations = computed(() => {
    const filter = this.filterSelected();
    const allLocations = this.locations();

    if (!filter) {
      return allLocations; // Retourne toutes les locations si aucun filtre
    }

    return allLocations.filter(location => {
      // Vérifie si le type contient le display filtré
      return location.type?.some(t =>
        t.coding?.some(c => c.display?.toLowerCase() === filter.toLowerCase())
      );
    });
  });

filterOptions = [
    { value: null, label: 'Tous les types' },
    { value: 'Salle d\'examen', label: 'Salle d\'examen' },
    { value: 'Bloc opératoire', label: 'Bloc opératoire' },
    { value: 'Salle de soins', label: 'Salle de soins' },
  ];

changeStatus(location: any) {
    if (location.status === 'active') {
      location.status = 'inactive';
    } else {
      location.status = 'active';
    }
    this.locationService.updateLocation(location.id, location).subscribe(() => {
      console.log(`Location ${location.id} status updated to ${location.status}`);
    });
  };



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
