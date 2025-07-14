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

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Confirmation form submitted:', this.formData);
      // Navigate to next step or process the form
      alert('Form submitted successfully!');
    }
  }

  goBack() {
    this.router.navigate(['/signup']);
  }

  refreshCaptcha() {
    console.log('Refreshing captcha');
    // Implement captcha refresh logic
    // Generate new captcha code
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.conservation &&
      this.formData.numeroTitre &&
      this.formData.indice &&
      this.formData.captchaInput &&
      this.formData.acceptTerms
    );
  }
}

