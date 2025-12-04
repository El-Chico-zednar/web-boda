
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring physics for smoother animations
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Multi-layer parallax with different speeds for depth
    // Sky background - slowest (far)
    const skyY = useTransform(smoothProgress, [0, 1], ['0%', '-10%']);
    const skyOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.9]);

    // Cathedral photo - only Y movement (no scale)
    const cathedralY = useTransform(smoothProgress, [0, 1], ['0%', '-5%']);

    // Text - fastest (foreground)
    const textY = useTransform(smoothProgress, [0, 0.3, 0.7, 1], ['0%', '5%', '5%', '-60%']);
    const textScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.05, 1.05, 0.9]);





    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        setPrefersReducedMotion(mediaQuery.matches);
    }, []);

    // Custom easing for organic feel
    const customEase = [0.25, 0.46, 0.45, 0.94] as const; // easeOutQuad - smooth deceleration

    return (
        <div
            ref={containerRef}
            style={{
                height: '300vh',
                position: 'relative'
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Layer 1: Sky Background (slowest parallax) */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '120vh',
                        y: prefersReducedMotion ? 0 : skyY,
                        opacity: skyOpacity,
                        zIndex: 0,
                        willChange: 'transform'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(/sky-background.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </motion.div>

                {/* Layer 2: Frame with Cathedral Photo parallax inside */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90vw',
                        maxWidth: '1200px',
                        height: '90vh',
                        zIndex: 1,
                        border: '2px solid #4F3100',
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    <motion.div
                        style={{
                            width: '100%',
                            height: '120%',
                            y: prefersReducedMotion ? 0 : cathedralY,
                            willChange: 'transform'
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'url(/la-seo-photo.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                filter: 'brightness(0.9) contrast(1.15) saturate(1.1)',
                                willChange: 'filter'
                            }}
                        />
                    </motion.div>
                </motion.div>





                {/* Additional gradient overlay for depth */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)',
                        pointerEvents: 'none'
                    }}
                />

                {/* Layer 3: Text Content (fastest parallax) */}
                <motion.div
                    style={{
                        position: 'relative',
                        zIndex: 3,
                        y: prefersReducedMotion ? 0 : textY,
                        scale: prefersReducedMotion ? 1 : textScale,
                        opacity: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingLeft: 'max(5vw, 80px)',
                        width: '100%',
                        height: '100%',
                        willChange: 'transform, opacity'
                    }}
                >
                    {/* LA SEO Text Image with Enhanced Effects */}
                    <motion.div
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 1, scale: 0.5, rotateX: -10 }}
                        whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 0.6, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: customEase }}
                        style={{
                            position: 'relative',
                            perspective: '1200px',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <motion.img
                            src="/la-seo-text.png"
                            alt="La Seo"
                            style={{
                                width: 'clamp(200px, 35vw, 450px)',
                                height: 'auto',
                                opacity: 0.98,
                                willChange: 'transform'
                            }}
                        />

                    </motion.div>


                </motion.div>

                {/* Enhanced Animated Particles with stagger */}
                {!prefersReducedMotion && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 2 }}>
                        {[...Array(30)].map((_, i) => {
                            const size = Math.random() * 3 + 1;
                            const isGolden = Math.random() > 0.7;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{
                                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                                        opacity: 0,
                                        scale: 0
                                    }}
                                    animate={{
                                        y: [
                                            null,
                                            Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) * 0.5,
                                            Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
                                        ],
                                        x: [
                                            null,
                                            `+=${Math.random() * 100 - 50}`
                                        ],
                                        opacity: [0, isGolden ? 0.8 : 0.5, 0],
                                        scale: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: Math.random() * 15 + 12,
                                        repeat: Infinity,
                                        delay: Math.random() * 8,
                                        ease: customEase
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: size + 'px',
                                        height: size + 'px',
                                        background: isGolden
                                            ? 'radial-gradient(circle, rgba(255,215,0,1), rgba(255,140,0,0.8))'
                                            : 'white',
                                        borderRadius: '50%',
                                        filter: `blur(${size * 0.5}px)`,
                                        boxShadow: isGolden
                                            ? '0 0 10px rgba(255,215,0,0.8)'
                                            : '0 0 5px rgba(255,255,255,0.5)'
                                    }}
                                />
                            );
                        })}
                    </div>
                )}

                {/* CSS Animations */}
                <style>{`
                    @keyframes pulseGlow {
                        0%, 100% {
                            opacity: 0.3;
                            transform: translate(-50%, -50%) scale(1);
                        }
                        50% {
                            opacity: 0.7;
                            transform: translate(-50%, -50%) scale(1.15);
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        * {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            transition-duration: 0.01ms !important;
                        }
                    }

                    /* GPU acceleration hint */
                    .hero, .parallax-layer {
                        transform: translateZ(0);
                        backface-visibility: hidden;
                        perspective: 1000px;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default ParallaxSection;

