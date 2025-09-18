const Footer = () => {
  return (
    <footer className="py-12 bg-navy-deep text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Company Name */}
          <div>
            <h3 className="text-2xl font-bold mb-2">AiGentic Group</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-electric mx-auto"></div>
          </div>
          
          {/* Copyright */}
          <p className="text-white/70">
            © 2025 AiGentic Group. Investment holding company focused on AI-powered financial technology.
          </p>
          
          {/* Contact */}
          <div className="pt-4 border-t border-white/20">
            <a 
              href="mailto:info@aigenticgroup.com.au" 
              className="text-accent hover:text-electric transition-colors duration-300"
            >
              info@aigenticgroup.com.au
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;