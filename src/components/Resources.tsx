
import React from 'react';
import { BookOpen, FileText, Calculator } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      id: 1,
      image: '/lovable-uploads/dfedad68-9c2e-4530-8af8-247220175eea.png',
      title: 'Maiores Dúvidas dos Clientes',
      description: 'Esclareça suas principais questões sobre contabilidade'
    },
    {
      id: 2,
      image: '/lovable-uploads/624e861a-7f3d-47d8-a637-830dab17fa18.png',
      title: 'NCM e CFOP',
      description: 'Entenda a classificação fiscal correta'
    },
    {
      id: 3,
      image: '/lovable-uploads/16ae646d-6d2a-4600-b687-7155eb788358.png',
      title: 'CFOP nas Vendas e NCM',
      description: 'A importância da escolha correta'
    },
    {
      id: 4,
      image: '/lovable-uploads/4da0f481-59d4-40c8-a769-aab17a3cefb1.png',
      title: 'Regime Tributário Certo',
      description: 'Simplificação, competitividade e conformidade'
    },
    {
      id: 5,
      image: '/lovable-uploads/bac08049-d839-42b1-83d4-bc5eb15df87e.png',
      title: 'Certificados Digitais A3 e A1',
      description: 'Segurança e praticidade para sua empresa'
    },
    {
      id: 6,
      image: '/lovable-uploads/c1decb1e-6efd-4a2b-b6f3-afc493b34195.png',
      title: 'Enquadramento de Empresas',
      description: 'MEI, ME, EPP e Médio/Grande Porte'
    },
    {
      id: 7,
      image: '/lovable-uploads/5d8789e7-1894-4a1c-acee-59ebc878b8f5.png',
      title: 'NF-e e NFC-e',
      description: 'Entenda quando usar cada uma'
    },
    {
      id: 8,
      image: '/lovable-uploads/47fb14a5-ac3c-4696-8308-5feaabb75c43.png',
      title: 'Certificado Digital A1 vs A3',
      description: 'Características e diferenças'
    },
    {
      id: 9,
      image: '/lovable-uploads/ae3c7d33-3e59-44f1-8113-c75069265e9f.png',
      title: 'Regimes Tributários',
      description: 'Lucro Real, Presumido e Simples Nacional'
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
            <div
              key={resource.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {resource.description}
                </p>

                {/* Hover overlay with action */}
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <FileText className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
                    <p className="text-sm mb-4 text-white/90">{resource.description}</p>
                    <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 text-sm font-medium">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Calculator className="w-4 h-4 text-primary" />
              </div>
            </div>
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
