import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {GetApiService} from "./get-api.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: WorkListComponent },
      { path: 'details/:selectedId', component: WorkDetailsComponent},
      
    ])  
  ],

  declarations: [
    AppComponent,
    WorkListComponent,
    WorkDetailsComponent,
    BarComponent,
    
  ],
  
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
