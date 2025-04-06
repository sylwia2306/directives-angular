import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-check-bon',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './check-bon.component.html',
  styleUrl: './check-bon.component.scss'
})
export class CheckBonComponent {
  test: string = "wartosc testowa"

  check: string = '';
  amount: string = '';
  residents: string = '';
  distance: string = '';
  isBon: boolean | undefined = undefined;


  checkBon() {
    let amountNumber: number = Number(this.amount)
    let distanceNumber: number = Number(this.distance)
    if (this.check === '1', '2') {

      if (amountNumber < 3000 && distanceNumber > 100) {
        this.isBon = true
      } else {
        this.isBon = false
      }
    }
    if (this.check === '3') {
      if (amountNumber < 5000 && distanceNumber > 50) {
        this.isBon = true
      } else {
        this.isBon = false
      }
    }
    if (this.check === '4') {
      this.isBon = false
    }
  }

  onChange(event:Event){
    console.log('Zmieniła się wartość');
    console.log(event);
  }


}
