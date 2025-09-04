import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const features = [{
    icon: Users,
    text: 'Atendimento Personalizado'
  }, {
    icon: Award,
    text: 'Experiência Comprovada'
  }, {
    icon: TrendingUp,
    text: 'Resultados Garantidos'
  }];
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/5ad16399-92e3-4cc5-b115-cef6758085ff.png')`
    }}>
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/50 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/75 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container relative mx-auto px-4 py-20 bg-[#000a00]/[0.56]">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#000a00]/[0.01]">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>CNPJ: 55.467.889/0001-03</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                A Contabilidade que
                <span className="block text-accent">Entende seu Negócio</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed text-balance">
                Somos Marta e Fábio, fundadores da Freschi & Dell. Com nossa experiência e dedicação, 
                ajudamos pequenas e médias empresas a prosperar através de soluções contábeis personalizadas.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, index) => <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <feature.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero group">
                <a href="https://wa.me/5551995652262" target="_blank" rel="noopener noreferrer">
                  Solicitar Consultoria Gratuita
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button asChild variant="outline" className="btn-outline-hero">
                <a href="#servicos">
                  Conhecer Nossos Serviços
                </a>
              </Button>
            </div>

          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <img src="/lovable-uploads/712137f7-ec5a-4482-b573-e1b8ee6624d7.png" alt="Logo Freschi & Dell Contabilidade" className="w-32 h-32 mx-auto object-contain" />
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white text-center">
                    Horário de Atendimento
                  </h3>
                  <div className="text-center text-white/90">
                    <p className="font-medium">Segunda a Sexta</p>
                    <p className="text-lg">09:00 às 17:00</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Disponível agora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;