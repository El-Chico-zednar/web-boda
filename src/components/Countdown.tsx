import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const weddingDate = new Date('2026-02-21T13:00:00');
        const now = new Date();
        const difference = weddingDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Días', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds }
    ];

    return (
        <section className="section" style={{
            backgroundColor: 'var(--color-bg)',
            padding: '4rem 0 2rem',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem'
                    }}
                >
                    <h2 className="italic" style={{
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem'
                    }}>
                        Quedan...
                    </h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0rem',
                        flexWrap: 'wrap'
                    }}>
                        {timeUnits.map((unit, index) => (
                            <div key={index} style={{ textAlign: 'center', minWidth: '80px' }}>
                                <div style={{
                                    fontSize: '2.8rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-primary)',
                                    lineHeight: 1,
                                    marginBottom: '0.5rem'
                                }}>
                                    {String(unit.value).padStart(2, '0')}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    color: 'var(--color-text)',
                                    opacity: 0.7
                                }}>
                                    {unit.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
