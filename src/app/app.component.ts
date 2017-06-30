import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor( private _ro: Router, private _au: AutService) {}

  resetUser() {
    this._au.resetUser();
    this._ro.navigateByUrl('/');
  }
}
