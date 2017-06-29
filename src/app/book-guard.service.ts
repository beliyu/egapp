import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutService } from './auth.service';

@Injectable()
export class BookGuardService implements CanActivate {

  constructor(private _au: AutService, private _ro:Router) { }
  canActivate() {

    if (this._au.getGroup() > 0) { return true; }
    this._ro.navigate(['/']);
    return false;
  }
}
