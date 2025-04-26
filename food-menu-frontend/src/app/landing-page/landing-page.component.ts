import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  showLoginForm = true; // Toggle between login/signup
  isAuthenticated = false;

  // Form models
  loginData = { email: '', password: '' };
  signupData = { name: '', email: '', password: '', confirmPassword: '' };

  constructor(private router: Router) {}

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  onLogin() {
    // Add your actual authentication logic here
    console.log('Login data:', this.loginData);
    this.isAuthenticated = true;
    this.navigateToMenu();
  }

  onSignup() {
    // Add your actual signup logic here
    console.log('Signup data:', this.signupData);
    this.isAuthenticated = true;
    this.navigateToMenu();
  }

  private navigateToMenu() {
    this.router.navigate(['/menu']);
  }
}