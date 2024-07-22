import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: any[] = [];
  users: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.loadUsers();
    });
  }

  loadUsers(): void {
    this.postService.getUsers().subscribe(users => {
      this.users = users;
      this.posts = this.posts.map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId)
      }));
    });
  }
}
