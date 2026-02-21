import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', textAlign: 'center', marginTop: '4rem', background: 'rgba(0,0,0,0.2)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    <span className="text-gradient">Mamoon.</span>
                </a>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/muhammad-mamoon-3376002ba/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}><Linkedin size={20} /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}><Twitter size={20} /></a>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Muhammad Mamoon. Built with React.
                </p>
            </div>
        </footer>
    );
}
