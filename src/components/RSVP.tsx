const RSVP = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container text-center">
                <h2 style={{ fontWeight: 600, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>RSVP</h2>
                <p style={{
                    marginBottom: '2rem',
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                    color: 'var(--color-text)'
                }}>
                    Please let us know if you can make it by August 1, 2025.
                </p>

                <form style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    textAlign: 'left',
                    padding: '2rem',
                    backgroundColor: 'white',
                    border: '2px solid black'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: 500,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>Full Name</label>
                        <input
                            type="text"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '2px solid black',
                                borderRadius: '0',
                                fontFamily: 'var(--font-body)',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                            }}
                            placeholder="Your Name"
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: 500,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>Email</label>
                        <input
                            type="email"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '2px solid black',
                                borderRadius: '0',
                                fontFamily: 'var(--font-body)',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                            }}
                            placeholder="your@email.com"
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: 500,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>Number of Guests</label>
                        <select style={{
                            width: '100%',
                            padding: '0.8rem',
                            border: '2px solid black',
                            borderRadius: '0',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontWeight: 500,
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>Dietary Restrictions</label>
                        <textarea
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '2px solid black',
                                borderRadius: '0',
                                minHeight: '100px',
                                fontFamily: 'var(--font-body)',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                resize: 'vertical'
                            }}
                            placeholder="Any allergies or special requests?"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%' }}>
                        Send RSVP
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RSVP;
