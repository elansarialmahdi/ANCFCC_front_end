import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  imports: [],
  templateUrl: './historique.html',
  styleUrl: './historique.css'
})
export class Historique {
constructor(private router: Router) {}

logout(): void {
    this.router.navigate(['/login']);
}
}