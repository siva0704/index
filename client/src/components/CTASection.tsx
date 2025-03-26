import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with technology?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's collaborate to create innovative solutions that drive growth, efficiency, and success for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="px-8 py-6 bg-[#3B82F6] hover:bg-[#1E40AF] rounded-lg font-medium text-white transition-all shadow-lg hover:shadow-xl text-base h-auto">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg font-medium text-white transition-all text-base h-auto">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
