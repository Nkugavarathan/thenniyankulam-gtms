import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center ">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* green overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      {/* content */}
      <div className="relative text-center max-w-4xl px-6">
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          Welcome to Excellence in Education
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Mu/Thenniyankulam
          <br />
          Government Tamil Mixed School
        </h1>

        <p className="mt-6 text-lg ">
          Nurturing young minds, building strong character, and empowering
          future leaders in the heart of Thunukkai, Northern Province.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/about" className="bg-white text-primary px-6 py-3 rounded-xl font-semibold">
            Discover Our Story
          </Link>
          <Link href="/contact" className="bg-primary border border-white px-6 py-3 rounded-xl">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
