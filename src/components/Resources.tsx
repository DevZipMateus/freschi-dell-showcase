
import React, { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Resources = () => {
  const resources = [
    {
      id: 1,
      image: '/lovable-uploads/dfedad68-9c2e-4530-8af8-247220175eea.png',
    },
    {
      id: 2,
      image: '/lovable-uploads/624e861a-7f3d-47d8-a637-830dab17fa18.png',
    },
    {
      id: 3,
      image: '/lovable-uploads/16ae646d-6d2a-4600-b687-7155eb788358.png',
    },
    {
      id: 4,
      image: '/lovable-uploads/4da0f481-59d4-40c8-a769-aab17a3cefb1.png',
    },
    {
      id: 5,
      image: '/lovable-uploads/bac08049-d839-42b1-83d4-bc5eb15df87e.png',
    },
    {
      id: 6,
      image: '/lovable-uploads/c1decb1e-6efd-4a2b-b6f3-afc493b34195.png',
    },
    {
      id: 7,
      image: '/lovable-uploads/5d8789e7-1894-4a1c-acee-59ebc878b8f5.png',
    },
    {
      id: 8,
      image: '/lovable-uploads/47fb14a5-ac3c-4696-8308-5feaabb75c43.png',
    },
    {
      id: 9,
      image: '/lovable-uploads/ae3c7d33-3e59-44f1-8113-c75069265e9f.png',
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Recursos Educacionais</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Materiais Educativos sobre
            <span className="block text-primary">Contabilidade</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amplie seus conhecimentos com nossos materiais educativos. Dúvidas frequentes, 
            guias práticos e orientações essenciais para manter sua empresa sempre em conformidade.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {resources.map((resource, index) => (
            <Dialog key={resource.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={`Recurso educativo ${resource.id}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={`Recurso educativo ${resource.id}`}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de Orientação Personalizada?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer suas dúvidas específicas e 
              oferecer soluções sob medida para sua empresa.
            </p>
            <a
              href="https://wa.me/5551995652262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Agendar Consultoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
