"use client";

import { Search, Bell, Heart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Mock login state

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/components/home" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent">
              <span className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>I</span>
            </div>
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Impreza
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link href="/components/browse" className="text-sm font-medium hover:text-accent transition-colors">
                Browse Artists
              </Link>
              <a href="#how-it-works" className="text-sm font-medium hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">
                Testimonials
              </a>
              <Link href="/components/for-artists" className="text-sm font-medium hover:text-accent transition-colors">
                For Artists
              </Link>
            </div>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for artists, occasions..."
                className="pl-10 bg-secondary/50 border-none"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative hidden md:flex">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative hidden md:flex">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-[10px]">
                    3
                  </Badge>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/components/dashboard">My Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/components/bookings">My Bookings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/components/favorites">Favorites</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/components/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Log Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" className="hidden md:flex">
                  Log In
                </Button>
                <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
                  Sign Up
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-secondary/50 border-none"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link href="/components/browse" className="text-sm font-medium hover:text-accent transition-colors">
                Browse Artists
              </Link>
              <a href="#how-it-works" className="text-sm font-medium hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">
                Testimonials
              </a>
              <Link href="/components/for-artists" className="text-sm font-medium hover:text-accent transition-colors">
                For Artists
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
