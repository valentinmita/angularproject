import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {results} from "./results"


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient,
  ) { }


  apiCall():Observable<results[]>
  {
    return this.http.get('https://www.themuse.com/api/public/jobs?category=Engineering&page=10')
    .pipe(map
    (
      (response:any) => {
        const data = response.results;
        console.log (data)
        return <results[]>data ;
   
      }
    )
    );
   }
}



/*{
  return this.http.get('https://www.themuse.com/api/public/jobs?category=Engineering&page=10')
  .pipe(map
  (
    (response:any) => {
      const data = response;
      console.log (data.results)
      return data.results;
    }
  )
  );
 }*/