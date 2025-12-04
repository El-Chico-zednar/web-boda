import { motion } from 'framer-motion';

const Story = () => {
    const customEase = [0.25, 0.46, 0.45, 0.94] as const;

    return (
        <section className="section" style={{
            backgroundColor: 'var(--color-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle background decoration */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(210, 180, 140, 0.08), transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                pointerEvents: 'none'
            }} />

            <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: customEase }}
                >
                    <h2 className="italic" style={{
                        background: 'linear-gradient(135deg, var(--color-primary), #c4a574)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '1.5rem'
                    }}>
                        Nuestra Historia
                    </h2>
                    <p style={{
                        maxWidth: '750px',
                        margin: '0 auto 4.5rem',
                        fontSize: '1.15rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.9,
                        opacity: 0.9
                    }}>
                        Todo comenzó con un café en el centro de Madrid. Cinco años, innumerables aventuras y un millón de recuerdos después, estamos listos para comenzar nuestro próximo capítulo juntos.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    maxWidth: '950px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {[
                        { title: "Primera Cita", date: "Octubre 2020", delay: 0 },
                        { title: "La Pedida", date: "Diciembre 2023", delay: 0.2 }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: item.delay, ease: customEase }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: customEase }
                            }}
                            style={{
                                padding: '3.5rem 2.5rem',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: '2px',
                                overflow: 'hidden',
                                cursor: 'default'
                            }}
                        >
                            {/* Gradient border effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
                            }} />

                            {/* Decorative corner accent */}
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                width: '40px',
                                height: '40px',
                                border: '1px solid var(--color-secondary)',
                                borderLeft: 'none',
                                borderBottom: 'none',
                                opacity: 0.3
                            }} />

                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '0.75rem',
                                fontWeight: 400,
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-primary)'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--color-accent)',
                                fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                fontWeight: 600,
                                margin: 0
                            }}>
                                {item.date}
                            </p>

                            {/* Subtle glow on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.4 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-50%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '150%',
                                    height: '100%',
                                    background: 'radial-gradient(circle, rgba(210, 180, 140, 0.3), transparent 70%)',
                                    filter: 'blur(40px)',
                                    pointerEvents: 'none',
                                    zIndex: -1
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;

