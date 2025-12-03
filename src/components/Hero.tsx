import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" style={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text)'
    }}>
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            color: 'var(--color-accent)'
          }}
        >
          Save The Date
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            lineHeight: 0.9,
            marginBottom: '1rem',
            color: 'var(--color-primary)'
          }}
        >
          <span className="italic">Jorge</span> <br />
          <span style={{ fontSize: '0.5em', verticalAlign: 'middle', opacity: 0.6 }}>&</span> <br />
          <span className="italic">Paula</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <p style={{
            fontSize: '1.5rem',
            fontFamily: 'var(--font-heading)',
            margin: 0
          }}>
            21 . 02 . 2026
          </p>
          <p style={{
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            margin: 0
          }}>
            Zaragoza
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
