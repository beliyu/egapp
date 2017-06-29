import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'addform-component',
  template: `
        <form [formGroup]="form1" (ngSubmit)="addNa()">
            <div class="form-group">
                <label>Book:</label>
                <input type="text" formControlName="book" required class="form-control">
                <div class="alert alert-danger" id="errIme"
                    [hidden]="!form1.controls['book'].errors?.required">
                    Required fild</div>
            </div>
            <div class="form-group">
                <label>Year:</label>
                <input type="text" formControlName="year" class="form-control">
            </div>
            <button class="btn btn-primary btn-block"  [disabled]="!form1.valid"
                     type="Submit">
                Add </button>
        </form>
  `
})
export class AddformComponent implements OnInit{
@Output() buttSub = new EventEmitter();
form1: FormGroup;
constructor(private _fb: FormBuilder) {
};

ngOnInit() {
   this.form1 = this._fb.group({
      book: ['book X', Validators.required],
      year: ['2017']
    });
};

addNa() {this.buttSub.emit(this.form1.value); }

cons() {console.log(this.form1); };
}
