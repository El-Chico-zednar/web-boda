import { motion } from 'framer-motion';

const Timeline = () => {
    const customEase = [0.25, 0.46, 0.45, 0.94] as const;

    const timelineItems = [
        {
            time: "13:00",
            title: "Ceremonia",
            description: "La Seo - Catedral del Salvador",
            icon: "💒"
        },
        {
            time: "14:30",
            title: "Cóctel de Bienvenida",
            description: "Finca La Casona de Las Fraguas",
            icon: "🥂"
        },
        {
            time: "16:00",
            title: "Banquete",
            description: "Salón principal",
            icon: "🍽️"
        },
        {
            time: "18:30",
            title: "Baile y Celebración",
            description: "¡A bailar hasta el amanecer!",
            icon: "💃"
        }
    ];

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
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(210, 180, 140, 0.08), transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: customEase }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 className="italic" style={{
                        background: 'linear-gradient(135deg, var(--color-primary), #c4a574)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '2rem'
                    }}>
                        Cronograma del Día
                    </h2>
                    <p style={{
                        maxWidth: '650px',
                        margin: '0 auto',
                        fontSize: '1.15rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.9,
                        opacity: 0.9
                    }}>
                        Un día lleno de momentos especiales que queremos compartir contigo
                    </p>
                </motion.div>

                {/* Timeline container */}
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(180deg, transparent, var(--color-accent), transparent)',
                        transform: 'translateX(-50%)',
                        opacity: 0.3
                    }} />

                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: customEase }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1fr auto 1fr' : '1fr auto 1fr',
                                gap: '2rem',
                                marginBottom: index === timelineItems.length - 1 ? '0' : '4rem',
                                alignItems: 'center'
                            }}
                        >
                            {/* Left side (card or empty) */}
                            {index % 2 === 0 ? (
                                <motion.div
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3, ease: customEase }
                                    }}
                                    style={{
                                        padding: '2.5rem 2rem',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                        position: 'relative',
                                        borderRadius: '2px',
                                        overflow: 'hidden',
                                        textAlign: 'right'
                                    }}
                                >
                                    {/* Gradient border */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
                                    }} />

                                    {/* Icon */}
                                    <div style={{
                                        fontSize: '2.5rem',
                                        marginBottom: '1rem',
                                        filter: 'grayscale(0.3)'
                                    }}>
                                        {item.icon}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-primary)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--color-text)',
                                        opacity: 0.8,
                                        lineHeight: 1.6,
                                        margin: 0
                                    }}>
                                        {item.description}
                                    </p>

                                    {/* Glow effect */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 0.4 }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: '-50%',
                                            right: '50%',
                                            transform: 'translateX(50%)',
                                            width: '150%',
                                            height: '100%',
                                            background: 'radial-gradient(circle, rgba(210, 180, 140, 0.3), transparent 70%)',
                                            filter: 'blur(40px)',
                                            pointerEvents: 'none',
                                            zIndex: -1
                                        }}
                                    />
                                </motion.div>
                            ) : (
                                <div />
                            )}

                            {/* Center (time circle) */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: customEase }}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFFFFF',
                                    border: '3px solid var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }}
                            >
                                <span style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: 'var(--color-primary)',
                                    fontFamily: 'var(--font-body)',
                                    letterSpacing: '0.05em'
                                }}>
                                    {item.time}
                                </span>
                            </motion.div>

                            {/* Right side (card or empty) */}
                            {index % 2 !== 0 ? (
                                <motion.div
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3, ease: customEase }
                                    }}
                                    style={{
                                        padding: '2.5rem 2rem',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                        position: 'relative',
                                        borderRadius: '2px',
                                        overflow: 'hidden',
                                        textAlign: 'left'
                                    }}
                                >
                                    {/* Gradient border */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
                                    }} />

                                    {/* Icon */}
                                    <div style={{
                                        fontSize: '2.5rem',
                                        marginBottom: '1rem',
                                        filter: 'grayscale(0.3)'
                                    }}>
                                        {item.icon}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: 400,
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-primary)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--color-text)',
                                        opacity: 0.8,
                                        lineHeight: 1.6,
                                        margin: 0
                                    }}>
                                        {item.description}
                                    </p>

                                    {/* Glow effect */}
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
                            ) : (
                                <div />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
