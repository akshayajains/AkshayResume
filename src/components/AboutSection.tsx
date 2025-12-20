import { Briefcase, Target, Lightbulb, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
  const domains = ["Payments", "Fintech", "Banking & Financial Services", "Private Banking", "Retail Banking", "Cross-border Remittance", "Corporate Banking", "Reconciliation", "Trade Finance", "Credit Rating"];
  const expertise = [{
    icon: Briefcase,
    title: "DevOps & Cloud",
    desc: "Microservices, Modernization, Cloud Transformation"
  }, {
    icon: Target,
    title: "Strategic Planning",
    desc: "Agile & SAFe Implementation, Data-driven decisions"
  }, {
    icon: Lightbulb,
    title: "Design Thinking",
    desc: "System Design, Enterprise Architecture"
  }, {
    icon: Rocket,
    title: "Startup Success",
    desc: "Scaled NIUM from inception to enterprise"
  }];
  return <section id="about" className="py-24 bg-background" ref={sectionRef}>
      <div className="container px-6 max-w-6xl mx-auto">
        {/* Summary */}
        <div className="reveal text-center mb-16 text-popover-foreground">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-secondary-foreground">
            Professional <span className="text-gradient text-secondary-foreground">Summary</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-secondary-foreground">
            22 years of experience in engineering leadership, technical program management, and strategic transformation. 
            Delivered large-scale, cross-functional programs in fintech and banking, aligning technology with business 
            goals to drive cost reductions, revenue growth, and operational efficiency.
          </p>
        </div>

        {/* Domain Expertise */}
        <div className="reveal mb-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">Domain Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((domain, index) => <span key={index} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                {domain}
              </span>)}
          </div>
        </div>

        {/* Core Expertise */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => <div key={index} className="reveal p-6 rounded-2xl bg-card shadow-soft border border-border hover:shadow-glow hover:-translate-y-2 transition-all duration-300 group" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-secondary-foreground">{item.title}</h4>
              <p className="text-sm text-secondary-foreground">{item.desc}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;