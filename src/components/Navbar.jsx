import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

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

                {/* Hamburger Icon for Mobile */}
                <div className="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer', zIndex: 100 }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Navigation Links */}
                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                    <div className="nav-socials">
                        <a href="https://github.com/mamoon074" target="_blank" rel="noreferrer"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/muhammad-mamoon-3376002ba/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
