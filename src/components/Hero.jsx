import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] sm:h-[75vh] lg:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability; pointer events disabled so Spline stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                On‑Demand Water Tankers, Delivered Fast
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-200">
                Book reliable water tanker services in minutes. Real‑time scheduling, secure payments, and live updates — all in one place.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#book" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Book Tanker Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <div className="flex items-center gap-4 text-sm text-neutral-200">
                  <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-amber-400" /> Instant Scheduling</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5"><Shield className="h-4 w-4 text-emerald-400" /> Trusted Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
