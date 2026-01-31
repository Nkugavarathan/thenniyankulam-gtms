export default function Footer() {
  return (
    <footer className="bg-primary  mt-16">
      <div className="max-w-7xl mx-auto p-10 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="font-bold">Mu/Thenniyankulam GTMS</h2>
          <p className="text-sm mt-2">Empowering education in Northern Province</p>
        </div>

        <div>
          <p>📍 Thenniyankulam</p>
          <p>📞 +94 XX XXX XXXX</p>
          <p>✉ info@school.lk</p>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
