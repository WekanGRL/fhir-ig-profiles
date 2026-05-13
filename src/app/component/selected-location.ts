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
extensionFilterSelected: WritableSignal<string | null> = signal(null);

private getExtensionDisplay(ext: any): string | null {
    try {
      if (ext.valueCodeableConcept?.coding?.[0]?.display) {
        return ext.valueCodeableConcept.coding[0].display;
      }
      if (ext.valueString) {
        return ext.valueString;
      }
      if (ext.url) {
        return ext.url.split('/').pop()?.replace(/-/g, ' ');
      }
      return null;
    } catch (e) {
      console.error("Erreur dans getExtensionDisplay:", e);
      return null;
    }
  }

filteredLocations = computed(() => {
    const typeFilter = this.filterSelected();
    const extensionFilter = this.extensionFilterSelected();
    const allLocations = this.locations();

    console.log("Filtrage appliqué:", { typeFilter, extensionFilter });

    return allLocations.filter(location => {
      // Filtrage par type principal
      const typeMatch = !typeFilter ||
        location.type?.some((t: any) =>
          t.coding?.some((c: any) => c.display?.toLowerCase() === typeFilter.toLowerCase())
        );

      const extensionMatch = !extensionFilter ||
        location.extension?.some((ext: any) => {
          const display = this.getExtensionDisplay(ext);
          return display?.toLowerCase() === extensionFilter.toLowerCase();
        });

      return typeMatch && extensionMatch;
    });
  })

  filterOptions = [
    { value: null, label: 'Tous les types' },
    { value: 'Salle d\'examen', label: 'Salle d\'examen' },
    { value: 'Bloc opératoire', label: 'Bloc opératoire' },
    { value: 'Box de soins', label: 'Box de soins' },
    { value: 'Bâtiment', label: 'Bâtiment' },
    { value: 'Chambre', label: 'Chambre' },
    { value: 'Etage', label: 'Etage' },
    { value: 'Laboratoire', label: 'Laboratoire' },
    { value: 'Salle de consultation', label: 'Salle de consultation' },
  ];

  extensionFilterOptions = [
    { value: null, label: 'Toutes les conditions' },
    { value: 'Temperature Control', label: 'Contrôle de température' },
    { value: 'Humidity rate Control', label: 'Contrôle d\'humidité' },
    { value: 'Air Quality Control', label: 'Contrôle de qualité de l\'air' },
    { value: 'Irradiation rate Control', label: 'Contrôle de l\'irradiation' },
    { value: 'Environment with pressure to prevents microparticles from entering', label: 'Environnement avec pression pour empêcher les microparticules de pénétrer' },
  ];

  setTypeFilter(filterValue: string | null) {
    this.filterSelected.set(filterValue);
  }

  setExtensionFilter(filterValue: string | null) {
    this.extensionFilterSelected.set(filterValue);
  }

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
