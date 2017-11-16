import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cake } from './cake';

import 'rxjs/add/operator/map';

@Injectable()
export class GetApiService {
  constructor(private http: Http) {}

  getCake(url, id): Observable<Cake> {
    return this.http.get(url + id).map((res:Response) => res.json());

  }
  createCake(url, body) {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(url, body, options).map((res:Response) => res.status);
  }
  deleteCake(url, id) {
    return this.http.delete(url + id).map((res:Response) => res.status);

  }
  updateCake(url, id, cake) {
    return this.http.put(url + id, cake).map((res:Response) => res.status);

  }
}