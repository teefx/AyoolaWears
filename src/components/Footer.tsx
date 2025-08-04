import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white">
      {/* Newsletter Section */}
      <div className="bg-brand-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Level Up Your Style Game?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new drops, exclusive deals, and style tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-black border-0 flex-1"
            />
            <Button variant="brand" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                DRIP<span className="text-brand-yellow">ZONE</span>
              </div>
              <p className="text-green-100">
                Your go-to destination for the freshest streetwear and urban fashion. 
                Elevate your style, express your attitude.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-green-100">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Categories</h4>
              <ul className="space-y-2 text-green-100">
                <li><a href="#" className="hover:text-white transition-colors">T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Footwear</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2 text-green-100">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-400 mt-12 pt-8 text-center text-green-100">
            <p>&copy; 2024 DRIPZONE. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;