import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Strategy = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-deep to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Investment Strategy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric to-accent mx-auto"></div>
          </div>
          
          {/* Strategy Content */}
          <Card className="border-white/20 shadow-premium bg-white/10 backdrop-blur-md">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8 text-lg md:text-xl leading-relaxed text-white/90">
                <p>
                  AiGentic Group develops AI-focused brands that enhance our financial markets ecosystem. 
                  We provide strategic oversight, shared resources, and growth capital to build market-leading companies.
                </p>
                
                <p>
                  Our approach combines operational expertise with cutting-edge AI technology to create 
                  sustainable competitive advantages in the financial services sector.
                </p>
              </div>
              
              <div className="mt-12">
                <Button 
                  size="lg" 
                  className="bg-electric hover:bg-electric/90 text-navy-deep px-8 py-4 text-lg font-semibold shadow-glow"
                >
                  Explore Partnership Opportunities
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Strategy;