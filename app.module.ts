import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CapitalizeComponent } from './capitalize/capitalize.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { MainComponent } from './main/main.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainInterceptor } from './main.interceptor';
import { StorageComponent } from './storage/storage.component';
import { PipePipe } from './pipe.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CapitalizePipe,
    CapitalizeComponent,
    ClassComponent,
    StyleComponent,
    MainComponent,
    StorageComponent,
    PipePipe,
    PipeComponent,
    HomeComponent,
    // DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MainInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
