import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-text)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div className="container">
        {/* Decorative illustration placeholder */}
        <div style={{ marginBottom: '2rem' }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 100C60 100 20 80 20 50C20 35 30 25 40 25C50 25 60 35 60 35C60 35 70 25 80 25C90 25 100 35 100 50C100 80 60 100 60 100Z"
              stroke="black" strokeWidth="2" fill="none" />
            <circle cx="35" cy="45" r="3" fill="black" />
            <circle cx="85" cy="45" r="3" fill="black" />
          </svg>
        </div>

        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          marginBottom: '1rem',
          fontWeight: 700,
          lineHeight: 1.1
        }}>
          SAVE<br />THE<br />DATE
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          margin: '2rem 0',
          flexWrap: 'wrap'
        }}>
          <span style={{ borderTop: '2px solid black', width: '50px' }}></span>
          <Heart size={24} fill="black" stroke="black" />
          <span style={{ borderTop: '2px solid black', width: '50px' }}></span>
        </div>

        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          fontFamily: 'var(--font-body)',
          marginBottom: '0.5rem',
          fontWeight: 400
        }}>
          Ana Neel and Carlos Frank
        </p>
        <p style={{
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
          fontFamily: 'var(--font-body)',
          marginBottom: '0.5rem'
        }}>
          are getting married in Madrid
        </p>

        <p style={{
          fontSize: 'clamp(1.2rem, 4vw, 2rem)',
          fontFamily: 'var(--font-heading)',
          margin: '2rem 0',
          fontWeight: 600
        }}>
          20.09.2025
        </p>

        <p style={{
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic'
        }}>
          Invitation to follow
        </p>
      </div>
    </section>
  );
};

export default Hero;
