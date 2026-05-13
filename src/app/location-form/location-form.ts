import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './location-form.html',
  styleUrl: './location-form.css',
})
export class LocationForm {
  @Output() locationCreated = new EventEmitter<any>();

  locationForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    identifier: new FormControl('', Validators.required),
    type: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    status: new FormControl('active'),
    partOf: new FormControl('')
  });
  controls = [
    { code: 'temperature', display: 'Temperature Control', checked: false },
    { code: 'humidity', display: 'Humidity rate Control', checked: false },
    { code: 'air', display: 'Air Quality Control', checked: false }
  ]

  onSubmit() {
    if (this.locationForm.valid) {
      const formData = this.locationForm.value;

      const selectedExtensions = this.controls
        .filter(c => c.checked)
        .map(c => ({ code: c.code, display: c.display }));

      const finalData = {
        ...formData,
        environmentalControls: selectedExtensions
      };

      console.log('Données complètes avec extensions :', finalData);

      this.locationCreated.emit(finalData);

      this.locationForm.reset({ status: 'active' });
      this.controls.forEach(c => c.checked = false);

      alert('Formulaire soumis !');
    }
  }
}
