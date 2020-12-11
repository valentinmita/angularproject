import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service';
import {results} from "../results";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

 
  title= "Works";

  constructor(
    private api: GetApiService,
  ) { }

 
  
  ngOnInit(): void{}
}

