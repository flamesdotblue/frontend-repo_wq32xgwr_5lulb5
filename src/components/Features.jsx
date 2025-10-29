import { Droplet, MapPin, CreditCard, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Smart Location & Timing',
    desc: 'Pick precise address, preferred date and time — we handle the rest.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payments',
    desc: 'Choose Cash on Delivery or simulate online payments with ease.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Safe',
    desc: 'Verified partners, quality checks, and live status for peace of mind.',
  },
  {
    icon: Droplet,
    title: 'Any Capacity',
    desc: 'From small residential to large commercial needs — we’ve got you covered.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Why book with AquaGo?</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A modern, seamless experience from booking to delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>

        <div id="book" className="mt-14 flex items-center justify-center">
          <a href="#" className="inline-flex items-center rounded-md bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors font-semibold">
            Start Booking
          </a>
        </div>
      </div>
    </section>
  );
}
