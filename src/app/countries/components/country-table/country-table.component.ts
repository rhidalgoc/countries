import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:30px;
    }
    .tabla{
      font-size:13px;
      max-width:600px;
    }
    `
  ]
})
export class CountryTableComponent {

@Input()
public countries:Country[] = []
}
