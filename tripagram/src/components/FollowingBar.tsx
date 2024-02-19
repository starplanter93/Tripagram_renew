'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from './Avatar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  console.log(data?.following);
  return (
    <section>
      {loading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        (!users || users.length === 0) && <p>{`팔로잉한 유저 없음`}</p>
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/users/${username}`}>
                <Avatar image={image} highlight />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
