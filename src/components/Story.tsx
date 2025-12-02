const Story = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container text-center">
                <h2 style={{ fontWeight: 600, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Our Story</h2>
                <p style={{
                    maxWidth: '700px',
                    margin: '0 auto 3rem',
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                    color: 'var(--color-text)',
                    lineHeight: 1.8
                }}>
                    It all started with a coffee in downtown Madrid. Five years, countless adventures, and a million memories later, we are ready to start our next chapter together.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        padding: '2rem',
                        border: '2px solid black',
                        backgroundColor: 'white'
                    }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="25" r="8" stroke="black" strokeWidth="2" />
                                <path d="M15 50C15 40 20 35 30 35C40 35 45 40 45 50" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                            marginBottom: '0.5rem',
                            fontWeight: 600
                        }}>First Date</h3>
                        <p style={{
                            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                            color: 'var(--color-text-light)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 500
                        }}>October 2020</p>
                    </div>

                    <div style={{
                        padding: '2rem',
                        border: '2px solid black',
                        backgroundColor: 'white',
                        marginTop: '2rem'
                    }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="20" stroke="black" strokeWidth="2" />
                                <circle cx="30" cy="30" r="3" fill="black" />
                            </svg>
                        </div>
                        <h3 style={{
                            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                            marginBottom: '0.5rem',
                            fontWeight: 600
                        }}>The Proposal</h3>
                        <p style={{
                            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                            color: 'var(--color-text-light)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 500
                        }}>December 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
