import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-titre-foncier',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './titre-foncier.html',
  styleUrl: './titre-foncier.css'
})
 
export class TitreFoncierComponent {
  titres = [1, 2, 3, 4]; // Juste pour répéter les cartes
  showAddTitreModal: boolean = false;
  captchaQuestion: string = '';
  captchaAnswer: number = 0;
  captchaInput: string = '';

  newTitre = {
    conservation: '',
    numeroTitre: '',
    indice: '',
    indiceSpecial: '',
  };

  constructor(private router: Router) { }

  generateCaptcha(): void {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    this.captchaQuestion = `${a} + ${b} = ?`;
    this.captchaAnswer = a + b;
  }

  openAddTitreModal(): void {
    this.showAddTitreModal = true;
    this.generateCaptcha();
  }

  closeAddTitreModal(): void {
    this.showAddTitreModal = false;
    this.resetForm();
  }

  submitAddTitreForm(): void {
    if (parseInt(this.captchaInput) !== this.captchaAnswer) {
      alert('Captcha incorrect !');
      return;
    }
    // Handle form submission here (e.g., send data to backend)
    alert('Titre foncier ajouté !');
    this.closeAddTitreModal();
  }

  resetForm(): void {
    this.newTitre = {
      conservation: '',
      numeroTitre: '',
      indice: '',
      indiceSpecial: '',
    };
    this.captchaInput = '';
  }

  logout(): void {
    
    this.router.navigate(['/login']); // Example: navigate to login page after logout
  }
}
