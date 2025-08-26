
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Nossa História' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-[#02142c]",
      isScrolled && "shadow-lg"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/712137f7-ec5a-4482-b573-e1b8ee6624d7.png" 
              alt="Freschi & Dell Contabilidade" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-white">
              <Phone className="w-4 h-4 text-white" />
              <span>(51) 99565-2262</span>
            </div>
            <Button
              asChild
              className="btn-hero"
            >
              <a href="https://wa.me/5551995652262" target="_blank" rel="noopener noreferrer">
                Falar Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-white">
                  <Phone className="w-4 h-4 text-white" />
                  <span>(51) 99565-2262</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white">
                  <Mail className="w-4 h-4 text-white" />
                  <span>contabilidade@freschidell.com</span>
                </div>
                <Button
                  asChild
                  className="btn-hero w-full"
                >
                  <a href="https://wa.me/5551995652262" target="_blank" rel="noopener noreferrer">
                    Falar Conosco
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
