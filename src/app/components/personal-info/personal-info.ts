import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  imports: [RouterModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css'
})
export class PersonalInfo {
  constructor(private router: Router) { }

  logout(): void {
    this.router.navigate(['/login']); // Example: navigate to login page after logout
  }
}
