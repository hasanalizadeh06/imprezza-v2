"use client";

import { motion } from 'motion/react';
import { Search, Music, Wand2, Palette, Play, Star, ArrowRight, Check, Sparkles, Heart, Calendar, Gift, Zap, Users, Award, TrendingUp, Clock, MapPin, CreditCard, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Page() {
  return (
    <div className="w-full">
      {/* Hero Section - Interactive Booking Animation */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.15) 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${100 + i * 40}px`,
                height: `${100 + i * 40}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                background: i % 2 === 0
                  ? 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, rgba(20, 184, 166, 0.05) 70%, transparent 100%)'
                  : 'radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, rgba(255, 107, 107, 0.05) 70%, transparent 100%)',
                filter: 'blur(30px)',
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  The Future of Gift-Giving
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Give <span className="text-primary">Moments</span>,<br />
                Not Things
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-foreground/70 leading-relaxed"
              >
                Book live performances and artistic surprises for your loved ones. From violinists to magicians—create unforgettable memories in minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-lg shadow-xl shadow-primary/25" asChild>
                  <Link href="/browse">
                    <Search className="mr-2 h-5 w-5" />
                    Find Your Artist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link href="/demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                {[
                  { icon: Clock, text: "2-min booking" },
                  { icon: Shield, text: "Verified artists" },
                  { icon: Heart, text: "10K+ happy customers" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Animated Booking Interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Main Calendar/Booking Card */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Card className="border-2 border-primary/20 shadow-2xl bg-white/95 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                        <Music className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold">Sophia Valentine</p>
                        <p className="text-sm text-muted-foreground">Violin Serenade</p>
                      </div>
                      <Badge className="ml-auto bg-primary text-white">4.9 ⭐</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Saturday, Jan 25, 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>7:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Your Location</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-3">
                        <span className="text-muted-foreground">Price</span>
                        <span className="font-bold text-2xl text-primary">$199</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Floating Artist Cards */}
              {[
                { emoji: "🎻", name: "Violinist", color: "from-primary to-primary/70", position: { top: "10%", left: "-10%" } },
                { emoji: "🪄", name: "Magician", color: "from-accent to-accent/70", position: { top: "15%", right: "-10%" } },
                { emoji: "🎨", name: "Painter", color: "from-primary to-primary/70", position: { bottom: "20%", left: "-5%" } },
                { emoji: "💃", name: "Dancer", color: "from-accent to-accent/70", position: { bottom: "15%", right: "-5%" } },
              ].map((artist, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-20 h-20 rounded-2xl bg-gradient-to-br ${artist.color} shadow-xl flex flex-col items-center justify-center text-white cursor-pointer`}
                  style={artist.position}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="text-3xl mb-1">{artist.emoji}</div>
                  <p className="text-xs font-semibold">{artist.name}</p>
                </motion.div>
              ))}

              {/* Success Notification */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 2,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                className="absolute top-5 right-0 bg-white rounded-xl shadow-lg border-2 border-primary/20 p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold">Just booked!</p>
                  <p className="text-xs text-muted-foreground">Sarah M. - NYC</p>
                </div>
              </motion.div>

              {/* Rating Stars */}
              <motion.div
                className="absolute bottom-5 left-5"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">4.9/5.0</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Booking Activity - Real-time Animation */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)',
            backgroundSize: '30px 30px',
          }}
          animate={{
            x: [0, 30],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
              >
                <Zap className="h-6 w-6" />
              </motion.div>
              <div>
                <p className="text-2xl font-bold">127 people</p>
                <p className="text-white/80">booked in the last 24 hours</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-8">
              {[
                { icon: Users, label: "10K+ Customers", value: "10,247" },
                { icon: Award, label: "Verified Artists", value: "500+" },
                { icon: Star, label: "Avg Rating", value: "4.9" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-1" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Stage with Spotlight Effect */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 via-white to-primary/5 relative overflow-hidden">
        {/* Stage Curtains */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-accent/10 to-transparent"
            animate={{ scaleX: [1, 0.95, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-primary/10 to-transparent"
            animate={{ scaleX: [1, 0.95, 1] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
          />

          {/* Spotlight Beams */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 w-1 h-64 bg-gradient-to-b from-primary/30 to-transparent"
              style={{
                left: `${25 + i * 20}%`,
                transformOrigin: 'top',
              }}
              animate={{
                rotate: [-15, 15, -15],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Popular Categories
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Every <span className="text-primary">Experience</span> You Can Imagine
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From intimate serenades to grand performances—find the perfect artist
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: "Musicians",
                desc: "Violinists, guitarists, pianists & more",
                icon: Music,
                emoji: "🎻",
                count: "120+",
                gradient: "from-primary/20 to-primary/5",
                iconBg: "bg-primary",
              },
              {
                title: "Magicians",
                desc: "Close-up magic & grand illusions",
                icon: Wand2,
                emoji: "🪄",
                count: "45+",
                gradient: "from-accent/20 to-accent/5",
                iconBg: "bg-accent",
              },
              {
                title: "Live Painters",
                desc: "Portrait artists & event painters",
                icon: Palette,
                emoji: "🎨",
                count: "80+",
                gradient: "from-primary/20 to-primary/5",
                iconBg: "bg-primary",
              },
              {
                title: "Dancers",
                desc: "Contemporary, ballet & cultural",
                icon: Users,
                emoji: "💃",
                count: "95+",
                gradient: "from-accent/20 to-accent/5",
                iconBg: "bg-accent",
              },
              {
                title: "Poets & Writers",
                desc: "Spoken word & custom pieces",
                icon: Sparkles,
                emoji: "✍️",
                count: "60+",
                gradient: "from-primary/20 to-primary/5",
                iconBg: "bg-primary",
              },
              {
                title: "Specialty Acts",
                desc: "Unique performances & more",
                icon: Star,
                emoji: "🎪",
                count: "100+",
                gradient: "from-accent/20 to-accent/5",
                iconBg: "bg-accent",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="border-2 border-transparent hover:border-primary/30 transition-all duration-300 overflow-hidden h-full relative cursor-pointer">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Floating Emoji */}
                  <motion.div
                    className="absolute -top-8 -right-8 text-8xl opacity-5"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {category.emoji}
                  </motion.div>

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl ${category.iconBg} text-white flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-8 w-8" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {category.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">{category.desc}</p>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">
                        {category.count} artists
                      </Badge>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg" asChild>
              <Link href="/browse">
                Explore All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Interactive Timeline with Animation */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #14B8A6 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Book in <span className="text-accent">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From discovery to unforgettable moments—in just a few clicks
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Connecting Line */}
              <motion.div
                className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              <div className="grid grid-cols-3 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Choose Your Artist",
                    desc: "Browse 500+ verified performers. Filter by style, price, location, and availability.",
                    icon: Search,
                    color: "primary",
                    illustration: "🎭"
                  },
                  {
                    step: "02",
                    title: "Customize & Book",
                    desc: "Pick your date, time, and add personal touches. Secure checkout in 2 minutes.",
                    icon: Calendar,
                    color: "accent",
                    illustration: "📅"
                  },
                  {
                    step: "03",
                    title: "Experience Magic",
                    desc: "Your artist arrives on time. Sit back and enjoy an unforgettable moment.",
                    icon: Sparkles,
                    color: "primary",
                    illustration: "✨"
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="text-center"
                  >
                    {/* Floating Illustration */}
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {step.illustration}
                    </motion.div>

                    {/* Icon Circle */}
                    <motion.div
                      className={`w-24 h-24 rounded-full bg-${step.color} text-white flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="h-10 w-10" />
                    </motion.div>

                    {/* Step Number */}
                    <div className={`text-${step.color} font-bold text-lg mb-2`}>
                      STEP {step.step}
                    </div>

                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {[
                {
                  step: "01",
                  title: "Choose Your Artist",
                  desc: "Browse 500+ verified performers. Filter by style, price, location, and availability.",
                  icon: Search,
                  color: "primary",
                  illustration: "🎭"
                },
                {
                  step: "02",
                  title: "Customize & Book",
                  desc: "Pick your date, time, and add personal touches. Secure checkout in 2 minutes.",
                  icon: Calendar,
                  color: "accent",
                  illustration: "📅"
                },
                {
                  step: "03",
                  title: "Experience Magic",
                  desc: "Your artist arrives on time. Sit back and enjoy an unforgettable moment.",
                  icon: Sparkles,
                  color: "primary",
                  illustration: "✨"
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-${step.color} text-white flex items-center justify-center`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className={`text-${step.color} font-bold mb-1`}>STEP {step.step}</div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p className="text-foreground/70">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-xl" asChild>
              <Link href="/browse">
                <Zap className="mr-2 h-5 w-5" />
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists - 3D Card Stack */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Top Rated
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Meet Our <span className="text-primary">Top Artists</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Handpicked, verified, and loved by thousands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Sophia Valentine",
                role: "Violin Virtuoso",
                rating: 4.9,
                reviews: 127,
                price: "$199",
                image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400",
                emoji: "🎻",
                badge: "🔥 Most Booked"
              },
              {
                name: "Marcus Wonder",
                role: "Master Illusionist",
                rating: 5.0,
                reviews: 89,
                price: "$149",
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
                emoji: "🪄",
                badge: "⭐ Top Rated"
              },
              {
                name: "Isabella Art",
                role: "Live Portrait Artist",
                rating: 4.8,
                reviews: 64,
                price: "$249",
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400",
                emoji: "🎨",
                badge: "💎 Premium"
              },
              {
                name: "James Rhythm",
                role: "Contemporary Dancer",
                rating: 4.9,
                reviews: 52,
                price: "$179",
                image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400",
                emoji: "💃",
                badge: "✨ Unique"
              },
            ].map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="border-2 border-transparent hover:border-primary/30 transition-all duration-300 overflow-hidden h-full shadow-lg hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <ImageWithFallback
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Badge */}
                    <Badge className="absolute top-3 right-3 bg-white text-primary border-0 font-semibold shadow-lg">
                      {artist.badge}
                    </Badge>

                    {/* Emoji */}
                    <motion.div
                      className="absolute top-3 left-3 text-4xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {artist.emoji}
                    </motion.div>

                    {/* Heart Button */}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Content */}
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{artist.rating}</span>
                      <span className="text-sm text-muted-foreground">({artist.reviews})</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {artist.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{artist.role}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">Starting at</span>
                        <p className="text-2xl font-bold text-primary">{artist.price}</p>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Book
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/browse">
                View All Artists
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Animated Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Loved by <span className="text-accent">10,000+</span> Customers
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Real stories from real people who created unforgettable moments
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                name: "Sarah Mitchell",
                role: "Anniversary Surprise",
                text: "The violinist made our 10th anniversary absolutely magical. My husband had tears in his eyes. This is the best gift I've ever given!",
                rating: 5,
                avatar: "SM",
                emoji: "🎻"
              },
              {
                name: "David Chen",
                role: "Birthday Party",
                text: "Hired a magician for my daughter's 8th birthday. The kids are STILL talking about it weeks later. Worth every penny!",
                rating: 5,
                avatar: "DC",
                emoji: "🪄"
              },
              {
                name: "Emma Williams",
                role: "Wedding Proposal",
                text: "The live painter captured our engagement perfectly. We now have art AND memories we'll cherish forever. Simply beautiful!",
                rating: 5,
                avatar: "EW",
                emoji: "🎨"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <Card className="border-2 border-transparent hover:border-accent/30 transition-all duration-300 h-full shadow-lg hover:shadow-xl relative overflow-hidden">
                  {/* Background Emoji */}
                  <div className="absolute -bottom-10 -right-10 text-9xl opacity-5">
                    {testimonial.emoji}
                  </div>

                  <CardContent className="p-8 relative z-10">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/80 mb-6 italic leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Security - Badges */}
      <section className="py-16 bg-gradient-to-r from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: Shield, label: "100% Verified Artists" },
              { icon: Check, label: "Money-Back Guarantee" },
              { icon: Award, label: "Quality Assured" },
              { icon: Heart, label: "24/7 Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <p className="font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Bold & Engaging */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity }}
          />

          {/* Floating Elements */}
          {['🎁', '✨', '🎭', '💝'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl opacity-10"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-full">
                <Sparkles className="inline h-5 w-5 mr-2" />
                <span className="font-semibold">Start Creating Memories Today</span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Give the Gift of
              <br />
              <span className="text-accent">Unforgettable Moments?</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ happy customers who've discovered the joy of experiential gifting. Book your artist in 2 minutes.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="h-16 px-10 bg-accent hover:bg-accent/90 text-white text-lg shadow-2xl" asChild>
                <Link href="/browse">
                  <Search className="mr-2 h-6 w-6" />
                  Browse Artists Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 border-2 border-white text-white hover:bg-white hover:text-primary text-lg" asChild>
                <Link href="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch How It Works
                </Link>
              </Button>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {[
                { icon: Check, text: "Instant Booking" },
                { icon: Shield, text: "Verified Artists" },
                { icon: Heart, text: "Money-Back Guarantee" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
