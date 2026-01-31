import Link from "next/link";

export default function StudyMaterials() {
  const grades = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-4 gap-6">
      {grades.map((g) => (
        <Link
          key={g}
          href={`/study-materials/grade-${g}`}
          className="p-8 text-center bg-white rounded-xl shadow hover:shadow-xl"
        >
          Grade {g}
        </Link>
      ))}
    </div>
  );
}
