import dynamic from 'next/dynamic';

const GridLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

interface Ownprops {
  color?: string;
}

export default function GridSpinner({ color = 'red' }: Ownprops) {
  return <GridLoader color={color} />;
}
