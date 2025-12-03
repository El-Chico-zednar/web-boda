import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const RSVP = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        guests: '1',
        diet: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const { error } = await supabase
                .from('rsvps')
                .insert([
                    {
                        full_name: formData.fullName,
                        email: formData.email,
                        guests_count: parseInt(formData.guests),
                        dietary_restrictions: formData.diet
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setMessage('Thank you! Your RSVP has been received.');
            setFormData({ fullName: '', email: '', guests: '1', diet: '' });
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again later.');
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem 0',
        border: 'none',
        borderBottom: '1px solid var(--color-secondary)',
        backgroundColor: 'transparent',
        borderRadius: '0',
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 500,
        fontSize: '0.85rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.1em',
        color: 'var(--color-text)'
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="italic">RSVP</h2>
                    <p style={{
                        marginBottom: '4rem',
                        fontSize: '1.1rem',
                        color: 'var(--color-text)',
                        maxWidth: '600px',
                        margin: '0 auto 4rem'
                    }}>
                        Please let us know if you can make it by August 1, 2025.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        textAlign: 'left',
                        padding: '4rem',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
                    }}
                >
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{message}</h3>
                            <p>We can't wait to celebrate with you!</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="btn"
                                style={{ marginTop: '2rem' }}
                            >
                                Send another response
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={labelStyle}>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={labelStyle}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={labelStyle}>Number of Guests</label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    style={inputStyle}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <label style={labelStyle}>Dietary Restrictions</label>
                                <textarea
                                    name="diet"
                                    value={formData.diet}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                                    placeholder="Any allergies or special requests?"
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{message}</p>
                            )}

                            <button
                                type="submit"
                                className="btn"
                                style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1 }}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Confirm Attendance'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default RSVP;
