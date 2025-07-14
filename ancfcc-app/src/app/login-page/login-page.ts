import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPageComponent {
  formData = {
    cin: '',
    numero: '',
    verification: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Login form submitted:', this.formData);
      // Implement login logic
      // Navigate to dashboard or next page
    }
  }

  sendVerification() {
    if (this.formData.numero) {
      console.log('Sending verification code to:', this.formData.numero);
      // Implement verification code sending logic
      // Show success message or handle errors
    } else {
      console.log('Please enter a phone number first');
    }
  }

  goToSignup(event: Event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.cin &&
      this.formData.numero &&
      this.formData.verification
    );
  }
}

