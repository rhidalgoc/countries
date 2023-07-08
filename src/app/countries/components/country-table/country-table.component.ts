import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:25px;
    }  
    .tabla{
      font-size:12px;
      width:250px;
    }
    .container{
      padding-left:20px;
    }
    `
  ]
})
export class CountryTableComponent {

@Input()
public countries:Country[] = []
}
