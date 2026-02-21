import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            role: 'Full Stack Developer (Web)',
            company: 'Aiztek Technologies',
            location: 'Islamabad, Pakistan',
            period: '2024 – Present',
            desc: 'Currently contributing to the development of the "Console" web application, utilizing React for the front-end and Groovy for the back-end.',
            bullets: [
                'Engineered a comprehensive proposal management system from the ground up, enabling users to create, track, and manage business proposals efficiently.',
                'Developed a robust task management module to allow users to assign, monitor, and complete tasks, significantly improving team productivity and workflow transparency.',
                'Implemented a streamlined ticket management system for handling user support requests and internal issues, reducing resolution times.',
                'Designed and integrated intuitive navigation systems and a bookmarking feature to enhance application usability and user workflow.',
                'Spearheaded the integration of a dynamic calendar feature and successfully configured multiple third-party APIs, expanding application functionality and interoperability.'
            ]
        },
        {
            role: 'Mobile Application Developer',
            company: 'Aiztek Technologies',
            location: 'Islamabad, Pakistan',
            period: '2024 – Present',
            desc: 'Created a cross-platform mobile application utilizing React Native, extending the core functionalities of the Console application to mobile users.',
            bullets: [
                'Lead Management System: Engineered a comprehensive module to track and manage potential sales leads.',
                'Opportunity Module: Implemented a robust opportunity management system to oversee sales pipelines.',
                'Customer & Product Management: Built a centralized system for easy access to customer information and product catalogs.',
                'Location Category Module: Designed and integrated a location-based module to organize and filter data by geographical areas.'
            ]
        },
        {
            role: 'Front-End Developer',
            company: 'ARFA TECH',
            location: 'Rawalpindi, Pakistan',
            period: '2023 – 2024',
            desc: 'Contributed to front-end development with a primary focus on building and maintaining responsive, high-performance React-based applications.',
            bullets: [
                'Developed and launched over 10 modern, user-centric applications using React, leading to a quantifiable 15% improvement in user experience metrics.',
                'Proactively identified and resolved performance bottlenecks across multiple websites, ensuring optimal speed, reliability, and a seamless user journey.',
                'Collaborated closely with the content and UX teams to implement SEO best practices and web accessibility standards, successfully increasing organic site traffic by 20%.'
            ]
        }
    ];

    return (
        <section id="experience" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title animate-fade-in-up">
                <span className="text-gradient">02.</span> Professional Experience
            </h2>
            <div style={{ display: 'grid', gap: '4rem', maxWidth: '850px', margin: '0 auto' }}>
                {experiences.map((exp, i) => (
                    <div key={i} className={`glass glass-hover animate-scale-up stagger-${i + 1}`} style={{
                        padding: '3rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', position: 'relative'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem', fontWeight: 800 }}>{exp.role}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-tertiary)', fontSize: '1.2rem', fontWeight: 600 }}>
                                    <Briefcase size={20} />
                                    <span>{exp.company}</span>
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>{exp.location}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))', padding: '0.6rem 1.2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.95rem', fontWeight: 600 }}>
                                <Calendar size={18} />
                                <span>{exp.period}</span>
                            </div>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>{exp.desc}</p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                            {exp.bullets.map((bullet, j) => (
                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', lineHeight: 1.6 }}>
                                    <span style={{ color: 'var(--accent-secondary)', marginTop: '0.3rem', fontSize: '1.2rem' }}>▹</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
