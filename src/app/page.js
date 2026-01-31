import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-primary text-white text-center py-28">
        <h1 className="text-5xl font-bold mb-4">Mu/Thenniyankulam GTMS</h1>
        <p>Building Knowledge. Shaping Futures.</p>
      </div>

      <Section>
        <div className="grid md:grid-cols-4 gap-6">
          <Card title="45+" desc="Teachers" />
          <Card title="800+" desc="Students" />
          <Card title="1–11" desc="Grades" />
          <Card title="20+" desc="Facilities" />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Link href="/study-materials">
            <Button>Access Study Materials</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
