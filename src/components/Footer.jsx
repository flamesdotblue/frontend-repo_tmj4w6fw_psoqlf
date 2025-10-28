export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} TalentLink. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
