import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            paddingTop: '80px', position: 'relative', overflow: 'hidden'
        }}>

            {/* Background glow effects - Animated float */}
            <div className="bg-gradient-mesh" style={{
                top: '10%', left: '-10%', width: '600px', height: '600px',
                background: 'var(--accent-primary)',
                animationDelay: '0s'
            }}></div>
            <div className="bg-gradient-mesh" style={{
                bottom: '10%', right: '-10%', width: '500px', height: '500px',
                background: 'var(--accent-secondary)',
                animationDelay: '2s'
            }}></div>

            <div className="container animate-slide-in-left" style={{ zIndex: 1 }}>
                <h4 style={{ color: 'var(--accent-tertiary)', marginBottom: '1rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Hi, my name is</h4>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
                    Muhammad Mamoon.
                </h1>
                <h1 className="stagger-1 animate-slide-in-left" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--text-secondary)' }}>
                    I build <span className="text-gradient">web & mobile experiences</span>.
                </h1>
                <p className="stagger-2 animate-slide-in-left" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '650px', lineHeight: 1.8 }}>
                    I'm a versatile and results-driven Full Stack Developer with two years of hands-on experience in building, optimizing, and maintaining user-centric web and mobile applications, specializing in React, React Native, JavaScript, TypeScript, and Groovy.
                </p>
                <div className="stagger-3 animate-slide-in-left" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="#experience" className="btn btn-primary">
                        Check out my experience <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
