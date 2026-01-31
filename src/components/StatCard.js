export default function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center">
      <h2 className="text-4xl font-bold text-primary">{number}</h2>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}
