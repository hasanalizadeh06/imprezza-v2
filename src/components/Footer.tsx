import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/components/home" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent">
                <span className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>I</span>
              </div>
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                Impreza
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Creating magical moments through unforgettable live performances. 
              Because the best gifts aren't things—they're moments.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* For Gift Givers */}
          <div>
            <h3 className="font-semibold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              For Gift Givers
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/components/browse" className="text-muted-foreground hover:text-accent transition-colors">Browse Artists</Link></li>
              <li><Link href="/components/occasions" className="text-muted-foreground hover:text-accent transition-colors">Gift by Occasion</Link></li>
              <li><Link href="/components/packages" className="text-muted-foreground hover:text-accent transition-colors">Pricing & Packages</Link></li>
              <li><Link href="/components/how-it-works" className="text-muted-foreground hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link href="/components/gift-cards" className="text-muted-foreground hover:text-accent transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h3 className="font-semibold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              For Artists
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/components/join-as-artist" className="text-muted-foreground hover:text-accent transition-colors">Join Impreza</Link></li>
              <li><Link href="/components/artist-benefits" className="text-muted-foreground hover:text-accent transition-colors">Artist Benefits</Link></li>
              <li><Link href="/components/artist-dashboard" className="text-muted-foreground hover:text-accent transition-colors">Artist Dashboard</Link></li>
              <li><Link href="/components/artist-resources" className="text-muted-foreground hover:text-accent transition-colors">Resources</Link></li>
              <li><Link href="/components/artist-faq" className="text-muted-foreground hover:text-accent transition-colors">Artist FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/components/help" className="text-muted-foreground hover:text-accent transition-colors">Help Center</Link></li>
              <li><Link href="/components/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/components/faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link href="/components/safety" className="text-muted-foreground hover:text-accent transition-colors">Safety Guidelines</Link></li>
              <li><Link href="/components/terms" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/components/privacy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2026 Impreza. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500 fill-current" /> for creating unforgettable moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
