// posts.js
const posts = [
  {
    id: 1,
    slug: 'irpf-organizar',
    title: 'IRPF: o que organizar desde já para não cair na malha',
    featured: true,
    summary: 'Comprovantes, deduções e boas práticas para uma entrega tranquila do IRPF.',
    category: 'IRPF',
    types: ['dicas'],
    updatedAt: '2025-07-03',
    readMins: 6,
    image: 'https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?q=80&w=1170&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Atenção — prazos oficiais do IRPF 2025' },
      {
        type: 'p',
        text: 'Entrega: 17/03 a 30/05/2025 às 23h59. Atraso gera multa de 1% ao mês, mínimo R$ 165,74 e teto de 20%.'
      },

      { type: 'h2', text: 'Quem é obrigado a declarar em 2025 (exercício 2025, ano-base 2024)' },
      {
        type: 'ul',
        items: [
          'Rendimentos tributáveis acima de R$ 33.888,00.',
          'Receita bruta da atividade rural acima de R$ 169.440,00 ou compensação de prejuízo rural.',
          'Operações em bolsa acima de R$ 40.000,00 no ano ou com ganho tributável.',
          'Rendimentos isentos/não tributáveis/exclusivos acima de R$ 200.000,00.',
          'Bens e direitos em 31/12/2024 acima de R$ 800.000,00.',
          'Ganho de capital na venda de bens; isenção por venda de imóvel com recompra em 180 dias.',
          'Atualizou valor de imóvel e pagou GCAD (dez/2024).',
          'Rendimentos no exterior (aplicações financeiras, lucros e dividendos) com apuração anual.',
          'Titularidade de trust; opção por detalhar bens de controlada no exterior.',
          'Passou a residente no Brasil em 2024.'
        ]
      },

      { type: 'h2', text: 'O que mudou em 2025' },
      {
        type: 'ul',
        items: [
          'Novos limites: R$ 33.888 (rendimentos tributáveis), R$ 169.440 (rural) e R$ 800.000 (bens).',
          'Prioridade maior na restituição para quem usa pré-preenchida + recebe via Pix.',
          'Pré-preenchida liberada a partir de 01/04 (acesso com conta gov.br prata ou ouro).',
          'Campos removidos: título de eleitor, consulado/embaixada e recibo anterior (declaração on-line).',
          'Tributação anual de 15% para aplicações financeiras no exterior e lucros/dividendos de controladas.'
        ]
      },

      { type: 'h2', text: 'Como enviar' },
      {
        type: 'ol',
        items: [
          'Baixe o Programa Gerador (PGD) ou use o app “Meu Imposto de Renda”/e-CAC.',
          'Prefira a declaração pré-preenchida e confira rendimentos, deduções e bens.',
          'Anexe/importe GCAP, Carnê-Leão e informes bancários/corretoras.',
          'Valide pendências e transmita.'
        ]
      },

      { type: 'h2', text: 'Pagamento do imposto' },
      {
        type: 'ul',
        items: [
          'À vista ou em até 8 cotas.',
          '1ª cota (ou cota única) vence em 30/05/2025.',
          'Demais cotas: último dia útil de cada mês até dezembro.',
          'Para débito automático da 1ª cota, transmita até 09/05; depois, só das demais.'
        ]
      },

      { type: 'h2', text: 'Restituição 2025 — datas e prioridade' },
      {
        type: 'ul',
        items: [
          'Lotes: 30/05, 30/06, 31/07, 29/08 e 30/09.',
          'Ordem legal: 80+, 60+/PCD/doença grave, magistério, quem usou pré-preenchida + Pix, depois pré-preenchida ou Pix.'
        ]
      },

      { type: 'h2', text: 'Documentos essenciais para separar' },
      {
        type: 'ul',
        items: [
          'Informes de salários, pró-labore, INSS e previdência privada.',
          'Informes de bancos/corretoras, fundos, cripto e rendimentos no exterior.',
          'Comprovantes de distribuição de lucros/JCP.',
          'Carnê-Leão (autônomos, aluguel, plataformas) e DARFs pagos.',
          'Despesas dedutíveis: saúde, educação, doações incentivadas.',
          'Bens/dívidas: imóveis, veículos, investimentos e financiamentos.'
        ]
      },

      { type: 'h2', text: 'Erros que geram malha' },
      {
        type: 'ul',
        items: [
          'Omitir pró-labore, autônomos ou rendas de dependentes.',
          'Informar lucros de PJ como salário.',
          'Não importar GCAP/Carnê-Leão.',
          'Deduções sem comprovante idôneo.'
        ]
      },

      { type: 'h2', text: 'Checklist rápido' },
      {
        type: 'ol',
        items: [
          'Criar pastas por categoria e dependente.',
          'Baixar todos os informes e conciliar com extratos.',
          'Importar GCAP/Carnê-Leão e revisar pré-preenchida.',
          'Simular tributação e escolher dedução legal ou simplificada.',
          'Transmitir e agendar pagamento/restituição via Pix.'
        ]
      },

      { type: 'h2', text: 'Fale com um contador' },
      {
        type: 'p',
        text: 'Precisa de ajuda com sua declaração 2025? Fale com nosso escritório pelo WhatsApp ou formulário e evitamos multa e malha fina.'
      }
    ]
  },
  {
    id: 2,
    slug: 'certificado-digital-a1',
    title: 'Certificado Digital A1: quando você precisa e como emitir',
    featured: true,
    summary: 'Guia rápido para NF-e e acesso ao e-CAC com segurança.',
    category: 'Certificado Digital',
    types: ['dicas'],
    updatedAt: '2025-06-20',
    readMins: 4,
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'O que é o Certificado A1' },
      {
        type: 'p',
        text: 'Arquivo digital (extensão .pfx/.p12) instalado no computador/servidor. Validade de 12 meses. Permite assinar e acessar sistemas do governo sem token físico.'
      },

      { type: 'h2', text: 'Quando é obrigatório para empresas' },
      {
        type: 'ul',
        items: [
          'Emissão de NF-e/NFS-e e CT-e em ERPs e emissores.',
          'Acesso ao e-CAC (Receita Federal) e assinatura de documentos.',
          'eSocial, EFD-Reinf e DCTFWeb.',
          'Conectividade Social FGTS (processos trabalhistas e procurações).',
          'Portais estaduais/municipais e licitações que exigem assinatura digital.'
        ]
      },

      { type: 'h2', text: 'Por que escolher o A1 (foco do nosso serviço)' },
      {
        type: 'ul',
        items: [
          'Automação: funciona direto no ERP/servidor sem token.',
          'Praticidade: emissão e renovação 100% online após validação.',
          'Menos risco físico: não perde por quebra/extravio (como no A3).',
          'Pode instalar em mais de um equipamento da empresa conforme política interna.',
          'Facilita robôs de emissão de notas e integrações.'
        ]
      },

      { type: 'h2', text: 'Requisitos para emitir' },
      {
        type: 'ul',
        items: [
          'CNPJ ativo e dados do responsável legal.',
          'Documento com foto (RG/CPF) e comprovante de endereço do responsável.',
          'Contrato/ato constitutivo atualizado.',
          'Validação de identidade por videoconferência (ou presencial, se necessário).',
          'E-mail e telefone para envio do arquivo e senha.'
        ]
      },

      { type: 'h2', text: 'Passo a passo' },
      {
        type: 'ol',
        items: [
          'Solicitar emissão informando CNPJ e contato.',
          'Enviar documentação para análise.',
          'Fazer a validação por vídeo com o responsável.',
          'Gerar e receber o arquivo A1 (.pfx) com senha.',
          'Instalar no emissor/ERP e testar emissão de notas.'
        ]
      },

      { type: 'h2', text: 'Validade, renovação e revogação' },
      {
        type: 'ul',
        items: [
          'Validade padrão: 12 meses.',
          'Inicie a renovação ~30 dias antes do vencimento.',
          'Perdeu o arquivo ou suspeita de uso indevido? Solicite revogação imediata.'
        ]
      },

      { type: 'h2', text: 'Boas práticas de segurança' },
      {
        type: 'ul',
        items: [
          'Guardar o arquivo em local seguro com backup criptografado.',
          'Usar senha forte e restringir acesso por perfil.',
          'Evitar envio por e-mail; prefira canal seguro.',
          'Registrar quem usa e onde está instalado.'
        ]
      },

      { type: 'h2', text: 'Erros comuns (e como evitar)' },
      {
        type: 'ul',
        items: [
          'Deixar vencer e parar emissão de notas → configure alertas.',
          'Instalar em máquina errada sem backup → planeje onde ficará o A1.',
          'Senha fraca ou compartilhada → política mínima e troca periódica.',
          'Tentar automação com A3 → para automação contínua, use A1.'
        ]
      },

      { type: 'h2', text: 'FAQ' },
      {
        type: 'ul',
        items: [
          'Posso usar o A1 em mais de um computador? → Sim, conforme controles internos.',
          'MEI precisa de A1? → Quando emite NF-e/NFS-e ou acessa e-CAC com assinatura.',
          'Consigo migrar de A3 para A1? → Sim, com nova validação.',
          'Quanto tempo leva? → Em geral, no mesmo dia após a validação.'
        ]
      },

      { type: 'h2', text: 'Próximos passos' },
      {
        type: 'p',
        text: 'Emitimos somente Certificado Digital A1. Envie seu CNPJ e contato no formulário ou WhatsApp para emitir hoje mesmo e configurar no seu sistema.'
      }
    ]
  },
  {
    id: 3,
    slug: 'abrir-empresa-uberlandia',
    title: 'Como abrir empresa em Uberlândia: passo a passo e custos',
    featured: true,
    summary: 'Do CNAE ao CNPJ — documentos, taxas e prazos locais para abrir sua empresa sem dor de cabeça.',
    category: 'Abertura de Empresas',
    types: ['dicas'],
    updatedAt: '2025-07-15',
    readMins: 8,
    image: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Para quem é este guia' },
      {
        type: 'p',
        text: 'Empreendedores de Uberlândia que querem formalizar MEI, ME ou EPP com o CNAE correto e emissão de notas ativa.'
      },

      { type: 'h2', text: 'Tipos de empresa (visão rápida)' },
      {
        type: 'ul',
        items: [
          'MEI: faturamento limitado, 1 empregado, restrições de CNAE.',
          'ME (Ltda/SLU/EIRELI antigas): mais CNAEs, pode ter funcionários.',
          'EPP: mesma lógica da ME, com faturamento maior.',
          'Natureza jurídica comum: Sociedade Limitada (LTDA) ou Sociedade Limitada Unipessoal (SLU).'
        ]
      },

      { type: 'h2', text: 'CNAE e regime tributário' },
      {
        type: 'p',
        text: 'Defina o CNAE principal e os secundários antes de abrir. Isso impacta autorização de funcionamento, alíquotas e obrigação de nota. Avalie Simples Nacional vs. outros regimes com base em margens e folha.'
      },

      { type: 'h2', text: 'Documentos necessários (sócios e empresa)' },
      {
        type: 'ul',
        items: [
          'RG/CPF e comprovante de endereço dos sócios.',
          'Estado civil e regime de bens (se casado).',
          'Contrato de locação ou declaração de ponto comercial (se houver).',
          'Esboço do contrato social e atividades (CNAEs).',
          'E-mail e telefone dos responsáveis.'
        ]
      },

      { type: 'h2', text: 'Passo a passo em Uberlândia (MG)' },
      {
        type: 'ol',
        items: [
          'Consulta de viabilidade: endereço e nome empresarial compatíveis com a atividade.',
          'Registro na JUCEMG: protocolo do contrato social/SLU pelo integrador estadual (REDESIM).',
          'CNPJ: geração do DBE e deferimento pela Receita Federal.',
          'Inscrição Municipal: cadastro na Prefeitura de Uberlândia para ISS.',
          'Alvará de Localização e Funcionamento: conforme atividade e zoneamento; pode exigir vistoria.',
          'Inscrição Estadual (se comércio/indústria): cadastro na SEF/MG.',
          'Certificado Digital A1: emissão e instalação para NFS-e/NF-e e acesso ao e-CAC.',
          'Configuração fiscal: emissão de NFS-e/NF-e no sistema e parametrização de impostos.'
        ]
      },

      { type: 'h2', text: 'Custos e prazos (variáveis)' },
      {
        type: 'ul',
        items: [
          'Taxas da JUCEMG e Junta: variam por tipo de ato e porte.',
          'Taxas municipais: variam por atividade e metragem.',
          'Certificado Digital A1: renovação anual.',
          'Prazos típicos: CNPJ costuma sair rápido após deferimento; alvará e inscrições podem exigir dias adicionais conforme exigências.'
        ]
      },

      { type: 'h2', text: 'Erros comuns que atrasam a abertura' },
      {
        type: 'ul',
        items: [
          'Escolher CNAE incompatível com o ponto ou sem previsão na prefeitura.',
          'Contrato social sem cláusulas essenciais (endereço, capital, atividades).',
          'Ignorar inscrição estadual quando há circulação de mercadorias.',
          'Deixar NFS-e/NF-e para depois e ficar sem emitir notas no início.'
        ]
      },

      { type: 'h2', text: 'Checklist final' },
      {
        type: 'ul',
        items: [
          'Contrato social registrado e CNPJ ativo.',
          'Inscrição municipal e (se aplicável) estadual concluídas.',
          'Alvará emitido conforme atividade.',
          'Certificado Digital A1 instalado.',
          'Emissor configurado e emissão de notas habilitada.'
        ]
      },

      { type: 'h2', text: 'FAQ — Uberlândia' },
      {
        type: 'ul',
        items: [
          'Quanto tempo leva? → Depende de viabilidade e alvará; CNPJ tende a sair primeiro.',
          'Posso abrir em endereço residencial? → Apenas para atividades permitidas pelo zoneamento.',
          'MEI ou ME? → Avalie limites, necessidade de funcionários e CNAEs permitidos.',
          'Preciso de contador? → Recomendado para definir regime, parametrizar notas e evitar multas.'
        ]
      },

      { type: 'h2', text: 'Próximos passos' },
      {
        type: 'p',
        text: 'Quer abrir sua empresa em Uberlândia sem retrabalho? Fale com nosso escritório pelo WhatsApp ou formulário. Cuidamos do CNAE, registros, alvará e instalação do Certificado A1.'
      }
    ]
  },

  {
    id: 4,
    slug: 'simples-nacional-2025',
    title: 'Simples Nacional 2025: o que mudou e como não pagar multas',
    summary:
      'Entenda as principais mudanças e use um checklist prático para manter sua empresa em dia e evitar multas.',
    category: 'Planejamento Tributário',
    types: ['noticias'], // filtro único: noticias | dicas
    updatedAt: '2025-07-28',
    readMins: 7,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Quem deve se preocupar' },
      {
        type: 'p',
        text: 'Empresas no Simples com crescimento de faturamento, mudança de anexo, vendas em marketplace, prestação de serviços técnicos ou abertura de novas filiais.'
      },

      { type: 'h2', text: 'O que mudou em 2025' },
      {
        type: 'ul',
        items: [
          'Revisão de sublimites por UF e faixas de receita.',
          'Ajustes no calendário do DAS e prorrogações pontuais quando houver decretos.',
          'Regras mais rígidas de segregação de receitas por anexo e por canal (próprias x marketplace).',
          'Fiscalização eletrônica ampliada via DTE-SN e cruzamento de NFs.'
        ]
      },

      { type: 'h2', text: 'Impacto direto para a sua empresa' },
      {
        type: 'ul',
        items: [
          'Pode mudar a alíquota efetiva no PGDAS-D conforme receita acumulada.',
          'Sublimite estourado: parte do ICMS/ISS pode sair do Simples.',
          'Receitas mistas (serviço + comércio) exigem segregação correta para evitar multa.'
        ]
      },

      { type: 'h2', text: 'Passo a passo para ficar em dia' },
      {
        type: 'ol',
        items: [
          'Revisar CNAEs, anexos e regras de segregação usados no PGDAS-D.',
          'Conferir sublimite da sua UF e o acumulado dos últimos 12 meses.',
          'Validar as apurações dos últimos 3 meses e corrigir divergências de NFs.',
          'Mapear vendas por canal: loja própria, marketplace, serviços, revenda.',
          'Agendar lembretes de PGDAS-D e pagamento do DAS.',
          'Documentar procedimentos e treinar financeiro e emissão de notas.'
        ]
      },

      { type: 'h2', text: 'Prazos e ferramentas' },
      {
        type: 'ul',
        items: [
          'PGDAS-D: apuração mensal até a data de vencimento.',
          'DAS: até o dia 20 de cada mês (salvo alterações legais).',
          'DTE-SN: monitore mensagens e intimações.',
          'Use calendário fiscal e alertas automáticos para evitar atraso.'
        ]
      },

      { type: 'h2', text: 'Exemplos práticos' },
      {
        type: 'ul',
        items: [
          'Marketplace: se a plataforma emite a NF ao cliente, segregue a sua receita de intermediação ou comissão conforme regra local.',
          'Serviços técnicos (Anexo V) com folha relevante podem migrar alíquota efetiva via fator R; simule antes de precificar.'
        ]
      },

      { type: 'h2', text: 'Erros comuns (e como evitar)' },
      {
        type: 'ul',
        items: [
          'Atrasar DAS por falta de lembrete → configure alertas e débito automático quando possível.',
          'Misturar receitas de anexos diferentes → crie centros de receita e segregue no PGDAS-D.',
          'Ignorar sublimites ao vender para outros municípios/estados → valide regras de ISS/ICMS antes de emitir.',
          'Não conferir NFs do marketplace → concilie relatórios da plataforma com seu faturamento.'
        ]
      },

      { type: 'h2', text: 'FAQ rápido' },
      {
        type: 'ul',
        items: [
          'Como saber meu anexo? → Depende do CNAE e da natureza do serviço; confirme no PGDAS-D e legislação.',
          'Estouro do sublimite: o que muda? → Parte do ICMS/ISS pode ser recolhida fora do Simples.',
          'Fator R ajuda a pagar menos? → Se a relação folha/receita ≥ 28%, serviços podem ir ao Anexo III; simule mensalmente.'
        ]
      },

      { type: 'h2', text: 'Próximos passos' },
      {
        type: 'p',
        text: 'Quer evitar multa e pagar o mínimo dentro da lei? Fale com nosso escritório. Revisamos anexos, sublimites e segregação e deixamos seu PGDAS-D redondo.'
      }
    ]
  },
  {
    id: 5,
    slug: 'esocial-prazos-rotinas',
    title: 'eSocial: prazos e rotinas essenciais para não atrasar',
    summary: 'Calendário prático e checklist para sua folha rodar sem sustos, evitando multas por atraso.',
    category: 'Escrituração Contábil e Fiscal',
    types: ['dicas'],
    updatedAt: '2025-07-10',
    readMins: 5,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Rotinas mensais' },
      {
        type: 'ul',
        items: [
          'Admissões, afastamentos e desligamentos no prazo.',
          'Fechamento da folha e conferência de rubricas.',
          'Envio de eventos periódicos e fechamento (S-1200, S-1210, S-1299).',
          'Conciliação de bases para DCTFWeb e FGTS Digital.'
        ]
      },

      { type: 'h2', text: 'Calendário 2025 — prazos-chave' },
      {
        type: 'ul',
        items: [
          'Até o dia 15: eventos periódicos do eSocial e fechamento S-1299 (13º até 20/12).',
          'FGTS mensal via FGTS Digital: até o dia 20 do mês seguinte; rescisório até o 10º dia após o desligamento.',
          'DCTFWeb: até o último dia útil do mês seguinte à competência.'
        ]
      },

      { type: 'h2', text: 'Ajustes de data' },
      {
        type: 'ul',
        items: [
          'eSocial: se o dia 15 cair em não útil, envia no dia útil seguinte.',
          'FGTS: se o dia 20 cair em não útil, antecipa para o dia útil anterior.'
        ]
      },

      { type: 'h2', text: 'Checklist rápido' },
      {
        type: 'ol',
        items: [
          'Fechar a folha e validar proventos/descontos.',
          'Transmitir S-1200/S-1210 e fechar S-1299 até o dia 15.',
          'Emitir DCTFWeb e programar pagamento dos débitos.',
          'Gerar guias do FGTS Digital até o dia 20 (mensal) e conferir rescisórios.',
          'Arquivar recibos e protocolos.'
        ]
      },

      { type: 'h2', text: 'Erros comuns (e como evitar)' },
      {
        type: 'ul',
        items: [
          'Perder o prazo do S-1299 e travar a DCTFWeb → configure alertas.',
          'Não importar eventos para o FGTS Digital → concilie bases antes do vencimento.',
          'Equívocos em pró-labore/INSS → valide incidências nas rubricas.',
          'Esquecer rescisório do FGTS no 10º dia → check-list específico de desligamento.'
        ]
      },

      { type: 'h2', text: 'FAQ' },
      {
        type: 'ul',
        items: [
          'Qual o prazo do S-1299? → Até o dia 15 do mês seguinte (13º até 20/12).',
          'Qual o vencimento do FGTS mensal? → Dia 20 do mês seguinte.',
          'E o prazo da DCTFWeb? → Último dia útil do mês seguinte.'
        ]
      },

      { type: 'h2', text: 'Próximos passos' },
      {
        type: 'p',
        text: 'Quer um calendário 2025 configurado e conferência mensal? Fale com nosso escritório pelo WhatsApp ou formulário e evitamos multas e retrabalho.'
      }
    ]
  },
  {
    id: 6,
    slug: 'gestao-financeira-faturamento-lucro-pro-labore',
    title: 'Faturamento, lucro e pró-labore: diferenças para a gestão financeira',
    summary: 'Entenda o que é faturamento, lucro e pró-labore, como calcular e evitar erros que drenam o caixa.',
    category: 'Gestão Financeira',
    types: ['dicas'],
    updatedAt: '2025-08-23',
    readMins: 6,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Por que isso importa para empresas' },
      {
        type: 'p',
        text: 'Confundir faturamento, lucro e pró-labore gera decisões ruins, caixa negativo e impostos pagos a mais.'
      },

      { type: 'h2', text: 'Faturamento' },
      {
        type: 'p',
        text: 'É a receita bruta das vendas/serviços emitidos em NFs. Não é dinheiro livre: ainda faltam custos, despesas e tributos.'
      },
      {
        type: 'ul',
        items: [
          'Exemplo: R$ 50.000 em NFs no mês.',
          'Ainda não desconta custos (insumos, folha, frete) e despesas (aluguel, marketing).'
        ]
      },

      { type: 'h2', text: 'Lucro' },
      {
        type: 'p',
        text: 'É o que sobra do faturamento após custos, despesas e tributos. Olhe o DRE para tomar decisão.'
      },
      {
        type: 'ul',
        items: [
          'Exemplo: Faturou R$ 50.000 – custos/despesas R$ 35.000 – tributos R$ 3.000 = lucro R$ 12.000.',
          'Tipos: bruto, operacional e líquido.'
        ]
      },

      { type: 'h2', text: 'Pró-labore' },
      {
        type: 'p',
        text: 'Retirada mensal dos sócios pelo trabalho. Incide INSS. Diferente de distribuição de lucros.'
      },
      { type: 'ul', items: ['Defina valor fixo e data.', 'Evite ajustar pró-labore pelo “humor do caixa”.'] },

      { type: 'h2', text: 'Erros comuns (e como evitar)' },
      {
        type: 'ul',
        items: [
          'Confundir faturamento com lucro → acompanhe DRE mensal.',
          'Retirar pró-labore sem planejamento → defina política de retiradas.',
          'Misturar PF e PJ → contas separadas e conciliação semanal.',
          'Ignorar tributos no preço → considere alíquotas e regime.'
        ]
      },

      { type: 'h2', text: 'Checklist rápido' },
      {
        type: 'ol',
        items: [
          'Separar contas PF e PJ e padronizar centros de custo.',
          'Definir pró-labore e registrar a folha (INSS).',
          'Acompanhar fluxo de caixa e DRE todo mês.',
          'Revisar formação de preços com tributos embutidos.',
          'Reavaliar regime tributário com o contador anualmente.'
        ]
      },

      { type: 'h2', text: 'FAQ' },
      {
        type: 'ul',
        items: [
          'Pró-labore é obrigatório? → Para sócio que trabalha na empresa, sim, com INSS.',
          'Posso distribuir lucros sem pró-labore? → Risco fiscal; mantenha pró-labore compatível.',
          'Qual percentual saudável de pró-labore? → Depende da margem; comece conservador (ex.: 10–20% do lucro líquido) e ajuste com o contador.'
        ]
      },

      { type: 'h2', text: 'Próximos passos' },
      {
        type: 'p',
        text: 'Implemente DRE mensal, formalize pró-labore e revise preços. Fale com um contador para definir a melhor estratégia de retiradas e tributação.'
      }
    ]
  }
];

export default posts;
