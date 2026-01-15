import { motion } from "motion/react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690642379123-2722d4381e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9saW4lMjBwZXJmb3JtYW5jZSUyMGNhbmRsZWxpZ2h0fGVufDF8fHx8MTc2Nzk1Mjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Violin performance in candlelight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1E5A]/80 via-[#2C1E5A]/70 to-[#2C1E5A]/90" />
        
        {/* Animated Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8972E] flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-3xl font-['Playfair_Display']">I</span>
            </div>
            <span className="text-5xl font-['Playfair_Display'] font-bold text-white">
              Impreza
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#D4AF37] text-xl md:text-2xl italic mb-8 font-['Playfair_Display']"
          >
            Because the best gifts aren't things—they're moments.
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white mb-6 leading-tight"
          >
            Gift Moments,<br />
            Not Things
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-[700px] mx-auto leading-relaxed"
          >
            Book live performances & artistic surprises for your loved ones. 
            From violinists to magicians, poets to painters—create unforgettable moments in just a few clicks.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-[600px] mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Surprise for birthday? Wedding? Anniversary?"
                className="pl-12 pr-4 h-14 bg-white/95 backdrop-blur-sm border-none rounded-full text-lg shadow-2xl"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D4AF37] hover:bg-[#B8972E] text-white h-10 px-8 rounded-full"
                onClick={() => onNavigate('browse')}
              >
                Search
              </Button>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B8972E] text-white h-16 px-12 text-lg rounded-full shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
              onClick={() => onNavigate('browse')}
            >
              Create a Magical Moment
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-[600px] mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 font-['Playfair_Display']">
                500+
              </div>
              <div className="text-sm text-white/80">Talented Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 font-['Playfair_Display']">
                10K+
              </div>
              <div className="text-sm text-white/80">Moments Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 font-['Playfair_Display']">
                4.9★
              </div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
