export default function Card({ children }: any) {
  return (
    <div className="bg-surface/70 backdrop-blur border border-border rounded-xl p-6 shadow-lg">
      {children}
    </div>
  );
}
