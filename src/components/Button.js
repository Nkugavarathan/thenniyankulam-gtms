export default function Button({ children }) {
  return (
    <button className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
      {children}
    </button>
  );
}
