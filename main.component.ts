import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private ser:MainService){}
  ngOnInit(){}
  getdata(){
    this.ser.getData().subscribe((d=>{
      console.log(d)
    }))
  }
}
