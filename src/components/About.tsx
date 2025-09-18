import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About AiGentic Group
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-electric mx-auto"></div>
          </div>
          
          {/* Main Description */}
          <Card className="border-border/50 shadow-card bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90">
                <p>
                  AiGentic Group is a holding company specialising in AI-powered financial 
                  technology and media brands. We develop companies that leverage artificial 
                  intelligence to transform how financial markets operate and communicate.
                </p>
                
                <p>
                  Our focus is on building a portfolio of synergistic brands that collectively 
                  create superior value in the capital markets ecosystem.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;