import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Zap } from "lucide-react";

const Approach = () => {
  const features = [
    {
      icon: Building2,
      title: "Shared Expertise",
      description: "Centralised resources and integrated technology development"
    },
    {
      icon: Users,
      title: "Collaborative Marketing", 
      description: "Combined marketing capabilities across portfolio companies"
    },
    {
      icon: Zap,
      title: "Strategic Coordination",
      description: "Maintaining distinct market positions while creating synergies"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-electric mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AiGentic Group builds companies through shared expertise and centralised resources. 
              Our portfolio companies benefit from integrated technology development, combined 
              marketing capabilities, and strategic coordination while maintaining their distinct 
              market positions.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 shadow-card hover:shadow-premium transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-electric rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Conclusion */}
          <Card className="border-accent/20 shadow-premium bg-gradient-to-br from-accent/5 to-electric/5">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-xl text-foreground/90 leading-relaxed">
                This collaborative approach creates operational efficiencies and competitive 
                advantages that gives AiGentic Group its operational moat.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;