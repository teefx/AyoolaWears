import { Button } from "@/components/ui/button";
import storeInterior from "@/assets/store-interior.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're more than just a clothing brand - we're a movement. Founded by streetwear enthusiasts, 
              we curate the freshest styles that speak to the culture and community that drives fashion forward.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece in our collection is carefully selected to ensure you're not just wearing clothes, 
              but making a statement. From limited drops to everyday essentials, we've got your style covered.
            </p>
            <div className="pt-4">
              <Button variant="brand" size="lg" className="text-lg px-8 py-6">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={storeInterior} 
                alt="Modern streetwear store interior" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlay stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">500+</div>
                    <div className="text-sm text-muted-foreground">Products</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">50K+</div>
                    <div className="text-sm text-muted-foreground">Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">100+</div>
                    <div className="text-sm text-muted-foreground">Brands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;