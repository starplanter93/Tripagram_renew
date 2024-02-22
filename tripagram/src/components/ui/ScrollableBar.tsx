import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const responsive = {
    desk: {
      breakpoint: { max: 4000, min: 576 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <Carousel containerClass='w-full flex gap-2' responsive={responsive}>
      {children}
    </Carousel>
  );
}
