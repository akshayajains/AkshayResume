import { GraduationCap, Award, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
const EducationSection = () => {
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
  const education = [{
    degree: "MBA in Finance",
    institution: "Symbiosis Institute",
    location: "Pune",
    period: "Aug 2005 - Aug 2007"
  }, {
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    institution: "MIT",
    location: "Mandsaur",
    period: "Aug 1996 - Aug 2000"
  }];
  const certifications = ["Project Management Professional (PMP)", "SAFe 6.0 Agilist", "MS Azure Fundamental (AZ900)", "AWS Cloud Practitioner", "International Payment Professional (CIPSP)", "ITIL Certified", "Certified Scrum Master (CSM)"];
  const patent = {
    title: "Adaptive Machine Technique using AI",
    number: "AU2021102273A4"
  };
  return <section id="education" className="py-24 bg-background" ref={sectionRef}>
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => <div key={index} className="p-5 rounded-xl bg-card border border-border shadow-soft hover:shadow-glow transition-all duration-300">
                  <p className="font-semibold text-lg text-card-foreground">{edu.degree}</p>
                  {edu.field && <p className="text-primary text-sm">{edu.field}</p>}
                  <p className="text-muted-foreground mt-2">{edu.institution}, {edu.location}</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">{edu.period}</p>
                </div>)}
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-foreground">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {certifications.map((cert, index) => <div key={index} className="p-4 rounded-xl bg-card border border-border shadow-soft flex items-center gap-3 hover:border-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-secondary-foreground">{cert}</span>
                </div>)}
            </div>

            {/* Patent */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Patent</p>
                  <p className="font-semibold text-lg text-secondary-foreground">{patent.title}</p>
                  <p className="text-primary font-mono text-sm mt-1">#{patent.number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EducationSection;