import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4oHqO9G6sK1pc2f0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />
      </div>

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" /> AI-powered networking & recruitment
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Connect talent and opportunity with intelligent matching
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Build a standout profile, verify your skills, and get personalized job matches. Employers discover qualified candidates faster with AI-assisted search and screening.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-emerald-400">
              Create candidate profile <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-white/10">
              Post a job <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 text-neutral-300">
            <div>
              <dt className="text-sm">Verified skills</dt>
              <dd className="text-2xl font-semibold text-white">Badges & scores</dd>
            </div>
            <div>
              <dt className="text-sm">Real-time messaging</dt>
              <dd className="text-2xl font-semibold text-white">Secure & instant</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
