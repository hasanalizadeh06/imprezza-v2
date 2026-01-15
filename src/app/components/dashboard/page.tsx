"use client";

import { motion } from 'motion/react';
import { Calendar, Heart, DollarSign, TrendingUp, Star, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

export default function Dashboard() {
  const upcomingBookings = [
    {
      id: 1,
      artistName: "Sophia Valentine",
      artistRole: "Violinist",
      date: "Jan 15, 2026",
      time: "7:00 PM",
      recipient: "John Smith",
      occasion: "Anniversary",
      status: "confirmed",
      price: 279,
      image: "https://images.unsplash.com/photo-1767216398625-84529a6c5f68?w=400"
    },
    {
      id: 2,
      artistName: "Marcus Wonder",
      artistRole: "Magician",
      date: "Jan 18, 2026",
      time: "6:30 PM",
      recipient: "Emma Davis",
      occasion: "Birthday",
      status: "pending",
      price: 199,
      image: "https://images.unsplash.com/photo-1698966165570-2c1d256c596c?w=400"
    }
  ];

  const pastBookings = [
    {
      id: 3,
      artistName: "Isabella Portrait",
      artistRole: "Painter",
      date: "Dec 20, 2025",
      recipient: "Sarah Wilson",
      occasion: "Wedding",
      status: "completed",
      price: 349,
      rated: true,
      rating: 5,
      image: "https://images.unsplash.com/photo-1741762055094-1304f0ebccd9?w=400"
    }
  ];

  const favorites = [
    {
      id: 1,
      name: "James Rhythm",
      role: "Contemporary Dancer",
      rating: 4.9,
      reviews: 52,
      price: "$179-329",
      image: "https://images.unsplash.com/photo-1686435386310-92ee42a3580f?w=400"
    },
    {
      id: 2,
      name: "Emma Lyric",
      role: "Spoken Word Poet",
      rating: 5.0,
      reviews: 41,
      price: "$129-249",
      image: "https://images.unsplash.com/photo-1656369895489-e24a2d0816e9?w=400"
    }
  ];

  const stats = [
    { label: "Total Bookings", value: "3", icon: Calendar, color: "text-blue-600" },
    { label: "Total Spent", value: "$827", icon: DollarSign, color: "text-green-600" },
    { label: "Favorites", value: "5", icon: Heart, color: "text-red-600" },
    { label: "Avg Rating Given", value: "5.0", icon: Star, color: "text-yellow-600" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500/10 text-green-700 border-green-200"><CheckCircle className="h-3 w-3 mr-1" /> Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-200"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500/10 text-blue-700 border-blue-200"><CheckCircle className="h-3 w-3 mr-1" /> Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500/10 text-red-700 border-red-200"><XCircle className="h-3 w-3 mr-1" /> Cancelled</Badge>;
      default:
        return <Badge><AlertCircle className="h-3 w-3 mr-1" /> Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
            My Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your bookings and favorite artists
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          {/* Upcoming Bookings */}
          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback 
                            src={booking.image}
                            alt={booking.artistName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                {booking.artistName}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">{booking.artistRole}</p>
                              {getStatusBadge(booking.status)}
                            </div>
                            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                              {booking.occasion}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Recipient</p>
                              <p className="font-medium">{booking.recipient}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Date</p>
                              <p className="font-medium">{booking.date}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Time</p>
                              <p className="font-medium">{booking.time}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Amount</p>
                              <p className="font-medium text-primary">${booking.price}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              Contact Artist
                            </Button>
                            {booking.status === 'pending' && (
                              <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                                Cancel
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              {upcomingBookings.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No Upcoming Bookings</h3>
                    <p className="text-muted-foreground mb-4">Ready to create some magical moments?</p>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Browse Artists
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Past Bookings */}
          <TabsContent value="past">
            <div className="space-y-4">
              {pastBookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback 
                            src={booking.image}
                            alt={booking.artistName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                {booking.artistName}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">{booking.artistRole}</p>
                              {getStatusBadge(booking.status)}
                            </div>
                            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                              {booking.occasion}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Recipient</p>
                              <p className="font-medium">{booking.recipient}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Date</p>
                              <p className="font-medium">{booking.date}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Amount</p>
                              <p className="font-medium text-primary">${booking.price}</p>
                            </div>
                          </div>
                          {booking.rated ? (
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(booking.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">Your rating</span>
                            </div>
                          ) : (
                            <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                              <Star className="mr-2 h-4 w-4" />
                              Leave a Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Favorites */}
          <TabsContent value="favorites">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((artist, index) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback 
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                        <Button 
                          size="icon"
                          variant="secondary"
                          className="absolute top-3 right-3 rounded-full"
                        >
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                          {artist.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{artist.role}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="ml-1 text-sm font-semibold">{artist.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({artist.reviews} reviews)</span>
                        </div>
                        <p className="text-lg font-bold text-primary mb-3">{artist.price}</p>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
