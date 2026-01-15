"use client";

import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Clock, DollarSign, Check, Heart, Share2, MessageCircle, Play, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  const { id } = useParams();

  // Mock artist data
  const artist = {
    id,
    name: "Sophia Valentine",
    role: "Professional Violinist",
    category: "Music",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 127,
    totalPerformances: 250,
    responseTime: "Within 2 hours",
    verified: true,
    about: "Award-winning violinist with 15+ years of experience bringing elegance and emotion to every performance. Specializing in romantic occasions, proposals, and intimate celebrations.",
    image: "https://images.unsplash.com/photo-1767216398625-84529a6c5f68?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1767216398625-84529a6c5f68?w=600",
      "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9?w=600",
      "https://images.unsplash.com/photo-1686435386310-92ee42a3580f?w=600",
      "https://images.unsplash.com/photo-1741762055094-1304f0ebccd9?w=600"
    ],
    packages: [
      {
        name: "Basic Serenade",
        price: 199,
        duration: "30 min",
        features: ["3 song selections", "In-person or virtual", "Professional setup", "Email coordination"]
      },
      {
        name: "Premium Experience",
        price: 279,
        duration: "45 min",
        features: ["5 song selections", "Custom song requests", "In-person or virtual", "Video recording included", "Roses bouquet addon"]
      },
      {
        name: "Elite Romance",
        price: 349,
        duration: "60 min",
        features: ["Unlimited song selections", "Full customization", "In-person performance", "4K video recording", "Roses & champagne addon", "Photo opportunities"]
      }
    ],
    reviews: [
      {
        name: "Sarah J.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Absolutely magical! Sophia played our wedding song for our anniversary dinner. My husband cried. Worth every single penny!",
        verified: true
      },
      {
        name: "Michael C.",
        rating: 5,
        date: "1 month ago",
        comment: "Hired for a proposal. She was punctual, professional, and the music was perfect. My fiancée said yes!",
        verified: true
      },
      {
        name: "Emily R.",
        rating: 5,
        date: "2 months ago",
        comment: "Such a beautiful performance at my mom's 60th birthday. Everyone was in tears. Highly recommend!",
        verified: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <ImageWithFallback 
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-accent text-accent-foreground">
                    {artist.category}
                  </Badge>
                  {artist.verified && (
                    <Badge className="bg-green-500 text-white">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {artist.name}
                </h1>
                <p className="text-xl text-white/90 mb-4">{artist.role}</p>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold text-white">{artist.rating}</span>
                    <span>({artist.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{artist.totalPerformances}+ performances</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex gap-2">
                <Button variant="secondary" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="packages">Packages</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                        About {artist.name}
                      </h3>
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {artist.about}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                          <Award className="h-8 w-8 text-accent" />
                          <div>
                            <p className="font-semibold text-primary">Verified Professional</p>
                            <p className="text-sm text-muted-foreground">Background checked</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                          <Clock className="h-8 w-8 text-accent" />
                          <div>
                            <p className="font-semibold text-primary">Quick Response</p>
                            <p className="text-sm text-muted-foreground">{artist.responseTime}</p>
                          </div>
                        </div>
                      </div>

                      <h4 className="font-semibold mb-3 text-primary">Perfect For:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">💕 Romantic Dinners</Badge>
                        <Badge variant="outline">💍 Proposals</Badge>
                        <Badge variant="outline">🎂 Anniversaries</Badge>
                        <Badge variant="outline">💒 Weddings</Badge>
                        <Badge variant="outline">🎉 Celebrations</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="packages">
                  <div className="space-y-4">
                    {artist.packages.map((pkg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-accent/20 hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                  {pkg.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{pkg.duration} performance</p>
                              </div>
                              <div className="text-right">
                                <p className="text-3xl font-bold text-primary">${pkg.price}</p>
                                <p className="text-sm text-muted-foreground">per event</p>
                              </div>
                            </div>
                            <ul className="space-y-2 mb-6">
                              {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                  Book {pkg.name}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                  <DialogTitle style={{ fontFamily: 'var(--font-display)' }}>
                                    Book {pkg.name}
                                  </DialogTitle>
                                  <DialogDescription>
                                    Fill in the details below to book this magical experience
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="recipient">Recipient Name</Label>
                                    <Input id="recipient" placeholder="Who is this surprise for?" />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="occasion">Occasion</Label>
                                    <Select>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select occasion" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="birthday">Birthday</SelectItem>
                                        <SelectItem value="anniversary">Anniversary</SelectItem>
                                        <SelectItem value="proposal">Proposal</SelectItem>
                                        <SelectItem value="wedding">Wedding</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="date">Preferred Date</Label>
                                    <Input id="date" type="date" />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="time">Preferred Time</Label>
                                    <Input id="time" type="time" />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="location">Event Location</Label>
                                    <Input id="location" placeholder="Address or 'Virtual'" />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="message">Special Message (Optional)</Label>
                                    <Textarea 
                                      id="message" 
                                      placeholder="Any special requests or songs you'd like included?"
                                      rows={3}
                                    />
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                                    Continue to Payment
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-4">
                    {artist.reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-semibold text-primary">{review.name}</p>
                                {review.verified && (
                                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                    ✓ Verified Booking
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                              ))}
                            </div>
                          </div>
                          <p className="text-foreground/70">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery">
                  <div className="grid grid-cols-2 gap-4">
                    {artist.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                      >
                        <ImageWithFallback 
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-accent/30 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-primary mb-4">$199</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>30-60 minute performances</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>In-person or Virtual</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Available this week</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle style={{ fontFamily: 'var(--font-display)' }}>
                            Quick Booking
                          </DialogTitle>
                          <DialogDescription>
                            Start booking your magical moment with {artist.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="package">Select Package</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose a package" />
                              </SelectTrigger>
                              <SelectContent>
                                {artist.packages.map((pkg, i) => (
                                  <SelectItem key={i} value={pkg.name}>
                                    {pkg.name} - ${pkg.price} ({pkg.duration})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="quick-date">Preferred Date</Label>
                            <Input id="quick-date" type="date" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="quick-location">Location</Label>
                            <Input id="quick-location" placeholder="City or 'Virtual'" />
                          </div>
                        </div>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          Continue
                        </Button>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="w-full" size="lg">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Artist
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-center text-muted-foreground mb-4">
                      🛡️ Secure booking • 💯 Money-back guarantee
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <span>✓ Verified</span>
                      <span>•</span>
                      <span>✓ Insured</span>
                      <span>•</span>
                      <span>✓ Professional</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}