import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post: Post | null = null;
}
