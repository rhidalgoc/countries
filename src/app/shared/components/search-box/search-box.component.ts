import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
    `.inbox{
      width:200px;
    }
    .container{
      padding-left:20px
    }
    `
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  @Input()
  public placeholder:string = ''

  @Input()
  public initialValue:string = ''

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  private debounce:Subject<string> = new Subject<string>();

  private debouncerSuscription?:Subscription;

  ngOnInit(): void {
    this.debouncerSuscription = this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
      //console.log('debounce is', value);
    })

  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string):void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string) {
    this.debounce.next(searchTerm);
    //console.log(searchTerm);
  }
}
