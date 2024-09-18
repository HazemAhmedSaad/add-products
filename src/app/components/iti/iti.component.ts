import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iuser } from './iuser';

@Component({
  selector: 'app-iti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iti.component.html',
  styleUrl: './iti.component.css'
})
export class ItiComponent {
  track: string = 'Select Your Track';

  user: Iuser[] = [

  ];
  name: string = ''; // Declare name as a string
  age!: any; // Declare age as a number

  addUser(nameField: any, ageField: any) {
    if (this.name && this.age >= 18) {
      // Add the user to the array
      this.user.push({
        name: this.name,
        age: this.age
      });
      // Reset the form fields
      // this.name = '';
      // this.age = undefined;
      nameField.reset();
      ageField.reset();
    }
  }

  deleteUser(index: number) {
    this.user.splice(index, 1);
  }
}
