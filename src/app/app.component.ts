import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { FlowersComponent } from "./flowers/flowers.component";
import { WeatherComponent } from "./weather/weather.component";
import { TaskList } from "./task-list/task-list.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { VatCalculatorFormComponent } from "./vat-calculator-form/vat-calculator-form.component";
import { CheckBonComponent } from "./check-bon/check-bon.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsersComponent, FlowersComponent, WeatherComponent, TaskList, RegistrationFormComponent, VatCalculatorFormComponent, CheckBonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'directives-angular';
}
