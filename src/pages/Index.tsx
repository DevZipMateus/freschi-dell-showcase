
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EgestorERP from '@/components/EgestorERP';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Resources from '@/components/Resources';

const Index = () => {
  useEffect(() => {
    // Update document metadata
    document.title = 'Freschi & Dell Contabilidade - A Contabilidade que Entende seu Negócio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Freschi & Dell Contabilidade oferece serviços contábeis personalizados para pequenas e médias empresas. Planejamento tributário, abertura de empresas, folha de pagamento e consultoria empresarial em Porto Alegre/RS.');
    }

    // Add Open Graph tags
    const addMetaTag = (property: string, content: string) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    addMetaTag('og:title', 'Freschi & Dell Contabilidade - A Contabilidade que Entende seu Negócio');
    addMetaTag('og:description', 'Freschi & Dell Contabilidade oferece serviços contábeis personalizados para pequenas e médias empresas. Planejamento tributário, abertura de empresas, folha de pagamento e consultoria empresarial em Porto Alegre/RS.');
    addMetaTag('og:type', 'website');
    addMetaTag('og:url', 'https://www.freschiedellcontabilidade.com.br');
    addMetaTag('og:image', '/lovable-uploads/712137f7-ec5a-4482-b573-e1b8ee6624d7.png');

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Freschi & Dell Contabilidade",
      "description": "A contabilidade que entende seu negócio",
      "url": "https://www.freschiedellcontabilidade.com.br",
      "telephone": "+5551995652262",
      "email": "contabilidade@freschidell.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Dona Alzira, 471 - Sala 2",
        "addressCountry": "BR"
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "founder": [
        {
          "@type": "Person",
          "name": "Marta"
        },
        {
          "@type": "Person", 
          "name": "Fábio"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/contabilidadefreschidell"
      ],
      "priceRange": "$$",
      "areaServed": "Brazil"
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EgestorERP />
        <About />
        <Services />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
