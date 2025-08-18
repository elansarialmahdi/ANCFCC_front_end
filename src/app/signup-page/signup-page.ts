import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatSnackBarModule],
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
   //...................//
 captchaId: string = '';
 base64Image: string = '';
 isCaptchaValid: boolean = false;
//....................//

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

  constructor(private router: Router, private http : HttpClient, private snackBar: MatSnackBar ) {
    // Generate days 1-31
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }

    // Generate years from 1950 to current year
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
      this.years.push(i);
    }
        //to load the first captcha with the page 
    this.refreshCaptcha();
  }

  

  verifyPhone() {
    console.log('Verifying phone number:', this.formData.telephone);
    // Implement phone verification logic
  }

  refreshCaptcha() {
   this.http.get<any>('https://localhost:7232/api/Captcha/generate').subscribe({
      next: (res) => {
        this.captchaId = res.captchaId;
        this.base64Image = 'data:image/png;base64,' + res.imageBase64;
      },
      error: (err) => console.error('Error fetching captcha', err)
    });
  }
   validateCaptcha() {
  const body = {
    captchaId: this.captchaId,
    userInput: this.formData.verificationCode
  };

  console.log('Verification code:', this.formData.verificationCode);

  this.http.post<any>('https://localhost:7232/api/Captcha/validate', body).subscribe({
    next: (res) => {
      console.log(res);
      if (res.success) {
        this.isCaptchaValid = true;
        this.snackBar.open('Captcha validated successfully ✅', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
      } else {
        this.isCaptchaValid = false;
        this.snackBar.open('Invalid captcha ❌ Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
        this.refreshCaptcha();
      }
    },
    error: (err) => {
      this.isCaptchaValid = false;
      console.error('Error validating captcha', err);
      this.snackBar.open('An error occurred while validating captcha ⚠️', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    }
  });
}


  goToConfirmation() {
  if (this.isFormValid() && this.isCaptchaValid) {
    this.router.navigate(['/confirmation']);
  } else {
    this.snackBar.open('Please complete the form and validate captcha before proceeding ⚠️', 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
  }
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

