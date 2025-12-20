import { Mail, Phone, Linkedin, ChevronDown, Award, Users, TrendingUp, Globe } from "lucide-react";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Name and Title */}
          <div className="opacity-0 animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4">
              Akshay Jain
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-2">
              Delivery Director & Engineering Leader
            </p>
            <p className="text-lg text-amber-400 font-medium">23+ Years in Fintech & Banking Excellence</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-0 animate-fade-up delay-200">
            {[{
            icon: TrendingUp,
            value: "$100M+",
            label: "Revenue Generated"
          }, {
            icon: Users,
            value: "150+",
            label: "Team Members Led"
          }, {
            icon: Award,
            value: "99.9%",
            label: "System Uptime"
          }, {
            icon: Globe,
            value: "8+",
            label: "Global Rollouts"
          }].map((stat, index) => <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-center group hover:scale-105 transition-all duration-300 hover:shadow-glow">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-amber-400 group-hover:scale-110 transition-transform" />
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>)}
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 opacity-0 animate-fade-up delay-400">
            <a href="mailto:jakshaya@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-glow animate-pulse-glow">
              <Mail className="w-5 h-5" />
              jakshaya@gmail.com
            </a>
            <a href="tel:+919004082844" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-medium hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5" />
              +91-90040 82844
            </a>
            <a href="https://linkedin.com/in/jakshaya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl border border-white/20 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 bg-primary">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          {/* Scroll Indicator */}
          <button onClick={() => scrollToSection("about")} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer opacity-0 animate-fade-in delay-700">
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;