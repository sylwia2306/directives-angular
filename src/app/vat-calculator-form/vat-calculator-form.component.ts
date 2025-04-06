import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vat-calculator-form',
  imports: [CommonModule, FormsModule,],
  templateUrl: './vat-calculator-form.component.html',
  styleUrl: './vat-calculator-form.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class VatCalculatorFormComponent {
  description: string = '';
  option: string = '';
  amount: string = '';
  vat: string = '';
  isVisible: boolean = false
  resultVat: number | undefined
  resultAmount: number | undefined


  
  clearFields():void{
    this.description = '';
    this.option = '';
    this.amount  = '';
    this.vat = ''
    this.isVisible = false
  }

  calculateResult() {
    console.log('oblicz');
    this.isVisible = true
    let amountNumber: number = Number(this.amount) // zrób liczbe ze stringa dla kwoty
    let vatNumberRate: number = Number(this.vat) // zrób liczbe ze stringa dla stawki VAT
    let vatAsPercent: number = vatNumberRate * 0.01 // zrób procent ze stawki VAT np. z 23% zrób 0.23
    
    
    if (this.option === "1") {
      let nettoAmount: number = amountNumber / (vatAsPercent + 1)
      this.resultVat = amountNumber - nettoAmount
      this.resultAmount = nettoAmount
    } else if (this.option === "2") {
      let bruttoAmount:number = (vatAsPercent + 1)*amountNumber
      this.resultVat = bruttoAmount-amountNumber
      this.resultAmount=bruttoAmount 
      //result 
      console.log("Opcja 2");
    } else {
      console.log("Nic");
    }

  }


}
