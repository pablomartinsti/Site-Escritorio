export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

export const clamp = (str = '', max = 150) => (str.length > max ? str.slice(0, max - 1) + '…' : str);
