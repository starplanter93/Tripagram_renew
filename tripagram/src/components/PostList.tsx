'use client';
import { SimplePost } from '@/model/post';
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import PostsListCard from './PostsListCard';

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>('/api/posts');

  console.log(posts);

  return (
    <section>
      {loading && (
        <div>
          <GridLoader color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostsListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
