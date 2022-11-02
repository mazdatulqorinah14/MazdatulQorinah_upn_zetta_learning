import { Component } from '@angular/core';

@Component({
   selector: 'data-app',
   templateUrl: './data.component.html',
})
// yang punya tanda @ namanya decoratore untuk enhance class
export class DataComponent {
   title: string = 'Card Title';

   onAddTitle() {
      this.title = 'Title Changed';
   }
}