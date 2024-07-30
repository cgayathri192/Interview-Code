import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CapitalizeComponent } from './capitalize/capitalize.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { MainComponent } from './main/main.component';
import { StorageComponent } from './storage/storage.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'capitalize',
    component:CapitalizeComponent
  },
  {
    path:'class',
    component:ClassComponent
  },
  {
    path:'style',
    component:StyleComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'storage',
    component:StorageComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
