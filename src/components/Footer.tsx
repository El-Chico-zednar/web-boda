const Footer = () => {
    return (
        <footer style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            backgroundColor: 'white',
            color: 'var(--color-text)',
            borderTop: '2px solid black',
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
        }}>
            <p style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
                Made with love for Ana & Carlos
            </p>
            <p>&copy; 2025 Wedding Website</p>
        </footer>
    );
};

export default Footer;
