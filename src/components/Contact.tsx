
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(51) 99565-2262',
      action: 'https://wa.me/5551995652262',
      actionText: 'Chamar no WhatsApp'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contabilidade@freschidell.com',
      action: 'mailto:contabilidade@freschidell.com',
      actionText: 'Enviar E-mail'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua Dona Alzira, 471 - Sala 2',
      action: 'https://maps.app.goo.gl/XhMCCrj7nZWcpg9V8',
      actionText: 'Ver no Mapa'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 09:00 às 17:00',
      action: null,
      actionText: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="heading-secondary mb-6">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos prontos para ajudar sua empresa a crescer. Entre em contato conosco 
            e descubra como podemos transformar a gestão do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-tertiary mb-6">Informações de Contato</h3>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="service-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="feature-icon flex-shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground mb-3">{item.info}</p>
                          {item.action && (
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="btn-trust"
                            >
                              <a href={item.action} target="_blank" rel="noopener noreferrer">
                                {item.actionText}
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Redes Sociais</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    @
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-muted-foreground">@contabilidadefreschidell</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="service-card">
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa (opcional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      className="w-full p-3 border border-input rounded-lg bg-background"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="contabilidade">Contabilidade Completa</option>
                      <option value="abertura">Abertura de Empresa</option>
                      <option value="planejamento">Planejamento Tributário</option>
                      <option value="folha">Folha de Pagamento</option>
                      <option value="consultoria">Consultoria Empresarial</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Descreva como podemos ajudar sua empresa..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-hero w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="service-card overflow-hidden">
            <CardHeader>
              <CardTitle>Nossa Localização</CardTitle>
              <p className="text-muted-foreground">
                Venha nos visitar em nosso escritório no centro da cidade.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.234!2d-51.2287!3d-30.0331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzAwLjEiUyA1McKwMTMnNDMuMyJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Freschi & Dell Contabilidade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
