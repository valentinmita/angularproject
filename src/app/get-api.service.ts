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
    return this.http.get<results[]>(`https://www.themuse.com/api/public/jobs?category=Engineering&page=10`); 
}


apiCallid(id: number) {
  return this.http.get(`https://www.themuse.com/api/public/jobs/${id}`);
}



apiCallLev_entry(){
  return this.http.get(`https://www.themuse.com/api/public/jobs?category=Engineering&level=Entry%20Level&page=10 `)
}
apiCallLev_mid(){
  return this.http.get(`https://www.themuse.com/api/public/jobs?category=Engineering&level=Mid%20Level&page=10 `)
}
apiCallLev_senior(){
  return this.http.get(`https://www.themuse.com/api/public/jobs?category=Engineering&level=Senior%20Level&page=10`)
}
apiCallLev_inter(){
  return this.http.get(`https://www.themuse.com/api/public/jobs?category=Engineering&level=Internship&page=10`)
}
apiCallLev_management(){
  return this.http.get(`https://www.themuse.com/api/public/jobs?category=Engineering&level=management&page=10 `)
}



apiCallComp(id2:number){
  return this.http.get(`https://www.themuse.com/api/public/companies/${id2} `)
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