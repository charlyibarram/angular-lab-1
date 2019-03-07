import { Component } from '@angular/core';

@Component({
  
  template: `<div>
  <h2>This is the list of my favorites songs</h2>
  <ul>
    <li *ngFor ="let song of songs"> {{song}}</li>
  </ul>
   </div>`,

   selector: 'songs'

})
export class SongsComponent  { 

  public title:string =null;
  songs=[
    'Nobody knows',
    'Layla',
    'Drive'
  ];
}
