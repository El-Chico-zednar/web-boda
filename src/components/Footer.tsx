const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            borderTop: '1px solid var(--color-secondary)',
            fontSize: '0.9rem'
        }}>
            <p style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontStyle: 'italic' }}>
                Hecho con amor para Paula & Jorge
            </p>
            <p style={{ opacity: 0.6, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                &copy; 2025 Web de Boda
            </p>
        </footer>
    );
};

export default Footer;
