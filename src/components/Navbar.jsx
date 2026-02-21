import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed', width: '100%', top: 0, zIndex: 50,
            background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    <span className="text-gradient">Mamoon.</span>
                </a>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: 600 }}>
                        <li><a href="#about" style={{ WebkitTransition: 'color 0.3s ease' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>About</a></li>
                        <li><a href="#experience" style={{ WebkitTransition: 'color 0.3s ease' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Experience</a></li>
                        <li><a href="#contact" style={{ WebkitTransition: 'color 0.3s ease' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Contact</a></li>
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem' }}>
                        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/muhammad-mamoon-3376002ba/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
