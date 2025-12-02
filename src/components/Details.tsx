import { MapPin, Clock, Calendar } from 'lucide-react';

const Details = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="text-center">
                    <h2 style={{ fontWeight: 600, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>The Details</h2>
                    <p style={{ marginBottom: '4rem', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
                        Join us for an evening of love, laughter, and happily ever after.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        padding: '2.5rem 2rem',
                        backgroundColor: 'var(--color-bg)',
                        textAlign: 'center',
                        border: '2px solid black'
                    }}>
                        <Calendar size={40} color="black" strokeWidth={2} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '1rem', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 600 }}>When</h3>
                        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '0.5rem' }}>Saturday, September 20, 2025</p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                            Ceremony starts at 5:00 PM
                        </p>
                    </div>

                    <div style={{
                        padding: '2.5rem 2rem',
                        backgroundColor: 'var(--color-bg)',
                        textAlign: 'center',
                        border: '2px solid black'
                    }}>
                        <MapPin size={40} color="black" strokeWidth={2} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '1rem', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 600 }}>Where</h3>
                        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '0.5rem' }}>Finca El Olivar</p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                            Carretera de Burgos, km 12<br />Madrid, Spain
                        </p>
                    </div>

                    <div style={{
                        padding: '2.5rem 2rem',
                        backgroundColor: 'var(--color-bg)',
                        textAlign: 'center',
                        border: '2px solid black'
                    }}>
                        <Clock size={40} color="black" strokeWidth={2} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ marginBottom: '1rem', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 600 }}>Timeline</h3>
                        <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>5:00 PM - Ceremony</p>
                        <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>6:00 PM - Cocktail Hour</p>
                        <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>8:00 PM - Dinner & Dancing</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
