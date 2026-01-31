export default function Card({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
      <h3 className="text-primary font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
