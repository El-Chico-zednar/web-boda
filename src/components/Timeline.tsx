import { motion } from 'framer-motion';

const Timeline = () => {
    const customEase = [0.25, 0.46, 0.45, 0.94] as const;

    const timelineItems = [
        {
            time: "12:30",
            title: "Recepción de invitados",
            description: "Plaza de La Seo",
            icon: "🤝",
            showTime: true
        },
        {
            time: "13:00",
            title: "Ceremonia",
            description: "La Seo - Catedral del Salvador",
            icon: "💒",
            showTime: true
        },
        {
            time: "14:30",
            title: "Cóctel de Bienvenida",
            description: "Finca Jardines del Monasterio",
            icon: "🥂",
            showTime: false,
            link: "https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=es&sa=X&geocode=KblmQK-3QVkNMXyEb5aNMbj7&daddr=C.+los+Olivares,+2,+50420+Cadrete,+Zaragoza"
        },
        {
            time: "16:00",
            title: "Banquete",
            description: "Salón principal",
            icon: "🍽️",
            showTime: false
        },
        {
            time: "18:30",
            title: "Baile y Celebración",
            description: "¡A bailar!",
            icon: "💃",
            showTime: false
        },
        {
            time: "02:00",
            title: "Servicio de taxis",
            description: "Disponible para todos los invitados",
            icon: "🚕",
            showTime: false
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
                        color: 'var(--color-text)',
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
                    <div
                        className="timeline-vertical-line"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'linear-gradient(180deg, transparent, var(--color-accent), transparent)',
                            transform: 'translateX(-50%)',
                            opacity: 0.3
                        }}
                    />

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
                                gap: '4rem',
                                marginBottom: index === timelineItems.length - 1 ? '0' : '4rem',
                                alignItems: 'center'
                            }}
                            className="timeline-item"
                        >
                            {/* Left side (card or empty) */}
                            {index % 2 === 0 ? (
                                <motion.div

                                    style={{
                                        padding: '1rem 2rem',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                        position: 'relative',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        textAlign: 'right'
                                    }}
                                    className="timeline-card"
                                >


                                    {/* Icon */}
                                    <div style={{
                                        fontSize: '2rem',
                                        marginBottom: '0.2rem',
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
                                        margin: 0,
                                        marginBottom: item.link ? '1rem' : 0
                                    }}>
                                        {item.description}
                                    </p>

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                color: 'var(--color-primary)',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                fontWeight: 500,
                                                transition: 'all 0.3s ease',
                                                fontFamily: 'var(--font-body)',
                                                marginTop: '0rem'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = '#8B6914';
                                                const arrow = e.currentTarget.querySelector('.arrow');
                                                if (arrow) (arrow as HTMLElement).style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--color-primary)';
                                                const arrow = e.currentTarget.querySelector('.arrow');
                                                if (arrow) (arrow as HTMLElement).style.transform = 'translateX(0)';
                                            }}
                                        >
                                            Cómo llegar
                                            <span
                                                className="arrow"
                                                style={{
                                                    transition: 'transform 0.3s ease',
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    )}

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
                                <div className="timeline-spacer" />
                            )}

                            {/* Center (time circle) */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: customEase }}
                                style={{
                                    width: item.showTime ? '85px' : '40px',
                                    height: item.showTime ? '85px' : '40px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: '0 2px 24px rgba(0,0,0,0.1)',
                                    flexShrink: 0
                                }}
                                className={`timeline-circle ${!item.showTime ? 'timeline-circle-small' : ''}`}
                            >
                                {item.showTime && (
                                    <span style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        color: 'var(--color-primary)',
                                        fontFamily: 'var(--font-body)',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {item.time}
                                    </span>
                                )}
                            </motion.div>

                            {/* Right side (card or empty) */}
                            {index % 2 !== 0 ? (
                                <motion.div

                                    style={{
                                        padding: '1rem 2rem',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                        position: 'relative',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        textAlign: 'left'
                                    }}
                                    className="timeline-card"
                                >


                                    {/* Icon */}
                                    <div style={{
                                        fontSize: '2rem',
                                        marginBottom: '0.2rem',
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
                                        margin: 0,
                                        marginBottom: item.link ? '1rem' : 0
                                    }}>
                                        {item.description}
                                    </p>

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0rem',
                                                color: 'var(--color-primary)',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                fontWeight: 500,
                                                transition: 'all 0.3s ease',
                                                fontFamily: 'var(--font-body)',
                                                marginTop: '0rem'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = '#8B6914';
                                                const arrow = e.currentTarget.querySelector('.arrow');
                                                if (arrow) (arrow as HTMLElement).style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--color-primary)';
                                                const arrow = e.currentTarget.querySelector('.arrow');
                                                if (arrow) (arrow as HTMLElement).style.transform = 'translateX(0)';
                                            }}
                                        >
                                            Cómo llegar
                                            <span
                                                className="arrow"
                                                style={{
                                                    transition: 'transform 0.3s ease',
                                                    display: 'inline-flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    )}

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
                                <div className="timeline-spacer" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CSS for mobile responsive */}
                <style>{`
                    @media (max-width: 768px) {
                        .timeline-vertical-line {
                            left: 35px !important;
                            transform: none !important;
                        }
                        
                        .timeline-item {
                            grid-template-columns: auto 1fr !important;
                            gap: 1rem !important;
                        }
                        
                        .timeline-spacer {
                            display: none !important;
                        }
                        
                        .timeline-circle {
                            width: 70px !important;
                            height: 70px !important;
                            order: 1;
                        }

                        .timeline-circle-small {
                            width: 30px !important;
                            height: 30px !important;
                            margin-left: 20px !important;
                            margin-right: 20px !important;
                        }
                        
                        .timeline-circle span {
                            font-size: 0.9rem !important;
                        }
                        
                        .timeline-card {
                            order: 2;
                            text-align: left !important;
                            padding: 1.5rem 1.25rem !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Timeline;
