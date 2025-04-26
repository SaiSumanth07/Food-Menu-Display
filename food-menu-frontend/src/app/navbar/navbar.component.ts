import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule], // Added required imports
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showProfileModal = false;
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, City'
  };

  toggleProfileModal() {
    this.showProfileModal = !this.showProfileModal;
    document.body.style.overflow = this.showProfileModal ? 'hidden' : '';
  }
}