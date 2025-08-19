// posts.js
const posts = [
  {
    id: 1,
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
        text: 'Empresas optantes pelo Simples com aumento de faturamento, mudança de anexo ou novas operações (marketplace, serviços técnicos etc.).'
      },
      { type: 'h2', text: 'Principais mudanças' },
      {
        type: 'ul',
        items: [
          'Revisão de sublimites por UF e faixas de receita.',
          'Ajustes nos prazos do DAS e prorrogações específicas.',
          'Refinamento das regras de segregação de receitas por anexo.'
        ]
      },
      { type: 'h2', text: 'Passo a passo para ficar em dia' },
      {
        type: 'ol',
        items: [
          'Revisar CNAEs e anexos vigentes.',
          'Conferir sublimite da sua UF.',
          'Validar apurações dos últimos 3 meses e corrigir inconsistências.',
          'Agendar lembretes de DAS e obrigações acessórias.',
          'Documentar mudanças e orientar o financeiro.'
        ]
      },
      { type: 'h2', text: 'Erros comuns (e como evitar)' },
      {
        type: 'ul',
        items: [
          'Atrasar DAS por falta de lembrete.',
          'Misturar receitas de anexos diferentes sem segregação.',
          'Ignorar sublimites ao emitir NFS-e para outros municípios.'
        ]
      },
      { type: 'h2', text: 'Prazos e ferramentas' },
      { type: 'p', text: 'DAS: até o dia 20 (salvo alterações). Use calendário e alertas automáticos.' },
      { type: 'h2', text: 'Próximos passos' },
      { type: 'p', text: 'Fale com um contador para revisar seu enquadramento e evitar multas desnecessárias.' }
    ]
  },
  {
    id: 2,
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
      { type: 'h2', text: 'Tipos de empresa' },
      { type: 'p', text: 'MEI, ME, EPP: quando cada um faz sentido, requisitos e limites.' },
      { type: 'h2', text: 'Documentos necessários' },
      {
        type: 'ul',
        items: ['RG/CPF', 'Comprovante de endereço', 'Contrato de locação (se houver)', 'Atividade (CNAE)']
      },
      { type: 'h2', text: 'Passo a passo em Uberlândia' },
      {
        type: 'ol',
        items: [
          'Definir natureza jurídica e CNAE.',
          'Registro na Junta Comercial de MG.',
          'Obter CNPJ na Receita Federal.',
          'Inscrição municipal e alvarás conforme atividade.',
          'Emissão de NFS-e e configuração inicial.'
        ]
      },
      { type: 'h2', text: 'Custos e prazos' },
      { type: 'p', text: 'As faixas variam por atividade e enquadramento. Peça orçamento para valores atualizados.' },
      { type: 'h2', text: 'Checklist final' },
      { type: 'ul', items: ['Contratos assinados', 'CNPJ ativo', 'Inscrições vigentes', 'Emissão de notas habilitada'] }
    ]
  },
  {
    id: 3,
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
          'Admissões e desligamentos',
          'Fechamento da folha',
          'Envio de eventos periódicos',
          'Conferência de INSS/FGTS'
        ]
      },
      { type: 'h2', text: 'Checklist de prazos' },
      { type: 'ol', items: ['Até dia 7: FGTS', 'Até dia 15: eventos periódicos', 'Até dia 20: DAS/tributos'] }
    ]
  },
  {
    id: 4,
    slug: 'irpf-organizar',
    title: 'IRPF: o que organizar desde já para não cair na malha',
    featured: true,
    summary: 'Comprovantes, deduções e boas práticas para uma entrega tranquila do IRPF.',
    category: 'IRPF',
    types: ['dicas'],
    updatedAt: '2025-07-03',
    readMins: 6,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Documentos essenciais' },
      { type: 'ul', items: ['Informes de rendimento', 'Despesas dedutíveis', 'Comprovantes de bens e dívidas'] }
    ]
  },
  {
    id: 5,
    slug: 'mei-limites-migracao',
    title: 'MEI: limites, impostos e quando virar ME',
    summary: 'Entenda o limite de faturamento, tributos e o momento certo de migrar para ME.',
    category: 'MEI',
    types: ['dicas'],
    updatedAt: '2025-06-26',
    readMins: 6,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'h2', text: 'Limite e obrigações' },
      { type: 'p', text: 'Como monitorar faturamento e evitar desenquadramento surpresa.' }
    ]
  },
  {
    id: 6,
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
      { type: 'h2', text: 'Quando é obrigatório' },
      { type: 'ul', items: ['Emissão de NF-e', 'Acesso a portais do governo', 'Assinaturas digitais'] }
    ]
  }
];

export default posts;
