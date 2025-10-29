import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">AquaGo Tankers</h4>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Fast, reliable water delivery for homes and businesses.
            </p>
          </div>
          <div className="space-y-3">
            <a href="mailto:hello@aquago.app" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              <Mail className="h-4 w-4" /> hello@aquago.app
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              <Phone className="h-4 w-4" /> +1 (234) 567‑890
            </a>
            <p className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <MapPin className="h-4 w-4" /> 100 Market Street, Suite 200, San Francisco, CA
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} AquaGo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
