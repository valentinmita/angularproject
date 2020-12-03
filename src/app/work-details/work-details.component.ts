import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {results}  from '../results';
import {GetApiService} from '../get-api.service';
import {switchMap} from "rxjs/operators";


@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  @Input()
  item: {
    categories: any;
    company: string;
    contents: string;
    id: number;
    levels: string;
    locations: string;
    model_type: string;
    name: string;
    refs: string;
    short_name: string;
    type: string;
  } | undefined;
  @Input ()
  prova: results[]=[];
  selectedId:string | undefined;
  constructor(
    private route: ActivatedRoute,
    private api: GetApiService,
  ) { }

  ngOnInit():void {
console.log(this.route.params);
console.log (this.prova)
     this.route.paramMap.subscribe
      (params => {
        this.item=this.prova[+params.get('productId')!];

        // (+) before `params.get()` turns the string into a number
   console.log(params.get('selectedId'));
        console.log (this.prova)
        
      })
    ;
}
}