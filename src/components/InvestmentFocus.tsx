import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Database, Network } from "lucide-react";

const InvestmentFocus = () => {
  const focusAreas = [
    {
      icon: TrendingUp,
      title: "AI-Powered Financial Media",
      description: "We develop brands that use artificial intelligence to create superior financial content and analysis for investors and market participants."
    },
    {
      icon: Database,
      title: "Capital Markets Technology", 
      description: "Our portfolio companies build specialised AI systems for financial data processing, market intelligence, and automated content generation."
    },
    {
      icon: Network,
      title: "Strategic Synergies",
      description: "We focus on brands that complement each other, creating an integrated ecosystem with amplified market impact."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Investment Focus
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-electric mx-auto"></div>
          </div>
          
          {/* Focus Areas Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card 
                key={index} 
                className="border-border/50 shadow-card hover:shadow-premium transition-all duration-500 group bg-card/50 backdrop-blur-sm hover:bg-card/80"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-electric rounded-lg flex items-center justify-center mb-4 shadow-glow group-hover:shadow-lg transition-all duration-300">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocus;