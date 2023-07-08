import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      font-size:13px
    }
    hr{
      max-width:300px;
    }
    `
  ]
})
export class SidebarComponent {

}
