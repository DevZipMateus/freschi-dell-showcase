
import React from 'react';
import { 
  Calculator, 
  FileText, 
  PieChart, 
  Users, 
  Shield, 
  TrendingUp, 
  Globe, 
  Award,
  Banknote,
  Building,
  CheckCircle,
  CreditCard
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade Completa',
      description: 'Organização da rotina contábil da sua empresa, garantindo conformidade legal e relatórios claros para tomada de decisão.',
      features: ['Escrituração contábil', 'Balancetes mensais', 'Demonstrações financeiras', 'Análise de resultados']
    },
    {
      icon: Building,
      title: 'Abertura e Legalização de Empresas',
      description: 'Do planejamento inicial até a emissão do CNPJ e inscrições necessárias, cuidamos de todo o processo sem burocracia.',
      features: ['Registro na Junta Comercial', 'Inscrições fiscais', 'Licenças necessárias', 'Consultoria de enquadramento']
    },
    {
      icon: PieChart,
      title: 'Planejamento Tributário',
      description: 'Análise estratégica para enquadrar sua empresa no regime tributário mais vantajoso, reduzindo impostos de forma legal.',
      features: ['Análise de regime tributário', 'Elisão fiscal', 'Reorganização societária', 'Economia tributária']
    },
    {
      icon: FileText,
      title: 'Escrituração Fiscal',
      description: 'Controle e envio correto de obrigações acessórias, como SPED, DCTF, DEFIS e demais declarações obrigatórias.',
      features: ['SPED Fiscal e Contábil', 'ECF e DCTF', 'DEFIS para Simples', 'Demais obrigações acessórias']
    },
    {
      icon: Users,
      title: 'Folha de Pagamento e Departamento Pessoal',
      description: 'Gestão completa da folha, encargos trabalhistas, admissões, rescisões e eSocial.',
      features: ['Cálculo da folha de pagamento', 'Admissões e rescisões', 'eSocial e FGTS', 'Férias e 13º salário']
    },
    {
      icon: Shield,
      title: 'Regularização Fiscal e Tributária',
      description: 'Soluções para empresas com débitos, pendências ou inconsistências junto à Receita Federal, estadual ou municipal.',
      features: ['Parcelamentos de débitos', 'Contestação de multas', 'REFIS e programas especiais', 'Regularização cadastral']
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Empresarial',
      description: 'Orientação estratégica em gestão financeira, tomada de decisões e estruturação de processos internos.',
      features: ['Análise de viabilidade', 'Consultoria financeira', 'Reestruturação empresarial', 'Planejamento estratégico']
    },
    {
      icon: CreditCard,
      title: 'Emissão e Orientação sobre Notas Fiscais',
      description: 'Auxílio na correta emissão de documentos fiscais, escolha de CFOP e NCM adequados.',
      features: ['Configuração de NF-e', 'Treinamento para emissão', 'Escolha de CFOP/NCM', 'Contingência fiscal']
    },
    {
      icon: Banknote,
      title: 'Gestão Financeira',
      description: 'Controle de fluxo de caixa, conciliações bancárias e apoio em planejamento financeiro.',
      features: ['Fluxo de caixa', 'Conciliação bancária', 'Controle de contas', 'Relatórios gerenciais']
    },
    {
      icon: Award,
      title: 'Atendimento a MEIs',
      description: 'Apoio completo para microempreendedores individuais, desde a abertura até a gestão de tributos.',
      features: ['Abertura de MEI', 'DAS-MEI', 'DASN-SIMEI', 'Orientações específicas']
    },
    {
      icon: Globe,
      title: 'Importação e Exportação',
      description: 'Orientação em obrigações fiscais e tributárias para operações de comércio exterior.',
      features: ['Classificação fiscal', 'Drawback', 'Siscomex', 'Tributação de importação']
    },
    {
      icon: CheckCircle,
      title: 'Emissão de Certificado Digital',
      description: 'Facilitamos a aquisição e renovação do certificado digital, indispensável para emissão de NF-e, NFC-e e acesso a sistemas do governo.',
      features: ['Certificado A1 e A3', 'Instalação e configuração', 'Renovação automática', 'Suporte técnico']
    }
  ];

  return (
    <section id="servicos" className="py-20 trust-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-secondary mb-6">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços contábeis e empresariais para atender 
            todas as necessidades do seu negócio, desde a abertura até a gestão diária.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card group h-full">
              <CardHeader>
                <div className="feature-icon mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="heading-tertiary mb-4">Precisa de Ajuda Especializada?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para oferecer soluções personalizadas para o seu negócio. 
            Entre em contato e descubra como podemos ajudar sua empresa a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="btn-hero"
            >
              <a href="https://wa.me/5551995652262" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento Gratuito
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="btn-trust"
            >
              <a href="#contato">
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
