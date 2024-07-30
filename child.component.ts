import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input()primary:any;
@Input()secondary:any;
@Output()result = new EventEmitter();
   constructor(){}

   ngOnInit(){
    console.log(this.primary,this.secondary)
   }
  addNumbers(){
    let res = this.primary+this.secondary;
    this.result.emit(res);
  }
}

