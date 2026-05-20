import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/BannerPrincipal';
import GettingStarted from '@site/src/components/PrimeirosPassos';

export default function Home() {
  useEffect(() => {
    document.documentElement.dataset.page = 'home';
    return () => { delete document.documentElement.dataset.page; };
  }, []);

  return (
    <Layout
      title="Datachamp Intern — Homepage"
      description="Repositório central de documentação para todos os aplicativos Datachamp. Tudo que você precisa, num só lugar."
    >
      <main id="main-content">
        <Hero />
        <GettingStarted />
      </main>
    </Layout>
  );
}
