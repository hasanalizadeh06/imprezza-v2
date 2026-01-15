import { motion } from "motion/react";
import { Search, Palette, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface CTABannersProps {
  onNavigate: (page: string) => void;
}

export function CTABanners({ onNavigate }: CTABannersProps) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-[#F8EDE3] to-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Find Talent Banner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2C1E5A] to-[#4A3A7A] p-8 md:p-10 shadow-2xl hover:shadow-[#2C1E5A]/30 transition-all duration-300"
          >
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white mb-4">
                Find Perfect<br />Talent
              </h2>
              
              <p className="text-white/80 text-lg mb-8">
                Browse hundreds of talented performers ready to create magical moments for your loved ones.
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-[#2C1E5A] hover:bg-gray-100 group/btn"
                onClick={() => onNavigate('browse')}
              >
                Browse Artists
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Join as Artist Banner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#B8972E] p-8 md:p-10 shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-[#D4AF37]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white mb-4">
                Join as<br />Artist
              </h2>
              
              <p className="text-white/90 text-lg mb-8">
                Share your talent with the world and turn your art into unforgettable gifts for others.
              </p>
              
              <Button 
                size="lg"
                className="bg-[#2C1E5A] text-white hover:bg-[#3D2B6B] group/btn"
                onClick={() => onNavigate('artist-signup')}
              >
                Become an Artist
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
