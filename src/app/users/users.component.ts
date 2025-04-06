import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent {
  users: User[] = [
    { name: 'Karol Ptak', role: 'admin' },
    { name: 'Maja Taja', role: 'user' },
    { name: 'Matt Chat', role: 'moderator' },
    { name: 'Jak Tan', role: 'guest' },
    { name: 'Julian Ptak', role: 'admin' },
    { name: 'Anielka Taja', role: 'user' },
    { name: 'Patryk Chat', role: 'moderator' },
    { name: 'Zbigniew Tan', role: 'guest' }
  ]

  isVisible: boolean = true
  age: number = 179;
  kolor: string = 'black';
  rozmiar: number = 10;
  wielkosc: number = 100;

  userName: string = "Job"
  color: string = "red"
  year: number = 1222
  productName: string | undefined
  productType: string | undefined


  wypisz(obj: any) {
    console.log(obj);
  }

  playPorno(): void {
    console.log('odtwórz porno');
  }

  playBajki(): void {
    console.log('odtwórz bajki');
  }

  up(): void {
    this.wielkosc = this.wielkosc + 10
  }

  down(): void {
    this.wielkosc = this.wielkosc - 10
  }

  setBlue(): void {
    this.kolor = 'blue';
  }

  setGreen(): void {
    this.kolor = 'green';
  }

  setRed(): void {
    this.kolor = 'red';
  }


  increaseTextSize(): void {
    this.rozmiar++;
  }

  decreaseTextSize(): void {
    this.rozmiar--;
  }




  toggle(): void {
    this.isVisible = !this.isVisible
    // działa tak samo jak kod poniżej
    // if(this.isVisible == true){
    //   this.isVisible = false
    // } else {
    //   this.isVisible = true
    // }
  }

}
