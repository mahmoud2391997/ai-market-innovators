import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-electric mx-auto"></div>
            <p className="text-xl text-muted-foreground">
              For investment opportunities and strategic partnerships.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location */}
            <Card className="border-border/50 shadow-card bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-electric rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">Perth, Western Australia</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Email */}
            <Card className="border-border/50 shadow-card bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-electric rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:info@aigenticgroup.com.au" 
                    className="text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    info@aigenticgroup.com.au
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-glow"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;