import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";

const customerImages = [
  customer1,
  customer2,
  customer3,
  // Add more as needed
];

const CustomerSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Customer <span className="text-brand-green">Vibes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our community rocks their pieces. Tag us @ayoolawears for a chance to be featured!
          </p>
        </div>

        {/* Customer Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {customerImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <img 
                src={image} 
                alt={`Customer ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Social Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-yellow">100K+</div>
            <div className="text-muted-foreground">Instagram Followers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-green">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-brand-dark">25K+</div>
            <div className="text-muted-foreground">User Generated Posts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;