import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Details = () => {
    const cardStyle = {
        padding: '3rem 2rem',
        backgroundColor: '#FFFFFF',
        textAlign: 'center' as const,
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center'
    };

    const iconSize = 32;
    const iconColor = "var(--color-accent)";

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="italic">The Details</h2>
                    <p style={{ marginBottom: '5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 5rem' }}>
                        Join us for an evening of love, laughter, and happily ever after.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    <motion.div
                        style={cardStyle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Calendar size={iconSize} color={iconColor} strokeWidth={1.5} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 400 }}>When</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>September 20, 2025</p>
                        <p style={{ color: 'var(--color-text)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Saturday @ 5:00 PM
                        </p>
                    </motion.div>

                    <motion.div
                        style={cardStyle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <MapPin size={iconSize} color={iconColor} strokeWidth={1.5} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 400 }}>Where</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>Finca El Olivar</p>
                        <p style={{ color: 'var(--color-text)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Carretera de Burgos, km 12<br />Madrid, Spain
                        </p>
                    </motion.div>

                    <motion.div
                        style={cardStyle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Clock size={iconSize} color={iconColor} strokeWidth={1.5} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 400 }}>Timeline</h3>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', lineHeight: 2 }}>
                            <li>5:00 PM - Ceremony</li>
                            <li>6:00 PM - Cocktail Hour</li>
                            <li>8:00 PM - Dinner & Dancing</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Details;
