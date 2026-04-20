import dynamic from 'next/dynamic';

const BuoyMap = dynamic(
  () => import('@/components/tracker/BuoyMap'),
  {ssr: false}
);

export default function TrackerPage() {
  return (
    <main style={{height: '100vh'}}>
      <BuoyMap />
    </main>
  );
}
