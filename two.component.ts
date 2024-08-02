import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent {
   childMessage : string = "Good Morning"

   showMessage(){
    console.log(this.childMessage)
   }

}
