import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    return this.http.post(url, body).map((res:Response) => res.json());
  }
  deleteCake(url, id) {
    return this.http.delete(url + id,).map((res:Response) => res.status);

  }
  updateCake(url, id, cake) {
    return this.http.put(url + id, cake).map((res:Response) => res.json());

  }
}