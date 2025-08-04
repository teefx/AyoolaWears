const CustomerSection = () => {
  const customerImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Customer <span className="text-brand-green">Vibes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our community rocks their DRIPZONE pieces. Tag us @dripzone for a chance to be featured!
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