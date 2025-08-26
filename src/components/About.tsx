
import React from 'react';
import { Heart, Users, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const founders = [
    {
      name: 'Marta',
      role: 'Sócia-Fundadora',
      description: 'Com seu olhar atento aos detalhes, Marta sempre diz que "os números falam". Especialista em análise financeira e planejamento tributário.',
      expertise: ['Análise Financeira', 'Planejamento Tributário', 'Controle de Custos']
    },
    {
      name: 'Fábio',
      role: 'Sócio-Fundador',
      description: 'Com sua habilidade em comunicação, Fábio acredita que cada cliente tem uma história única e diferentes soluções. Especialista em consultoria empresarial.',
      expertise: ['Consultoria Empresarial', 'Relacionamento com Cliente', 'Estratégia de Negócios']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compromisso Genuíno',
      description: 'Nosso compromisso vai além dos números - ajudamos a construir sonhos e transformar negócios.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente tem uma história única, por isso oferecemos soluções personalizadas para cada necessidade.'
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Anos de experiência ajudando empresas a crescer e superar desafios fiscais e financeiros.'
    },
    {
      icon: TrendingUp,
      title: 'Resultados Concretos',
      description: 'Nosso trabalho gera resultados mensuráveis: redução de impostos, conformidade fiscal e crescimento sustentável.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-secondary mb-6">Nossa História</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça a trajetória de Marta e Fábio, dois profissionais apaixonados por contabilidade 
            que transformaram desafios em oportunidades e se tornaram referência em soluções contábeis personalizadas.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="service-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-tertiary m-0">O Início de Tudo</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Havia uma pequena empresa chamada "Freschi & Dell", fundada por um casal chamado Marta e Fábio. 
                  Desde o início, eles ajudavam outras pequenas empresas a prosperar, oferecendo serviços de 
                  contabilidade personalizada, reduzindo impostos e dando consultoria financeira.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  No primeiro ano, enfrentaram muitos desafios. A rotina era intensa, e havia dias em que as contas 
                  não fechavam. Mas eles nunca desistiram. Em vez disso, usaram cada obstáculo como uma lição. 
                  Aprenderam a importância de registrar cada transação, de entender as nuances do sistema fiscal 
                  e de manter uma comunicação transparente com os clientes.
                </p>

                <div className="bg-primary/5 rounded-lg p-6 my-8">
                  <h4 className="text-xl font-semibold text-primary mb-3">Caso de Sucesso: Bebidas do Vale</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Um cliente em particular, a "Bebidas do Vale", estava enfrentando sérias dificuldades com multas 
                    pesadas devido a contabilidades mal feitas anteriormente. Com a orientação de Marta e Fábio, 
                    a empresa reestruturou suas finanças, implementou controle rigoroso de gastos e gradualmente 
                    conseguiu resolver as pendências fiscais. A empresa não apenas se livrou das multas, mas também 
                    viu suas vendas aumentarem.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Ao olhar para trás, após a fundação da empresa, perceberam que o verdadeiro valor da contabilidade 
                  não estava apenas em equilibrar contas, mas em contar histórias de resiliência, crescimento e sucesso. 
                  E assim, a "Freschi & Dell" se tornou um pilar de apoio para muitas empresas, provando que, com o 
                  conhecimento certo e um pouco de dedicação, qualquer sonho pode se tornar realidade.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Founders */}
        <div className="mb-20">
          <h3 className="heading-tertiary text-center mb-12">Conheça os Fundadores</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={founder.name} className="service-card group">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {founder.name[0]}
                    </div>
                    <h4 className="text-xl font-semibold">{founder.name}</h4>
                    <p className="text-primary font-medium">{founder.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {founder.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Especialidades:</h5>
                    <div className="space-y-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="heading-tertiary text-center mb-12">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="service-card group text-center">
                <CardContent className="p-6">
                  <div className="feature-icon mx-auto mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
