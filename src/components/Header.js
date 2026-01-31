import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-primary text-xl">GTMS</h1>

        <nav className="space-x-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/study-materials">Materials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
