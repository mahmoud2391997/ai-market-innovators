import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-electric mx-auto"></div>
          </div>
          
          {/* Team Description */}
          <Card className="border-border/50 shadow-premium bg-gradient-to-br from-card/80 to-accent/5 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90">
                <p>
                  AiGentic Group brings together a unique blend of expertise spanning AI engineering, 
                  financial markets, business strategy, and digital marketing.
                </p>
                
                <p>
                  Our team combines deep technical knowledge in machine learning and automation 
                  with proven experience in scaling technology companies and navigating capital markets.
                </p>
                
                <p className="font-semibold text-accent">
                  This multidisciplinary approach enables us to build AI solutions that truly 
                  understand both the technical possibilities and market realities of financial services.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Team Members Placeholder */}
          <div className="text-center">
            <p className="text-muted-foreground italic">
              Individual team member profiles with LinkedIn connections available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;