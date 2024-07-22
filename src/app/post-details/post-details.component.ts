import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: any;
  user: any;
  comments: any[] = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private routes:Router
  ) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPosts().subscribe(posts => {
      this.post = posts.find(p => p.id === postId);
      this.loadUser();
      this.loadComments();
    });
  }

  loadUser(): void {
    this.postService.getUser(this.post.userId).subscribe(user => {
      this.user = user;
    });
  }

  loadComments(): void {
    this.postService.getComments(this.post.id).subscribe(comments => {
      this.comments = comments;
    });
  }
  backtohome(){
    this.routes.navigate(['/home']);
  }
}
