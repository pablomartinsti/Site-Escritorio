import { Card, Row, Title, Sub, Button } from './styles';

export default function CTAInline() {
  return (
    <Card>
      <Row>
        <div>
          <Title>Precisa de ajuda com este tema?</Title>
          <Sub>Fale com um contador agora mesmo.</Sub>
        </div>
        <Button href="https://wa.me/5534996571156" target="_blank" rel="noreferrer">
          WhatsApp
        </Button>
      </Row>
    </Card>
  );
}
