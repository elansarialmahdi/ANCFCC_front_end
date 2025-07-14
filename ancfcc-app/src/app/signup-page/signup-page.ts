import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-page.html',
  styleUrls: ['./signup-page.css']
})
export class SignupPageComponent {
  formData = {
    nom: '',
    prenom: '',
    adresse: '',
    adresseAr: '',
    telephone: '',
    verificationCode: '',
    jour: '',
    mois: '',
    annee: '',
    cin: ''
  };

  days: number[] = [];
  months = [
    { value: '01', label: 'Janvier' },
    { value: '02', label: 'Février' },
    { value: '03', label: 'Mars' },
    { value: '04', label: 'Avril' },
    { value: '05', label: 'Mai' },
    { value: '06', label: 'Juin' },
    { value: '07', label: 'Juillet' },
    { value: '08', label: 'Août' },
    { value: '09', label: 'Septembre' },
    { value: '10', label: 'Octobre' },
    { value: '11', label: 'Novembre' },
    { value: '12', label: 'Décembre' }
  ];
  years: number[] = [];

  constructor(private router: Router) {
    // Generate days 1-31
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }

    // Generate years from 1950 to current year
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
      this.years.push(i);
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      this.router.navigate(['/confirmation']);
    }
  }

  verifyPhone() {
    console.log('Verifying phone number:', this.formData.telephone);
    // Implement phone verification logic
  }

  refreshCaptcha() {
    console.log('Refreshing captcha');
    // Implement captcha refresh logic
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.nom &&
      this.formData.prenom &&
      this.formData.adresse &&
      this.formData.adresseAr &&
      this.formData.telephone &&
      this.formData.jour &&
      this.formData.mois &&
      this.formData.annee &&
      this.formData.cin
    );
  }
}

