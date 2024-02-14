import { User } from '@/model/user';
import Avatar from './Avatar';

interface Ownprops {
  user: User;
}

export default function SideBar({ user: { name, username, image } }: Ownprops) {
  return (
    <>
      <div>
        {image && <Avatar image={image} />}
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>
        About · Help · Press · API · Jobs · Privacy · Terms · Location ·
        Language
      </p>
      <p>Copyright Tripagram</p>
    </>
  );
}
