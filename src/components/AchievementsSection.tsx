import { TrendingDown, DollarSign, Zap, Clock, Users, Server } from "lucide-react";
import { useEffect, useRef } from "react";
const AchievementsSection = () => {
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
  const achievements = [{
    icon: TrendingDown,
    metric: "18% → 6%",
    title: "Attrition Reduction",
    description: "Reduced attrition while boosting productivity by 20% and achieving 95% Glint score at FIS",
    color: "from-green-500 to-emerald-600"
  }, {
    icon: DollarSign,
    metric: "$100M+",
    title: "Revenue Generated",
    description: "Led product development generating $100M in revenue while managing 110+ associates",
    color: "from-blue-500 to-cyan-600"
  }, {
    icon: Zap,
    metric: "30%",
    title: "Performance Boost",
    description: "Migrated legacy systems to cloud-native, accelerating system performance and efficiency",
    color: "from-orange-500 to-amber-600"
  }, {
    icon: Clock,
    metric: "1 day → 30 min",
    title: "Onboarding Time",
    description: "Reduced customer onboarding time at NIUM, dramatically enhancing customer experience",
    color: "from-purple-500 to-violet-600"
  }, {
    icon: Users,
    metric: "$200k+",
    title: "Cost Savings",
    description: "Achieved significant savings and 25% faster delivery through technology & process optimization",
    color: "from-pink-500 to-rose-600"
  }, {
    icon: Server,
    metric: "99.9%",
    title: "System Uptime",
    description: "Maintained exceptional system reliability by managing infrastructure, security, and team cohesion",
    color: "from-indigo-500 to-blue-600"
  }];
  return <section className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-inherit">
            Key <span className="text-gradient-accent">Achievements</span>
          </h2>
          <p className="text-lg text-muted">Driving measurable impact across organizations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => <div key={index} className="reveal group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                  {achievement.metric}
                </p>
                <h4 className="text-lg font-semibold mb-2 text-secondary-foreground">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AchievementsSection;