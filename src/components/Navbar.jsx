import { Briefcase, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-900/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Briefcase className="h-6 w-6 text-emerald-400" />
            <span className="text-lg font-semibold tracking-tight">TalentLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#ai" className="hover:text-white transition-colors">AI</a>
            <a href="#jobs" className="hover:text-white transition-colors">Jobs</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/5">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white shadow hover:bg-emerald-400">
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
