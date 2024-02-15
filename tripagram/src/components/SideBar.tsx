import { User } from '@/model/user';
import Avatar from './Avatar';

interface Ownprops {
  user: User;
}

export default function SideBar({ user: { name, username, image } }: Ownprops) {
  return (
    <>
      <div className='flex items-center'>
        {image && <Avatar image={image} />}
        <div>
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>
        About · Help · Press · API · Jobs · Privacy · Terms · Location ·
        Language
      </p>
      <p className='font-bold text-sm mt-8 text-neutral-500'>
        Copyright Tripagram
      </p>
    </>
  );
}
