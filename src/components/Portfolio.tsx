import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Rss, BarChart3 } from "lucide-react";

const Portfolio = () => {
  const companies = [
    {
      icon: Cpu,
      name: "AiGentic Labs",
      badge: "Technology Development",
      description: "Our technology development company building specialised AI systems for financial markets. AiGentic Labs creates the proprietary models and automated workflows that power our entire ecosystem, including advanced research systems, content generation tools, and specialised financial AI models."
    },
    {
      icon: Rss,
      name: "Discovery Alert", 
      badge: "Established Revenue",
      description: "Established financial media brand specialising in mining and energy sector coverage. Provides real-time alerts on significant mineral discoveries and comprehensive analysis of ASX-listed mining and energy companies. A proven revenue-generating platform with strong market presence."
    },
    {
      icon: BarChart3,
      name: "Stock Wire X",
      badge: "AI-Powered Analysis",
      description: "AI-powered financial publication delivering in-depth analysis and commentary for ASX-listed companies in technology, biotechnology, healthcare, finance, and industrial sectors. Focused on providing clear, accessible insights for retail and professional investors."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Portfolio Companies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-electric mx-auto"></div>
          </div>
          
          {/* Companies Grid */}
          <div className="space-y-8">
            {companies.map((company, index) => (
              <Card 
                key={index}
                className="border-border/50 shadow-premium bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 group"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon & Title */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-electric rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-lg transition-all duration-300">
                        <company.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {company.name}
                        </h3>
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 w-fit">
                          {company.badge}
                        </Badge>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;