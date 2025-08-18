import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})
export class UserDashboard { 
  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/login']); // Example: navigate to login page after logout
  }
}



