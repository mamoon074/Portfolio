import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            // Check if we are at the very top (Hero section)
            if (window.scrollY < 200) {
                setActiveSection('');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkStyle = (section) => ({
        color: activeSection === section ? 'var(--accent-primary)' : 'inherit',
        borderBottom: activeSection === section ? '2px solid var(--accent-primary)' : '2px solid transparent',
        paddingBottom: '0.2rem',
        transition: 'all 0.3s ease'
    });

    return (
        <nav style={{
            position: 'fixed', width: '100%', top: 0, zIndex: 100, /* increased zIndex */
            background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    <span className="text-gradient">Mamoon.</span>
                </a>

                {/* Hamburger Icon for Mobile */}
                <div className="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer', zIndex: 101 }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Navigation Links */}
                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#about" style={getLinkStyle('about')} onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#experience" style={getLinkStyle('experience')} onClick={() => setIsOpen(false)}>Experience</a></li>
                        <li><a href="#contact" style={getLinkStyle('contact')} onClick={() => setIsOpen(false)}>Contact</a></li>
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
