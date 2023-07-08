import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
    `
    .container{
      padding-left:20px;
    }
    `
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activedRoute:ActivatedRoute, 
    private router:Router,
    private countriesService: CountriesService) {

  }
  ngOnInit(): void {
    
    this.activedRoute.params.
    pipe(
      //tap(console.log)
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
      .subscribe( country => {

        if(!country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country;
        //console.log('Tenemos un país');
        //return '';
      });
      //.subscribe((params) => {
        //.subscribe(({id}) => {    //desestructuración
         // this.searchCountry(id);
        //console.log({ params: id})
          //console.log( {params: params['id']});
      //});
  }

  /*searchCountry(code:string) {
    this.countriesService.searchCountryByAlphaCode(code)
    .subscribe( country => {
      console.log({country});
    });
  }*/
}
