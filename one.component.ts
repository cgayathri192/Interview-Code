import { Component, ViewChild } from '@angular/core';
import { TwoComponent } from '../two/two.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  @ViewChild(TwoComponent) TwoComponent! : TwoComponent;

  callChildMethod(){
    this.TwoComponent.showMessage()
  }

}
