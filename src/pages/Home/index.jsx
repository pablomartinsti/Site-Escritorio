import { Helmet } from 'react-helmet-async';
import { Container } from './styles';
import Hero from './Sections/Hero.jsx';
import Services from './Sections/Services.jsx';
import About from './Sections/About.jsx';
import Differentials from './Sections/Differentials.jsx';
import Feedbacks from './Sections/Feedbacks.jsx';
import FAQ from './Sections/FAQ.jsx';
import News from '../../components/News';

import Cta from '../../components/Formulario';

export default function Home() {
  return (
    <Container as="main" id="conteudo-principal" role="main">
      <Helmet>
        <title>Martir Assessoria Contábil – Contabilidade em Uberlândia</title>
        <meta
          name="description"
          content="Assessoria contábil completa em Uberlândia. Cuidamos da abertura de empresas, gestão fiscal, contabilidade e consultoria para seu negócio crescer."
        />
        <link rel="canonical" href="https://martircontabil.com.br/" />
      </Helmet>

      <Hero />
      <Services />
      <About />
      <Differentials />
      <Feedbacks />
      <FAQ />
      <Cta />
      <News />
    </Container>
  );
}
