import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const RSVP = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        guests: '1',
        transport: 'autobus',
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
                        transportation: formData.transport,
                        dietary_restrictions: formData.diet
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setMessage('¡Gracias! Hemos recibido tu confirmación.');
            setFormData({ fullName: '', email: '', guests: '1', transport: 'autobus', diet: '' });
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            setStatus('error');
            setMessage('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
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
                    <h2 className="italic">Confirma tu asistencia</h2>
                    <p style={{
                        marginBottom: '4rem',
                        fontSize: '1.1rem',
                        color: 'var(--color-text)',
                        maxWidth: '600px',
                        margin: '0 auto 4rem'
                    }}>
                        Por favor, confírmanos tu asistencia antes del 1 de febrero de 2026.
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
                        padding: '2rem',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
                    }}
                >
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{message}</h3>
                            <p>¡Estamos deseando celebrarlo contigo!</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="btn"
                                style={{ marginTop: '2rem' }}
                            >
                                Enviar otra respuesta
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={labelStyle}>Nombre Completo</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    placeholder="Tu Nombre"
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
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={labelStyle}>Número de Invitados</label>
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

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={labelStyle}>¿Cómo acudirás a la finca?</label>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem',
                                    marginTop: '1rem'
                                }}>
                                    <label style={{
                                        padding: '1.5rem 1rem',
                                        border: `2px solid ${formData.transport === 'autobus' ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                                        backgroundColor: formData.transport === 'autobus' ? 'rgba(45, 45, 45, 0.03)' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.95rem',
                                        fontWeight: formData.transport === 'autobus' ? 600 : 400,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <input
                                            type="radio"
                                            name="transport"
                                            value="autobus"
                                            checked={formData.transport === 'autobus'}
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                        />
                                        {formData.transport === 'autobus' && (
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ flexShrink: 0 }}
                                            >
                                                <path
                                                    d="M13.5 4L6 11.5L2.5 8"
                                                    stroke="var(--color-primary)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                        Autobús
                                    </label>
                                    <label style={{
                                        padding: '1.5rem 1rem',
                                        border: `2px solid ${formData.transport === 'vehiculo_propio' ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                                        backgroundColor: formData.transport === 'vehiculo_propio' ? 'rgba(45, 45, 45, 0.03)' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.95rem',
                                        fontWeight: formData.transport === 'vehiculo_propio' ? 600 : 400,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <input
                                            type="radio"
                                            name="transport"
                                            value="vehiculo_propio"
                                            checked={formData.transport === 'vehiculo_propio'}
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                        />
                                        {formData.transport === 'vehiculo_propio' && (
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ flexShrink: 0 }}
                                            >
                                                <path
                                                    d="M13.5 4L6 11.5L2.5 8"
                                                    stroke="var(--color-primary)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                        Vehículo propio
                                    </label>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <label style={labelStyle}>Restricciones Alimentarias</label>
                                <textarea
                                    name="diet"
                                    value={formData.diet}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                                    placeholder="¿Alguna alergia o petición especial?"
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
                                {status === 'loading' ? 'Enviando...' : 'Confirmar Asistencia'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default RSVP;
