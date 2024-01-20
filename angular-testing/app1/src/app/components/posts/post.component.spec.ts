import { of } from 'rxjs';
import { Post } from '../../models/Post.model';
import { PostService } from '../../services/post/post.service';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let POSTS: Post[];
  let component: PostComponent;
  let mockPostService: any;
  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'Hi, I am John',
        title: 'Name',
      },
      {
        id: 2,
        body: 'Hi, I am Alex',
        title: 'Name',
      },
      {
        id: 3,
        body: 'Hi, I am Susan',
        title: 'Name',
      },
    ];

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    component = new PostComponent(mockPostService);
  });

  describe('delete method', () => {
    it('should delete the selected Post from the posts', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it('should delete the actual selected Post in Posts', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
      component.delete(POSTS[1]);
      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete method in Post Service only once.', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
