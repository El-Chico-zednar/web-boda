import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="italic">Our Story</h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto 4rem',
                        fontSize: '1.1rem',
                        color: 'var(--color-text)',
                        lineHeight: 1.8
                    }}>
                        It all started with a coffee in downtown Madrid. Five years, countless adventures, and a million memories later, we are ready to start our next chapter together.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Central Line (Visual only for desktop) */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: '50%',
                        width: '1px',
                        backgroundColor: 'var(--color-secondary)',
                        transform: 'translateX(-50%)',
                        display: 'none', // Hidden on mobile for now, can be enabled with media query
                    }} className="desktop-only-line"></div>

                    {[
                        { title: "First Date", date: "October 2020", icon: "date" },
                        { title: "The Proposal", date: "December 2023", icon: "ring" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            style={{
                                padding: '3rem 2rem',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)', // Soft shadow instead of border
                                border: '1px solid var(--color-secondary)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.8rem',
                                marginBottom: '0.5rem',
                                fontWeight: 400
                            }}>{item.title}</h3>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--color-accent)',
                                fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: 500
                            }}>{item.date}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;
