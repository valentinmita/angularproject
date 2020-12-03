import { Component, OnInit } from '@angular/core';
import {results} from "../results";
import {GetApiService} from '../get-api.service';
import {switchMap} from "rxjs/operators";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
   
  prova: results[]=[];
 
  selectedId: number | undefined;
  constructor(
    private api :GetApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
      this.api.apiCall()
      .subscribe(data =>{
         this.prova=data;
        console.log(this.prova)
      });
       }
}


  /*{
    this.api.apiCall()
    .subscribe
      (
        (data:results[]) => {
          this.prova=data;
        console.log (data);

        }
      
      );
     }
  }*/


   /* console.log( this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        console.log(params.get('id'));
        return this.api.apiCall();
      })
    ));
  }*/