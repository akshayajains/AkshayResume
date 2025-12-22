import { Building2, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
  const experiences = [{
    company: "EXL Services",
    role: "Senior AVP",
    location: "Pune",
    period: "Apr 2025 - Present",
    highlights: ["Driving strategic growth of $6M account portfolio with delivery excellence", "Leading 50+ member high-performing cross-functional team", "Improving productivity and quality by 20% through streamlined delivery governance", "Elevating CSAT through proactive engagement and innovation initiatives"]
  }, {
    company: "FIS Global",
    role: "Development Director",
    location: "Pune",
    period: "Aug 2023 - Dec 2024",
    highlights: ["Led 110-person team delivering IntelliMatch, PIM, Astec products generating $100M revenue", "Spearheaded DevOps transformation and Cloud integration for scalability", "Migrated legacy systems to cloud-native platforms, improving performance by 20%", "Achieved 15% cost efficiency through strategic initiatives and innovation"]
  }, {
    company: "Citi Bank",
    role: "Vice President",
    location: "Pune",
    period: "Aug 2022 - Jul 2023",
    highlights: ["Delivered BlueBox Margin Lending solution for wealth clients across regions", "Achieved $200k+ cost savings and 25% increase in processing speed", "Increased client retention by 15% through proactive communication", "Reduced operational risk and manual errors by 20% through robust governance"]
  }, {
    company: "Fiserv",
    role: "Engineering Manager",
    location: "Pune",
    period: "Jun 2017 - Aug 2022",
    highlights: ["Led Communicator Advantage development integrating 40,000+ entities", "Delivered CheckFree Payment and Refinitiv integration enhancing efficiency by 20%", "Implemented SAFe practices accelerating product release time by 20%", "Built DevOps capabilities with CI/CD pipelines using containerization"]
  }, {
    company: "NIUM Inc",
    role: "IT Head",
    location: "Mumbai",
    period: "Apr 2015 - May 2017",
    highlights: ["Global rollouts of Forex Remittance product in 8 months", "Scaled engineering team from 0 to 25 in 4 months", "Secured $1M in initial funding launching PayTonic payment solution", "Achieved 99.9% system uptime managing infrastructure and security"]
  }, {
    company: "TATA Consultancy Services",
    role: "Program Manager",
    location: "India, USA, UK, Caribbean",
    period: "Sep 2006 - Mar 2015",
    highlights: ["Led 140+ resources managing 80+ applications generating $20M in revenue", "Grew business from $5M to $20M through strategic client programs", "Ensured 100% compliance with Dodd-Frank, SEC, and FSA regulations", "Directed end-to-end technology solutions aligned with business strategies"]
  }];
  return <section id="experience" className="py-24 bg-background" ref={sectionRef}>
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-secondary-foreground">
            Professional <span className="text-gradient text-secondary-foreground">Experience</span>
          </h2>
          <p className="text-lg text-accent">A journey of leadership and impact</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1 reveal">
            <div className="sticky top-24 space-y-2">
              {experiences.map((exp, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${activeIndex === index ? "bg-primary text-primary-foreground shadow-glow" : "bg-card hover:bg-secondary border border-border"}`}>
                  <div className="flex items-center gap-3">
                    <Building2 className={`w-5 h-5 ${activeIndex === index ? "" : "text-primary "}`} />
                    <div>
                      <p className="font-semibold">{exp.company}</p>
                      <p className={`text-sm ${activeIndex === index ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </button>)}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2 reveal">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border min-h-[400px]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary-foreground">{experiences[activeIndex].role}</h3>
                  <p className="text-primary text-lg font-medium">{experiences[activeIndex].company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{experiences[activeIndex].period}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 flex items-center gap-2">
                📍 {experiences[activeIndex].location}
              </p>

              <ul className="space-y-4">
                {experiences[activeIndex].highlights.map((highlight, index) => <li key={index} className="flex items-start gap-3 opacity-0 animate-fade-up" style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards"
              }}>
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground/90">{highlight}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;
