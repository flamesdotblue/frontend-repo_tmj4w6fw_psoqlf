import { User, Briefcase, MessageSquare, Brain, Bell, Search } from 'lucide-react';

const features = [
  {
    id: 'users',
    title: 'User System',
    icon: User,
    color: 'text-emerald-400',
    items: [
      'Job Seekers and Job Providers roles',
      'Email sign-in + Google/LinkedIn OAuth',
      'Rich profiles with experience, education & skills',
      'Role-based dashboards'
    ]
  },
  {
    id: 'social',
    title: 'Social Networking',
    icon: MessageSquare,
    color: 'text-sky-400',
    items: [
      'Connections & requests',
      'Real-time private messaging',
      'Posts with likes, comments, and shares',
      'In-app notifications'
    ]
  },
  {
    id: 'jobs',
    title: 'Job System',
    icon: Briefcase,
    color: 'text-violet-400',
    items: [
      'Post openings with skills, salary, and location',
      'Search and apply with one click',
      'Save jobs for later',
      'Shortlist and message applicants'
    ]
  },
  {
    id: 'ai',
    title: 'AI Assist',
    icon: Brain,
    color: 'text-amber-400',
    items: [
      'Resume skill extraction (PDF/DOCX)',
      'Personalized skill tests & badges',
      'Job & candidate recommendations',
      'People you may know'
    ]
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-neutral-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to hire and get hired</h2>
          <p className="mt-3 text-neutral-300">A modern, AI-native professional network that streamlines discovery, verification, and communication.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ id, title, icon: Icon, color, items }) => (
            <div key={id} className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 shadow-sm transition hover:border-white/20 hover:bg-neutral-900/60">
              <div className={`mb-4 inline-flex items-center gap-2 ${color}`}>
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{title}</span>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                {items.map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-sky-400">
              <Bell className="h-4 w-4" />
              <span className="text-sm font-medium">Notifications</span>
            </div>
            <p className="text-sm text-neutral-300">Stay on top of messages, connection requests, and job updates in real time.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-emerald-400">
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Powerful search</span>
            </div>
            <p className="text-sm text-neutral-300">Filter by skills, experience, location, and more to find your perfect match.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-amber-400">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Smart matching</span>
            </div>
            <p className="text-sm text-neutral-300">AI suggests relevant jobs, candidates, and connections based on your profile.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
