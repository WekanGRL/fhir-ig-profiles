import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  http = inject(HttpClient);

  getLocations() {
    console.log("getLocations called");
    return this.http.get<any>("https://fhir.chl.connected-health.fr/fhir/Location");
  }
  

  getLocation(id: string) {
    return this.http.get(`https://fhir.chl.connected-health.fr/fhir/Location/${id}`);
  }

  addLocation(location: any) {
    return this.http.post("https://fhir.chl.connected-health.fr/fhir/Location", location);
  }
  
  updateLocation(id: string, location: any) {
    return this.http.put(`https://fhir.chl.connected-health.fr/fhir/Location/${id}`, location);
  }

  getAppointmentsByLocation(locationId: string) {
    return this.http.get(`https://fhir.chl.connected-health.fr/fhir/Appointment?actor=${locationId}`);
  }
}
