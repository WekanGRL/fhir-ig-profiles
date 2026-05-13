import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocationForm } from '../app/location-form/location-form'; // Importe ton nouveau composant

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LocationForm], // Ajoute LocationForm ici
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  locations: any[] = [];
  selectedLocation: any = null;
  showForm: boolean = false; // Variable pour basculer l'affichage

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
  const saved = localStorage.getItem('mes_salles');
  if (saved) {
    const bundle = JSON.parse(saved);
    // On extrait les ressources de l'entry pour les afficher dans la liste
    this.locations = bundle.entry.map((e: any) => e.resource);
  } else {
    this.http.get<any>('./location.json').subscribe(bundle => {
      this.locations = bundle.entry.map((e: any) => e.resource);
    });
  }
}

  selectLocation(loc: any) {
    this.selectedLocation = loc;
    this.showForm = false;// Ferme le formulaire si on clique sur une salle
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (this.showForm) this.selectedLocation = null; // Désélectionne la salle si on ouvre le formulaire
  }

  addLocationToList(formData: any) {
  const newResource = {
    resourceType: "Location",
    id: Math.floor(Math.random() * 1000).toString(),
    meta: {
      versionId: "1",
      lastUpdated: new Date().toISOString(),
      profile: ["http://isis.fr/StructureDefinition/patrimoine-location"]
    },
    identifier: [{
      system: "http://isis.fr/locations",
      value: formData.identifier
    }],
    status: formData.status,
    name: formData.name,
    type: [{
      coding: [{
        system: "http://isis.fr/ValueSet/vs-types",
        code: "SLE",
        display: formData.type
      }]
    }],
    telecom: [{
      system: "phone",
      value: formData.phone,
      use: "work"
    }],
    address: {
      city: "Castres",
      postalCode: "81100",
      country: "FR"
    }
  };
  const newEntry = {
    fullUrl: `https://fhir.chl.connected-health.fr/fhir/Location/${newResource.id}`,
    resource: newResource,
    search: { mode: "match" }
  };

  let bundle = JSON.parse(localStorage.getItem('mes_salles') || 'null');

  if (!bundle) {
    bundle = {
      resourceType: "Bundle",
      id: crypto.randomUUID(),
      meta: { lastUpdated: new Date().toISOString() },
      type: "searchset",
      total: 0,
      link: [{ relation: "self", url: "https://fhir.chl.connected-health.fr/fhir/Location" }],
      entry: []
    };
  }

  bundle.entry = [newEntry, ...bundle.entry];
  bundle.total = bundle.entry.length;
  bundle.meta.lastUpdated = new Date().toISOString();

  localStorage.setItem('mes_salles', JSON.stringify(bundle));

  this.locations = bundle.entry.map((e: any) => e.resource);
  this.selectedLocation = newResource;
  this.showForm = false;
}
}
