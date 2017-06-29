import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookGuardService } from './book-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookComponent, canActivate: [BookGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [BookGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
