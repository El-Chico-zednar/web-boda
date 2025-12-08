const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            backgroundColor: '#262626',
            color: '#EFE2D9',
            borderTop: '1px solid #262626',
            fontSize: '0.9rem'
        }}>
            <p style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                Hecho con
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                por Paula y Jorge
            </p>

        </footer>
    );
};

export default Footer;
