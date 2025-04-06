import { Component } from '@angular/core';
import { Flower } from './flower-interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-flowers',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './flowers.component.html',
  styleUrl: './flowers.component.scss'
})
export class FlowersComponent {
  flowers: Flower[] = [
    { name: 'Róża', emoji: '🌹', color: 'red', meaning: 'miłóść' },
    { name: 'Tulipan', emoji: '🌷', color: 'pink', meaning: 'Czułość' },
    { name: 'Słonecznik', emoji: '🌻', color: 'yellow', meaning: 'radość' },
    { name: 'Hibiskus', emoji: '🌺', color: 'purple', meaning: 'Egzotyka' },
    { name: 'Lilia', emoji: '💮', color: 'white', meaning: 'Czystość' },
    { name: 'Haber', emoji: '🌼', color: 'blue', meaning: 'Wierność' },
    { name: 'Fiołek', emoji: '🪻', color: 'violet', meaning: 'Pokora' },
    { name: 'Mieczyk', emoji: '🍀', color: 'green', meaning: 'Siła' }
  ]

  age: number = 10;



}
