import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user = {group: 0, name: '', id: 0};
  tok = '';
constructor( private _ro: Router){}
  setUser(u) {
    // We simulate auth servis
    if (u === 'A') {
      this.user = {name: 'user A', id: 178, group: 0};
      this.tok = '123456.798012345.67890123';
    };
    if (u === 'B') {
      this.user = {name: 'user B', id: 251, group: 1};
      this.tok = '321456.898012345.36890123';
    };
    if (u === 'C') {
      this.user = {name: 'user C', id: 587, group: 2};
      this.tok = '213456.256012345.15890123';
    };
    localStorage.setItem('token', this.tok);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  resetUser() {
    this.user = {group: 0, name: '', id: 0};
    this.tok = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._ro.navigateByUrl('/');
  }
  isTok() {
    return (this.tok.length > 0) ? true : false;
  }
}
