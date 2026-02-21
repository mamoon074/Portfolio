import { Laptop, Database, PenTool, Layout } from 'lucide-react';

export default function About() {
    const skills = [
        { name: 'Front-End & Mobile', icon: <Laptop size={28} />, desc: 'React, React Native, HTML5, CSS3, Bootstrap, Tailwind CSS' },
        { name: 'Back-End & Languages', icon: <Database size={28} />, desc: 'JavaScript, TypeScript, Groovy, RESTful APIs' },
        { name: 'CMS & Tools', icon: <Layout size={28} />, desc: 'WordPress, Git, GitHub, Bitbucket, SourceTree' },
        { name: 'Practices', icon: <PenTool size={28} />, desc: 'Agile Methodologies, Responsive Design, Optimization' },
    ];

    return (
        <section id="about" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title animate-fade-in-up">
                <span className="text-gradient">01.</span> About Me
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                <div className="animate-slide-in-left">
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        I am a versatile Full Stack Developer based in Islamabad, Pakistan, with a strong command of modern web and mobile technologies. Over the past two years, I've dedicated myself to translating complex requirements into high-quality, scalable code.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        I specialize in front-end development using React, React Native, JavaScript, and TypeScript, and have significant experience with back-end technologies including Groovy. My focus is on collaborating effectively in agile environments to drive project success and deliver exceptional user experiences.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Education:</strong> Bachelor of Science in Information Technology, Federal Urdu University of Arts, Science and Technology, Islamabad (2020 – 2024).
                    </p>
                </div>
                <div style={{ display: 'grid', gap: '2rem' }} className="animate-slide-in-right">
                    {skills.map((skill, i) => (
                        <div key={i} className="glass glass-hover" style={{ padding: '1.5rem 2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'center', animationDelay: `${i * 0.15}s` }}>
                            <div style={{ color: 'var(--accent-tertiary)', background: 'rgba(6, 182, 212, 0.1)', padding: '1.2rem', borderRadius: '50%', flexShrink: 0 }}>
                                {skill.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{skill.name}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
