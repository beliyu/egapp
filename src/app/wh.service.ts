import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WhModel {
  constructor(
    public book: string,
    public year: string,
    public id?: string
  ) { }
}
@Injectable()

export class WhmService {
  headers: Headers;
  private _url = 'http://localhost:3004/WhM';
  constructor(private _http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  };
  public getAll(): Observable<WhModel[]> {
    const token = localStorage.getItem('token');
    this.headers.append('Authorization', 'Bearer ' + token);
    return this._http.get(this._url, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  };
  public add(w: WhModel): Observable<any> {
    const token = localStorage.getItem('token');
    this.headers.set('Authorization', 'Bearer ' + token);
    return this._http.post(this._url, JSON.stringify(w), { headers: this.headers })
      .map(res => res.json())
      .catch(this.handleError);
  };
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
