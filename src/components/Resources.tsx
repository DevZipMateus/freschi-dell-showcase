
import React, { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Resources = () => {
  const resources = [
    {
      id: 1,
      image: '/lovable-uploads/dfedad68-9c2e-4530-8af8-247220175eea.png',
      title: 'EMITIMOS SEU CERTIFICADO DIGITAL',
      description: `🔹 1. Regime tributário

"Qual regime é melhor para minha empresa: Simples Nacional, Lucro Presumido ou Lucro Real?"

"Se eu mudar de regime, pago mais ou menos impostos?"

🔹 2. Emissão de notas fiscais

"Quando preciso emitir nota fiscal?"

"Qual CFOP ou NCM devo usar?"

"E se eu errar na emissão, posso corrigir depois?"

🔹 3. Impostos e obrigações

"Quais impostos minha empresa precisa pagar?"

"Por que pago tanto imposto se vendo pouco?"

"Quais são os prazos de entrega de declarações (DCTF, SPED, DEFIS etc.)?"

🔹 4. Contratação de funcionários

"Como registrar um funcionário corretamente?"

"Quais encargos trabalhistas e previdenciários preciso pagar?"

"Vale mais a pena CLT ou contratar como PJ?"

🔹 5. Pró-labore e distribuição de lucros

"Quanto devo definir como meu pró-labore?"

"Posso retirar dinheiro da empresa sem pagar imposto?"

"Qual a diferença entre pró-labore e distribuição de lucros?"

🔹 6. Regularização e planejamento

"Minha empresa está em débito com o Fisco, o que devo fazer?"

"Como posso reduzir legalmente a carga tributária?"

"Quais documentos preciso guardar e por quanto tempo?"

📌 Conclusão

As principais dúvidas giram em torno de redução de impostos, emissão de notas fiscais, obrigações trabalhistas e escolha do regime tributário.
Por isso, um bom contador não apenas cumpre obrigações legais, mas atua como consultor estratégico, ajudando o empresário a tomar decisões que aumentam a lucratividade e reduzem riscos.`
    },
    {
      id: 2,
      image: '/lovable-uploads/624e861a-7f3d-47d8-a637-830dab17fa18.png',
      title: 'Guia Contábil',
      description: `A importância de escolher corretamente o CFOP nas vendas e o NCM

No dia a dia das empresas, a correta classificação fiscal é fundamental para manter a conformidade com o Fisco e evitar problemas futuros. Dois códigos se destacam nesse processo: o CFOP (Código Fiscal de Operações e Prestações) e o NCM (Nomenclatura Comum do Mercosul).

Apesar de muitas vezes passarem despercebidos, eles exercem um papel decisivo na emissão de notas fiscais, na apuração de impostos e até mesmo na precificação dos produtos.

🔹 O papel do CFOP

O CFOP é o código utilizado para identificar a natureza de uma operação, ou seja, qual é a finalidade da movimentação: venda, devolução, transferência, remessa para industrialização, entre outras.

Define como a operação será tributada.

Permite identificar se a movimentação é interna, interestadual ou de exportação.

Impacta diretamente na forma como os impostos são destacados na nota fiscal.

👉 Se um CFOP incorreto for utilizado, a empresa pode pagar impostos a mais, deixar de recolher valores devidos ou até ser autuada pelo Fisco.

🔹 A importância do NCM

Já o NCM é um código que classifica mercadorias em toda a região do Mercosul. Ele está presente em cada produto comercializado e tem como base o Sistema Harmonizado de Designação e Codificação de Mercadorias.

Define a carga tributária de cada produto, como IPI, ICMS, PIS e COFINS.

É essencial para a importação e exportação, permitindo identificar mercadorias de forma padronizada.

Garante que a empresa esteja adequada à legislação fiscal e aduaneira.

👉 Um NCM incorreto pode gerar multas, recolhimento indevido de impostos e até problemas em operações de comércio exterior.

📌 Conclusão

Escolher corretamente o CFOP e o NCM não é apenas uma exigência legal, mas uma forma de proteger a empresa contra autuações fiscais, recolhimentos indevidos e complicações contábeis.

💡 Por isso, contar com o apoio de um contador especializado e realizar revisões periódicas na classificação fiscal são passos indispensáveis para manter a conformidade e a saúde financeira do negócio.`
    },
    {
      id: 3,
      image: '/lovable-uploads/16ae646d-6d2a-4600-b687-7155eb788358.png',
      title: 'Orientações Fiscais',
      description: 'CONTE COM NOSSOS SERVIÇOS PARA A CONFIGURAÇÃO CORRETA DO SEU SISTEMA'
    },
    {
      id: 4,
      image: '/lovable-uploads/4da0f481-59d4-40c8-a769-aab17a3cefb1.png',
      title: 'Manual Empresarial',
      description: 'CONTE CONOSCO!!!'
    },
    {
      id: 5,
      image: '/lovable-uploads/bac08049-d839-42b1-83d4-bc5eb15df87e.png',
      title: 'EMITIMOS SEU CERTIFICADO DIGITAL',
      description: ''
    },
    {
      id: 6,
      image: '/lovable-uploads/c1decb1e-6efd-4a2b-b6f3-afc493b34195.png',
      title: 'Legislação Atualizada',
      description: 'ENQUADRE SUA EMPRESA CONFORME SEU FATURAMENTO'
    },
    {
      id: 7,
      image: '/lovable-uploads/5d8789e7-1894-4a1c-acee-59ebc878b8f5.png',
      title: 'Gestão Financeira',
      description: 'MANTENHA O FISCAL EM DIA!'
    },
    {
      id: 8,
      image: '/lovable-uploads/47fb14a5-ac3c-4696-8308-5feaabb75c43.png',
      title: 'QUAL CERTIFICADO ESCOLHER',
      description: `QUAL CERTIFICADO ESCOLHER ?? Pois A diferença principal entre o certificado digital A1 e A3 está no local de armazenamento: o A1 é um arquivo eletrónico instalado num computador ou dispositivo móvel (com validade de 1 ano), enquanto o A3 é um dispositivo físico, como um cartão ou token (com validade de até 3 anos). O A1 é ideal para fácil mobilidade e uso em múltiplos dispositivos, mas o A3 é mais seguro, sendo preferido para transações sensíveis e com validade mais longa. 
Certificado A1
Armazenamento:
É um ficheiro de software instalado diretamente no computador ou dispositivo móvel. 
Acesso:
Pode ser facilmente copiado e instalado em diversos dispositivos, oferecendo maior mobilidade. 
Validade:
Tem uma validade menor, geralmente de 1 ano. 
Ideal para:
Utilização em múltiplos dispositivos e para quem emite um grande número de documentos fiscais. 
Certificado A3
Armazenamento: É guardado num suporte físico, como um cartão com chip ou um token USB. 
Acesso: Requer a utilização do dispositivo físico em cada computador, sendo menos versátil que o A1. 
Validade: Tem uma validade mais extensa, podendo ser de 1, 2 ou 3 anos. 
Segurança: Oferece maior segurança contra acessos não autorizados, sendo a escolha para transações de alto valor ou que exijam mais rigor. 
Qual escolher?
Para empresas com alta demanda de emissão de notas fiscais e uso em diversos computadores: O A1 é mais prático e versátil. 
Para maior segurança em operações de dados sensíveis e transações de alto valor: O A3 é a opção mais segura. 
Para acesso a sistemas públicos: Alguns sistemas, como os do TST, exigem o certificado A3. 
A escolha entre o modelo A1 e A3 deve ser baseada nas necessidades específicas do negócio ou da pessoa física, considerando a segurança, a praticidade e o custo.`
    },
    {
      id: 9,
      image: '/lovable-uploads/ae3c7d33-3e59-44f1-8113-c75069265e9f.png',
      title: 'QUAL REGIME ADOTAR??',
      description: `Qual regime tributário escolher para sua empresa?

Na hora de abrir ou manter uma empresa, uma das decisões mais importantes é a escolha do regime tributário. Essa escolha impacta diretamente no valor dos impostos pagos, na burocracia do dia a dia e até na competitividade do negócio.

No Brasil, existem três regimes principais: Simples Nacional, Lucro Presumido e Lucro Real. Entenda como funciona cada um e descubra qual pode ser o mais adequado para a sua empresa.

🔹 Simples Nacional

O Simples Nacional é voltado para micro e pequenas empresas, com faturamento de até R$ 4,8 milhões por ano.

A grande vantagem é a unificação de vários impostos em uma única guia (DAS), simplificando o pagamento. Além disso, as alíquotas são progressivas e variam conforme o faturamento e a atividade exercida.

👉 Ideal para empresas menores, que buscam praticidade e não possuem grandes despesas para abater.

🔹 Lucro Presumido

O Lucro Presumido pode ser utilizado por empresas com faturamento de até R$ 78 milhões por ano.

Nesse regime, a Receita Federal presume a margem de lucro da empresa, que pode variar de 8% a 32% sobre o faturamento, dependendo da atividade. O imposto é calculado sobre essa base presumida, mesmo que o lucro real seja maior ou menor.

👉 É vantajoso para empresas que têm margens de lucro elevadas, já que a tributação pode ser menor que no Lucro Real.

🔹 Lucro Real

O Lucro Real é obrigatório para grandes empresas e para segmentos específicos, como bancos e seguradoras, mas também pode ser escolhido por qualquer empresa.

Aqui, os impostos são calculados sobre o lucro líquido efetivo (receitas menos despesas). Isso significa que, em períodos de prejuízo ou margens reduzidas, a carga tributária também diminui.

👉 É o regime mais indicado para empresas com margens baixas ou que têm muitas despesas dedutíveis.

📌 Conclusão

Não existe um "melhor" regime tributário válido para todas as empresas. A escolha deve considerar:

Faturamento anual

Atividade exercida

Margem de lucro

Estrutura de custos

A decisão correta pode representar uma grande economia em impostos e maior saúde financeira para o negócio.`
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
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
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
