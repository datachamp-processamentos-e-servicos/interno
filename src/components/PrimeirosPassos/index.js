import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const steps = [
  {
    id: 'acesso',
    label: 'Não sabe como chegou aqui?',
    to: 'https://datachamp-processamentos-e-servicos.github.io/docusaurus/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
  }
];

function StepCard({ label, to, icon }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <span className={styles.cardLabel}>{label}</span>
      <svg className={styles.cardArrow} width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export default function GettingStarted() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.40 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
          <h2 className={styles.title}>
            Alguma dúvia?
          </h2>
        </div>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`${styles.cardWrapper} ${visible ? styles.cardWrapperVisible : ''}`}
              style={{ transitionDelay: visible ? `${0.40 + i * 0.12}s` : '0s' }}
            >
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
