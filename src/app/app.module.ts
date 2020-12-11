import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {GetApiService} from "./get-api.service";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailsComponent } from './work-details/work-details.component';

import { BarComponent } from './bar/bar.component';
import { FormsModule, } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearhListComponent } from './searh-list/searh-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: WorkListComponent },
      { path: 'details/:selectedId', component: WorkDetailsComponent},
      { path: 'company/:companiId', component: SearhListComponent },
      
    ]),
    RouterModule.forChild([
      {
        path: 'details/:selectedId',
        children :[{
          path: '',
          redirectTo : '/company/:companiId',
          pathMatch :'full'
        },
        {
          path: 'company',
          component: SearhListComponent,
        },
         

        ]
      }
    ]),
     FormsModule,
     NgSelectModule,
     CommonModule,
     
  ],

  declarations: [
    AppComponent,
    WorkListComponent,
    WorkDetailsComponent,
    BarComponent,
    SearhListComponent,
    FooterComponent,
  ],
  
  
 

  providers: [HttpClientModule,GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
