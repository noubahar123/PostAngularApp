import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  posts: any[] = [];
  showForm = false;
  errorMessage = '';

  newPost = {
    title: '',
    body: ''
  };

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef   // TO update UI immediately 
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;           // assign data
        this.cdr.detectChanges();    // FORCE UI UPDATE
      },
      error: () => {
        this.errorMessage = 'Failed to load posts';
        this.cdr.detectChanges();    // ensure error shows
      }
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.errorMessage = '';
    this.cdr.detectChanges();        // needed for zoneless
  }

  submitPost() {
    this.postService.addPost(this.newPost).subscribe({
      next: (response) => {
        this.posts = [response, ...this.posts]; // immutable update
        this.newPost = { title: '', body: '' };
        this.showForm = false;
        this.cdr.detectChanges();    //  update UI
      },
      error: () => {
        this.errorMessage = 'Adding post failed';
        this.cdr.detectChanges();    //  update UI
      }
    });
  }
}
