import { Injectable } from '@angular/core';

import { HttpClient,HttpParams, HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RestService {

  
  constructor(private http:HttpClient) { }

  getData<U>(url: string): Observable<U>{
        return this.http.get(url)
         .map((res: Response) => Observable.create(res.json()));
         
  }

  postData<T,U> (data: T, url: string): Observable<U>{
       let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
     
        let body = JSON.stringify(data);
        return this.http.post(url,body,  { headers: headers})
         .map((res: Response) => res.json())
         .catch((err:Response) =>{
             return Observable.throw('Server error');
         });
  }

}
