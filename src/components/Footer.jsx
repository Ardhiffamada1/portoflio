export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30 text-xs text-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span>
            © {currentYear} Ardhiffa Mada Perdana. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>Designed with restraint & clarity</span>
        </div>
      </div>
    </footer>
  );
}
