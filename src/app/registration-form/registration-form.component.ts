import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {
  name: string | undefined
  surname: string | undefined
  email: string | undefined
  age: number | undefined
  password: string | undefined
  passwordConfirmation: string | undefined

  button(xxx: any): void {
    console.log(xxx);
    console.log("Zarejestrowano!");
  }
}
