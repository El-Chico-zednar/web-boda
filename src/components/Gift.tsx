import { motion } from 'framer-motion';
import { useState } from 'react';

const Gift = () => {
    const [copied, setCopied] = useState(false);
    const iban = "ES00 0000 0000 0000 0000 0000"; // Placeholder

    const handleCopy = () => {
        navigator.clipboard.writeText(iban);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 0 6rem' }}>
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                    <h2 className="italic" style={{
                        color: 'var(--color-primary)',
                        marginBottom: '2rem',
                        fontSize: '2rem'
                    }}>
                        Regalo
                    </h2>

                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.8,
                        marginBottom: '3rem',
                        fontFamily: 'var(--font-body)',
                        opacity: 0.9
                    }}>
                        Vuestra presencia es nuestro mayor regalo. Si deseáis tener un detalle con nosotros, podéis hacerlo en el siguiente número de cuenta:
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <p style={{
                            fontSize: '1.1rem',
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-primary)',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            margin: 0
                        }}>
                            {iban}
                        </p>

                        <button
                            onClick={handleCopy}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text)',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                opacity: 0.6,
                                transition: 'opacity 0.3s ease',
                                padding: '0.5rem',
                                borderBottom: '1px solid transparent'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                        >
                            {copied ? '¡Copiado!' : 'Copiar'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gift;
