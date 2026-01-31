export default function AnnouncementCard({ title, date }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{date}</p>
    </div>
  );
}
