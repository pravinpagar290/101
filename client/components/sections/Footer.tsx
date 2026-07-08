import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* Closing CTA Band */}
      <section className="relative overflow-hidden bg-[image:var(--background-image-accent-gradient)] py-24 text-white">
        {/* Subtle background pattern/visual */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]" />
        
        <div className="relative mx-auto flex max-w-[800px] flex-col items-center px-6 text-center lg:px-8">
          <h2 className="mb-6 text-[40px] font-bold leading-tight tracking-tight md:text-[56px]">
            Ready to train with 101?
          </h2>
          <p className="mb-10 text-lg opacity-90">
            Take our quick matching quiz and start your fitness evolution today.
          </p>
          <Button variant="default" size="lg" className="h-14 px-10 text-base font-semibold shadow-xl hover:scale-105 transition-transform duration-300">
            Take the 1-Minute Quiz
          </Button>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-surface py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-12 px-6 md:grid-cols-4 lg:grid-cols-5 lg:px-8">
          
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="font-black text-2xl tracking-tight">
              101
            </Link>
            <p className="max-w-xs text-sm text-on-surface-muted leading-relaxed">
              The premier human-led coaching platform for individuals who demand progress.
            </p>
            <div className="mt-4 flex items-center gap-4 p-4 border border-border rounded-2xl bg-surface-alt w-fit">
              <QrCode className="w-12 h-12 text-on-surface" />
              <div>
                <div className="text-sm font-semibold">Download the App</div>
                <div className="text-xs text-on-surface-muted">Scan to install</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-muted">
              <li><Link href="#" className="hover:text-on-surface transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Coaches</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-muted">
              <li><Link href="#" className="hover:text-on-surface transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-on-surface-muted">
              <li><Link href="#" className="hover:text-on-surface transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-on-surface transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mx-auto mt-16 max-w-[1200px] border-t border-border px-6 pt-8 text-center text-sm text-on-surface-muted lg:px-8">
          &copy; {new Date().getFullYear()} 101 Fitness. All rights reserved.
        </div>
      </footer>
    </>
  );
}
