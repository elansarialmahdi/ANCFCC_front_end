import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmation-page.html',
  styleUrls: ['./confirmation-page.css']
})
export class ConfirmationPageComponent {
  formData = {
    conservation: '',
    numeroTitre: '',
    indice: '',
    indiceSpecial: '',
    captchaInput: '',
    acceptTerms: false
  };

  constructor(private router: Router) {}

  

  goBack() {
    this.router.navigate(['/signup']);
  }

  refreshCaptcha() {
    console.log('Refreshing captcha');
    // Implement captcha refresh logic
    // Generate new captcha code
  }

  submitForm() {
    if (this.isFormValid()) {
     
      this.router.navigate(['/user-dashboard']);
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.conservation &&
      this.formData.numeroTitre &&
      this.formData.indice &&
      this.formData.indiceSpecial &&
      this.formData.captchaInput &&
      this.formData.acceptTerms
    );
  }
}

