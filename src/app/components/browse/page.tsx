"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MapPin, DollarSign, Calendar, Star, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

const artists = [
  {
    id: 1,
    name: "Sophia Valentine",
    role: "Professional Violinist",
    category: "Music",
    location: "New York, NY",
    price: "$199-349",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1767216398625-84529a6c5f68?w=600",
    verified: true,
    availability: "Available this week"
  },
  {
    id: 2,
    name: "Marcus Wonder",
    role: "Close-up Magician",
    category: "Magic",
    location: "Los Angeles, CA",
    price: "$149-299",
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1698966165570-2c1d256c596c?w=600",
    verified: true,
    availability: "Booking fast"
  },
  {
    id: 3,
    name: "Isabella Portrait",
    role: "Live Event Painter",
    category: "Art",
    location: "Chicago, IL",
    price: "$249-499",
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1741762055094-1304f0ebccd9?w=600",
    verified: true,
    availability: "Available"
  },
  {
    id: 4,
    name: "James Rhythm",
    role: "Contemporary Dancer",
    category: "Dance",
    location: "Miami, FL",
    price: "$179-329",
    rating: 4.9,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1686435386310-92ee42a3580f?w=600",
    verified: true,
    availability: "Available"
  },
  {
    id: 5,
    name: "Emma Lyric",
    role: "Spoken Word Poet",
    category: "Poetry",
    location: "Austin, TX",
    price: "$129-249",
    rating: 5.0,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9?w=600",
    verified: true,
    availability: "Available this week"
  },
  {
    id: 6,
    name: "David Strings",
    role: "Acoustic Guitarist",
    category: "Music",
    location: "Seattle, WA",
    price: "$159-279",
    rating: 4.8,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9?w=600",
    verified: true,
    availability: "Booking fast"
  }
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artist.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artist.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Discover Your Perfect Artist
            </h1>
            <p className="text-lg text-foreground/70 mb-6">
              Browse through our curated collection of talented performers
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search by artist name, skill, or occasion..." 
                className="pl-12 h-14 bg-white shadow-lg border-accent/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                      Filters
                    </h3>
                    <Button variant="ghost" size="sm" onClick={() => {
                      setSelectedCategory('all');
                      setSelectedLocation('all');
                      setSelectedOccasion('all');
                    }}>
                      Clear All
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="Music">🎵 Music</SelectItem>
                          <SelectItem value="Magic">🪄 Magic</SelectItem>
                          <SelectItem value="Art">🎨 Art</SelectItem>
                          <SelectItem value="Dance">💃 Dance</SelectItem>
                          <SelectItem value="Poetry">📖 Poetry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Occasion */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Occasion</label>
                      <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Occasion</SelectItem>
                          <SelectItem value="birthday">🎂 Birthday</SelectItem>
                          <SelectItem value="wedding">💒 Wedding</SelectItem>
                          <SelectItem value="anniversary">💕 Anniversary</SelectItem>
                          <SelectItem value="proposal">💍 Proposal</SelectItem>
                          <SelectItem value="corporate">💼 Corporate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Location</label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="virtual">🌐 Virtual</SelectItem>
                          <SelectItem value="new-york">🗽 New York</SelectItem>
                          <SelectItem value="los-angeles">🌴 Los Angeles</SelectItem>
                          <SelectItem value="chicago">🏙️ Chicago</SelectItem>
                          <SelectItem value="miami">🏖️ Miami</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Budget</SelectItem>
                          <SelectItem value="under-150">Under $150</SelectItem>
                          <SelectItem value="150-300">$150 - $300</SelectItem>
                          <SelectItem value="300-500">$300 - $500</SelectItem>
                          <SelectItem value="over-500">Over $500</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Availability</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Time</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="this-month">This Month</SelectItem>
                          <SelectItem value="custom">Custom Date</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Filter className="mr-2 h-4 w-4" />
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Artist Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredArtists.length}</span> artists
                </p>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <motion.div 
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {filteredArtists.map((artist) => (
                  <motion.div 
                    key={artist.id}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 }
                    }}
                  >
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-accent/20">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback 
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          {artist.verified && (
                            <Badge className="bg-accent text-accent-foreground">
                              ✓ Verified
                            </Badge>
                          )}
                          <Button 
                            size="icon"
                            variant="secondary"
                            className="rounded-full"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge variant="secondary">
                            {artist.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-1 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                          {artist.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{artist.role}</p>
                        
                        <div className="flex items-center gap-4 mb-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-semibold">{artist.rating}</span>
                            <span className="text-muted-foreground">({artist.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span className="text-xs">{artist.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-xs text-muted-foreground">Starting at</p>
                            <p className="text-xl font-bold text-primary">{artist.price}</p>
                          </div>
                          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                            {artist.availability}
                          </Badge>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                          <Link href={`/artist/${artist.id}`}>
                            View Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {filteredArtists.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground mb-4">No artists found matching your criteria</p>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedLocation('all');
                    setSelectedOccasion('all');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
