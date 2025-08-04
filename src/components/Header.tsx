import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-brand-dark">
              DRIP<span className="text-brand-yellow">ZONE</span>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-brand-yellow transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-brand-yellow transition-colors">Shop</a>
            <a href="#" className="text-foreground hover:text-brand-yellow transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-brand-yellow transition-colors">Contact</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-brand-light">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-brand-light">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-brand-light">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-brand-light">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;