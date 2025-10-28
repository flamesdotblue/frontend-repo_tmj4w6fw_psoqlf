import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <section id="cta" className="bg-neutral-950 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 sm:flex-row">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">Ready to build your professional edge?</h3>
                <p className="mt-2 text-neutral-300">Create your profile, verify your skills, and get matched to the right opportunities.</p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-emerald-400">Join as Job Seeker</button>
                <button className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-white/10">Hire talent</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
