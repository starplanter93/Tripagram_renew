type AvatarSize = 'small' | 'medium' | 'large';

interface Ownprops {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
}

export default function Avatar({
  image,
  size = 'large',
  highlight = false,
}: Ownprops) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        alt='user profile'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
    : '';
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case 'small':
      return 'w-[34px] h-[34px] p-[0.1rem]';
    case 'medium':
      return 'w-[42px] h-[42px] p-[0.1rem]';
    case 'large':
      return 'w-16 h-16 p-[0.2rem]';
  }
}
