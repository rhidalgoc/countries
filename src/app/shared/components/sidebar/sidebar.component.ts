import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      font-size:12px
    }
    hr{
      max-width:400px;
    }
    `
  ]
})
export class SidebarComponent {

}
