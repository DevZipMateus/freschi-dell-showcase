import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Nossa História' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const services = [
    'Contabilidade Completa',
    'Abertura de Empresas',
    'Planejamento Tributário',
    'Folha de Pagamento',
    'Consultoria Empresarial',
    'Certificado Digital'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/712137f7-ec5a-4482-b573-e1b8ee6624d7.png" 
                alt="Freschi & Dell Contabilidade" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A contabilidade que entende seu negócio. Ajudamos empresas a prosperar 
              através de soluções contábeis personalizadas.
            </p>
            <div className="text-sm">
              <p className="font-medium">CNPJ: 55.467.889/0001-03</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Principais Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">(51) 99565-2262</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">contabilidade@freschidell.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm text-primary-foreground/80">Rua Dona Alzira, 471 - Sala 2</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">Seg-Sex: 09:00 às 17:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">@contabilidadefreschidell</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Freschi & Dell Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://wa.me/5551995652262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contabilidade@freschidell.com"
                className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                E-mail
              </a>
              <a
                href="https://maps.app.goo.gl/XhMCCrj7nZWcpg9V8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
              >
                Localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
