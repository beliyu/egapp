import { Component, OnInit } from '@angular/core';
import { WhmService, WhModel } from '../wh.service';
import { AutService } from '../auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[AutService]
})
export class BookComponent implements OnInit {
  WM = [];
  constructor(private _whm: WhmService, private _au: AutService) { }

  ngOnInit() {
    this.whmGetAll();
  }
  whmGetAll() {
    this._whm.getAll().subscribe(data => {
      this.WM = [...data];
    }, err => console.log(err));
  }
  whmAdd(a) {
    const w = new WhModel(a.book, a.year);
    this._whm.add(w).subscribe(data => {
     this.WM = [...this.WM, data] ;
    }, err => console.log(err));
  }
}
