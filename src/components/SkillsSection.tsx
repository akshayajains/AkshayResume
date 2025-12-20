import { useEffect, useRef, useState } from "react";
const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("languages");
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
  const skillCategories = {
    languages: {
      title: "Languages",
      skills: ["C#.NET", "Angular", "VC++", "Java", "PL/SQL", "Python", "JavaScript", "Spring"]
    },
    cloud: {
      title: "Cloud & Integration",
      skills: ["Azure", "AWS", "Rabbit MQ", "Apigee", "Kafka", "Web API", "API Gateway", "Redis", "SaaS", "GitLab"]
    },
    devops: {
      title: "DevOps",
      skills: ["Jenkins", "Docker", "Kubernetes", "Harness", "AKS", "CheckMarx", "SonarQube", "Veracode", "Maven", "Terraform", "CodeDeploy", "CI/CD"]
    },
    databases: {
      title: "Databases",
      skills: ["SQL Server", "Oracle", "MongoDB", "NoSQL"]
    },
    tools: {
      title: "Tools & Methodologies",
      skills: ["RPA", "REST", "Bitbucket", "GitHub", "Splunk", "PowerBI", "JIRA", "ServiceNow", "Rally", "ITIL", "Scrum", "Kanban", "TDD", "BDD"]
    }
  };
  const keySkills = ["Transformation", "Strategic Planning", "Stakeholder Management", "Digital Strategy", "Risk Management", "Governance", "Budgeting", "Metrics-Driven Decisions", "Client Management", "People Management", "Program Management", "Service Delivery"];
  return <section className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient-accent">Technologies</span>
          </h2>
          <p className="text-lg text-muted">Technical expertise and leadership capabilities</p>
        </div>

        {/* Key Skills */}
        <div className="reveal mb-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">Leadership & Management</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {keySkills.map((skill, index) => <span key={index} className="px-5 py-2.5 bg-card text-foreground rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default shadow-soft">
                {skill}
              </span>)}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="reveal">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">Technical Stack</h3>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => <button key={key} onClick={() => setActiveCategory(key)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === key ? "bg-primary text-primary-foreground shadow-glow" : "bg-card text-foreground border border-border hover:border-primary"}`}>
                {category.title}
              </button>)}
          </div>

          {/* Skills Grid */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium opacity-0 animate-scale-in hover:bg-primary hover:text-primary-foreground transition-colors cursor-default" style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "forwards"
            }}>
                  {skill}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;