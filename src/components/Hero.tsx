import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" style={{
      height: '90vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text)'
    }}>
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: '-14vh' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            marginBottom: '1.5rem',
            color: 'var(--color-accent)'
          }}
        >
          ¡NOS CASAMOS!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: 'clamp(5.5rem, 12vw, 8rem)',
            lineHeight: 0.8,
            marginBottom: '1rem',
            color: 'var(--color-primary)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-names)', display: 'block', marginTop: '4rem', marginBottom: '0rem', lineHeight: 0.5 }}>Paula</span>
          <span style={{ fontFamily: 'var(--font-names)', fontSize: '0.5em', verticalAlign: 'middle', opacity: 0.6, display: 'block', margin: '0.5rem 0' }}>y</span>
          <span style={{ fontFamily: 'var(--font-names)', display: 'block', marginTop: '4rem', marginBottom: '4rem', lineHeight: 0.5 }}>Jorge</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            marginTop: '0rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.1rem'
          }}
        >
          <p style={{
            fontSize: 'clamp(1.1rem, 3.5vw, 1.2rem)',
            fontFamily: 'var(--font-heading)',
            margin: 0
          }}>
            21 . 02 . 2026
          </p>
          <p style={{
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            margin: 0
          }}>
            13:00h - Catedral de La Seo - Zaragoza
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.8rem',
          zIndex: 2,
          cursor: 'pointer',
          padding: '1rem'
        }}
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {/* Animated Circle */}
        <div style={{
          height: '32px',
          width: '2px', // Invisible track
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}>
          <motion.div
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-text)',
            }}
            animate={{
              y: [0, -24],
              opacity: [0, 1, 0], // Fade in, then out
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.2, 0.65, 0.3, 0.9], // Custom elegant easing
              times: [0, 0.5, 1]
            }}
          />
        </div>

        <span style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          color: 'var(--color-text)',
          opacity: 0.7,
          fontWeight: 300
        }}>
          Deslizar
        </span>
      </motion.div>

    </section>
  );
};

export default Hero;
