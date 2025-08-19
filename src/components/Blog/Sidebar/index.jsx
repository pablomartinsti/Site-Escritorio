// Sidebar.jsx
import { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';
import { z } from 'zod';

import { Wrap, Card, Box, Input, Label, Title, Chips, LinkList, Whats } from './styles';
import Button from '../../Button';

const leadSchema = z.object({
  from_name: z.string().min(3, 'Nome precisa ter pelo menos 3 caracteres'),
  from_email: z.string().email('E-mail inválido'),
  phone: z.preprocess((v) => {
    const s = String(v ?? '').replace(/\D/g, '');
    return s.length ? s : undefined;
  }, z.string().min(10, 'Telefone inválido').optional()),
  consent: z.literal('on', { errorMap: () => ({ message: 'É necessário concordar com a política.' }) }),
  message: z.string().optional()
});

export default function Sidebar({
  latestPosts = [],
  latestTitle = 'Últimos Posts', // 👈 agora pode vir dinâmico
  filters, // { types:[{label,slug}] }
  selectedType, // 'tudo' | 'noticias' | 'dicas'
  onTypeChange,
  onLeadSubmit
}) {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ kind: null, text: '' });

  const submit = useCallback(
    async (e) => {
      e.preventDefault();
      setFeedback({ kind: null, text: '' });
      setIsSending(true);

      const fd = new FormData(formRef.current);
      const data = Object.fromEntries(fd.entries());

      const valid = leadSchema.safeParse(data);
      if (!valid.success) {
        const text = valid.error.errors.map((er) => er.message).join(', ');
        setFeedback({ kind: 'error', text });
        setIsSending(false);
        return;
      }

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setFeedback({ kind: 'ok', text: 'Enviado. Em breve entraremos em contato.' });
        onLeadSubmit?.(valid.data);
        formRef.current.reset();
      } catch (err) {
        console.error(err);
        setFeedback({ kind: 'error', text: 'Erro ao enviar. Tente novamente.' });
      } finally {
        setIsSending(false);
      }
    },
    [onLeadSubmit]
  );

  return (
    <Wrap>
      {/* Lead */}
      <Card>
        <Box as="form" ref={formRef} onSubmit={submit} noValidate>
          <Title>Tire uma dúvida com um contador</Title>

          <Input id="from_name" name="from_name" placeholder="Nome" required disabled={isSending} />
          <Input id="from_email" name="from_email" placeholder="E-mail" type="email" required disabled={isSending} />

          <Input
            id="phone"
            as={InputMask}
            mask="(99) 9 9999-9999"
            maskChar={null}
            name="phone"
            placeholder="Telefone"
            disabled={isSending}
          />

          <input type="hidden" name="message" value="Lead do blog" />

          <Label htmlFor="consent">
            <input id="consent" name="consent" type="checkbox" required disabled={isSending} /> Li e concordo com a
            Política de Privacidade
          </Label>

          {feedback.text && (
            <p aria-live="polite" style={{ color: feedback.kind === 'error' ? '#b00020' : '#0a7a0a', margin: '6px 0' }}>
              {feedback.text}
            </p>
          )}

          <Button type="submit" loading={isSending} disabled={isSending} fullWidth>
            Enviar
          </Button>
        </Box>
      </Card>

      {/* Filtro único por tipo */}
      <Card>
        <Box>
          <Title>Por tipo</Title>
          <Chips>
            {filters.types.map((t) => (
              <button
                key={t.slug}
                type="button"
                onClick={() => onTypeChange?.(t.slug)}
                aria-pressed={selectedType === t.slug}
                className={selectedType === t.slug ? 'active' : undefined}
              >
                {t.label}
              </button>
            ))}
          </Chips>
        </Box>
      </Card>

      {/* Últimos ou em destaque */}
      <Card>
        <Box>
          <Title>{latestTitle}</Title>
          <LinkList>
            {latestPosts.map((p) => (
              <li key={p.id}>
                <a href={`/blog/${p.slug}`}>{p.title}</a>
              </li>
            ))}
          </LinkList>
        </Box>
      </Card>

      {/* WhatsApp */}
      <Card>
        <Whats href="https://wa.me/5534996571156" target="_blank" rel="noreferrer noopener">
          Falar no WhatsApp
        </Whats>
      </Card>
    </Wrap>
  );
}

Sidebar.propTypes = {
  latestPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  latestTitle: PropTypes.string, // 👈 novo
  filters: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, slug: PropTypes.string })).isRequired
  }).isRequired,
  selectedType: PropTypes.oneOf(['tudo', 'noticias', 'dicas']).isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onLeadSubmit: PropTypes.func
};
