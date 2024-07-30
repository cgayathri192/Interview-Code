import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
firstvalue = 30;
secondvalue = 40;
result:any;
  constructor(){}
  showParentResult(res:any){
    this.result = res;
    console.log(this.result);
  }
}
