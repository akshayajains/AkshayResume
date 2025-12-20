import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jakshaya@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "jakshaya@gmail.com",
    href: "mailto:jakshaya@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91-90040 82844",
    href: "tel:+919004082844"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jakshaya",
    href: "https://linkedin.com/in/jakshaya"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: null
  }];
  return <section id="contact" className="py-24 bg-gradient-hero" ref={sectionRef}>
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-muted-foreground">
            Let's <span className="text-gradient-accent">Connect</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Open to discussing opportunities in fintech and banking leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-muted-foreground">
          {/* Contact Info */}
          <div className="reveal space-y-6 text-secondary-foreground bg-muted-foreground">
            {contactInfo.map((item, index) => <a key={index} href={item.href || undefined} target={item.href?.startsWith("http") ? "_blank" : undefined} rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined} className={`flex items-center gap-4 p-5 rounded-2xl glass group transition-all duration-300 ${item.href ? "hover:scale-105 hover:shadow-glow cursor-pointer" : "cursor-default"}`}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors bg-blue-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-card-foreground">{item.label}</p>
                  <p className="text-lg font-medium text-secondary-foreground">{item.value}</p>
                </div>
              </a>)}
          </div>

          {/* Contact Form */}
          <div className="reveal bg-slate-50">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 shadow-none bg-popover-foreground">
              <div className="space-y-5">
                <div className="bg-popover-foreground">
                  <label htmlFor="name" className="block text-sm text-primary-foreground/80 mb-2 bg-slate-50">
                    Your Name
                  </label>
                  <input type="text" id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl bg-background/10 border border-border/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" required />
                </div>
                <div className="bg-slate-50">
                  <label htmlFor="email" className="block text-sm text-primary-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full px-4 py-3 rounded-xl bg-background/10 border border-border/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" required />
                </div>
                <div className="bg-destructive-foreground">
                  <label htmlFor="message" className="block text-sm text-primary-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={4} className="w-full px-4 py-3 rounded-xl bg-background/10 border border-border/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Your message..." required />
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:scale-105 hover:shadow-glow transition-all duration-300 animate-pulse-glow">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal text-center mt-20 pt-10 border-t border-border/20 text-secondary-foreground">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Akshay Jain. All rights reserved.
          </p>
        </div>
      </div>
    </section>;
};
export default ContactSection;