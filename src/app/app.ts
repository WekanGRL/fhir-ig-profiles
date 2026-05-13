import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  locations : any[] = [];

  selectedLocation : any =null;

  constructor(private readonly http : HttpClient){}

  ngOnInit(){
    this.http.get<any[]>('/location.json').subscribe({
      next: (data) => {
        this.locations = data;
        console.log('Données FHIR chargées :', this.locations);
      },
      error: (err) => {
        console.error('Erreur lors du chargement du JSON :', err);
      }
  });
  }

  selectLocation(loc: any){
    this.selectedLocation = loc;
  }
}
