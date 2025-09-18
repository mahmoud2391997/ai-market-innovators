import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy-deep/80 to-accent/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Specialised AI
            <span className="block bg-gradient-to-r from-accent to-electric bg-clip-text text-transparent">
              Portfolio Company
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Creating a portfolio of AI-powered companies that revolutionise financial content, 
            market intelligence, and capital markets technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-glow transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Investment Strategy
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;