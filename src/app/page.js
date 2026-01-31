import Hero from "@/components/Hero";
import StatCard from "@/components/StatCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Welcome to Our Learning Community
        </h2>

        <p className="text-gray-600 leading-relaxed">
          For decades, Mu/Thenniyankulam GTMS has been a beacon of educational
          excellence in the Thunukkai Division. Our school is dedicated to
          providing quality education that nurtures academic excellence, moral
          values, and practical skills.
        </p>
      </section>

      {/* QUOTE */}
      <section className="bg-green-50 py-16 text-center italic text-lg">
        “Education is the most powerful weapon which you can use to change the world.”
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">A Message From Our Principal</h2>
        <div className="bg-white rounded-2xl shadow p-8">
          <p>
            It is with great pride and honor that I welcome you to our school.
            Our institution has been serving the educational needs of our
            community for generations.
          </p>
        </div>
      </section>

      {/* STATS GREEN SECTION */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
          <StatCard number="45+" label="Expert Teachers" />
          <StatCard number="800+" label="Students" />
          <StatCard number="1–11" label="Grades" />
          <StatCard number="20+" label="Facilities" />
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Announcements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <AnnouncementCard title="Term 1 Exams Released" date="January 25, 2026" />
          <AnnouncementCard title="Annual Sports Meet Registration" date="January 26, 2026" />
          <AnnouncementCard title="New Study Materials Online" date="January 28, 2026" />
        </div>
      </section>

      {/* STUDY MATERIAL CTA */}
      <section className="bg-green-50 text-center py-20">
        <h2 className="text-3xl font-bold mb-6">Study Materials & Resources</h2>

        <Link
          href="/study-materials"
          className="bg-primary text-white px-8 py-4 rounded-xl"
        >
          Access Study Materials
        </Link>
      </section>
    </>
  );
}
