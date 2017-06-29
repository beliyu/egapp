import { Injectable } from '@angular/core';

@Injectable()

export class AutService {

  public getGroup() {
    const user = JSON.parse(localStorage.getItem('user'));
    const group = user && user.group;
    return group;
  }
}
