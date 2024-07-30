import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent {
constructor(){}
ngOnInit() {
  localStorage.setItem('token','hiii')
  localStorage.setItem('name','john')
  sessionStorage.setItem('token','gayi')
}
}
