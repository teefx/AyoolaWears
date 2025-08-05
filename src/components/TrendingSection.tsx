import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productsGrid from "@/assets/products-grid.jpg";
import productsGrid1 from "@/assets/products-grid-1.png";
import productsGrid2 from "@/assets/products-grid-2.png";
const TrendingSection = () => {
  const products = [
    { name: "Street Tee", price: "₦45,000", category: "T-Shirts", image: productsGrid },
    { name: "Yellow Hoodie", price: "₦85,000", category: "Hoodies", image: productsGrid1 },
    { name: "Urban Cap", price: "₦35,000", category: "Accessories", image: productsGrid2 },
    { name: "Denim Jacket", price: "₦120,000", category: "Jackets", image: productsGrid1},
    { name: "Cargo Pants", price: "₦90,000", category: "Bottoms", image: productsGrid2 },
    { name: "Fresh Kicks", price: "₦150,000", category: "Footwear" ,image: productsGrid},
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Trending <span className="text-brand-yellow">Stores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the hottest pieces that everyone's talking about. 
            Fresh drops, limited editions, and streetwear essentials.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="brand" size="sm" className="w-full">
                      Quick View
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-brand-dark">{product.name}</h3>
                    <span className="text-lg font-bold text-brand-yellow">{product.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="accent" size="lg" className="text-lg px-8 py-6">
            Shop All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;