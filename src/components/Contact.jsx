import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(event.target);

        // Web3Forms Access Key - You need to replace this string with your own key from https://web3forms.com/
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                event.target.reset();
            } else {
                console.error("Error", data);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Submission failed", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="container" style={{ padding: '8rem 0' }}>
            <h2 className="section-title animate-fade-in-up">
                <span className="text-gradient">03.</span> Get In Touch
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
                <div className="animate-slide-in-left">
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Let's talk about your next project.</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: 1.7 }}>
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass glass-hover" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '16px' }}>
                            <div style={{ color: 'var(--accent-primary)', background: 'rgba(139, 92, 246, 0.1)', padding: '1.2rem', borderRadius: '50%' }}>
                                <Mail size={28} />
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Email</p>
                                <a href="mailto:Mamoon074@gmail.com" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Mamoon074@gmail.com</a>
                            </div>
                        </div>
                        <div className="glass glass-hover" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '16px' }}>
                            <div style={{ color: 'var(--accent-tertiary)', background: 'rgba(6, 182, 212, 0.1)', padding: '1.2rem', borderRadius: '50%' }}>
                                <Phone size={28} />
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Phone</p>
                                <a href="tel:+923485979944" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>+92 348 5979944</a>
                            </div>
                        </div>
                        <div className="glass glass-hover" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '16px' }}>
                            <div style={{ color: 'var(--accent-secondary)', background: 'rgba(236, 72, 153, 0.1)', padding: '1.2rem', borderRadius: '50%' }}>
                                <MapPin size={28} />
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>Location</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Islamabad, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="glass animate-slide-in-right stagger-2" style={{ padding: '3rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={onSubmit}>

                    {submitStatus === 'success' && (
                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '10px', color: '#10b981', textAlign: 'center' }}>
                            Message sent successfully! I will get back to you soon.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '10px', color: '#ef4444', textAlign: 'center' }}>
                            Something went wrong. Please try emailing me directly.
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="name" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Name</label>
                        <input type="text" id="name" name="name" required style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.3s' }} placeholder="Your Name" onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="email" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Email</label>
                        <input type="email" id="email" name="email" required style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'white', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.3s' }} placeholder="you@example.com" onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Message</label>
                        <textarea id="message" name="message" required rows="5" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'white', fontFamily: 'inherit', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s' }} placeholder="Let's build something..." onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ marginTop: '1.5rem', padding: '1.2rem', width: '100%', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}
