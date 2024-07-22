import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'post/:id', component: PostDetailsComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes),HttpClientModule ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }