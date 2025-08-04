import { Button } from "@/components/ui/button";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-brand-dark leading-tight">
                Drip like{" "}
                <span className="text-brand-yellow bg-gradient-to-r from-brand-yellow to-secondary bg-clip-text text-transparent">
                  ROYALTY
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Discover the latest streetwear collections that define your style and express your attitude.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-brand-dark hover:bg-brand-dark hover:text-white">
                View Lookbook
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroModel} 
                alt="Fashion model in yellow streetwear" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-yellow rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-green rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;