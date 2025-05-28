import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { HERO_FLIP_WORDS, MY_FIRST_NAME, SOCIAL_MEDIA } from "@/constants/data";
import FlipWords from "../ui/flip-words";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              Available for hire
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <div>Hi, I'm {MY_FIRST_NAME}, a</div>
            <div className="bg-black  text-white dark:bg-transparent  rounded-xl w-fit px-6 py-2 my-1 inline-block">
              <FlipWords words={HERO_FLIP_WORDS} />
            </div>
            <div>developer</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code, exceptional user
            experiences, and bringing ideas to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6 "
          >
            {SOCIAL_MEDIA.map(({ Icon, href, name }) => {
              return (
                <Button variant="ghost" size="icon" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{name}</span>
                  </a>
                </Button>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
          >
            <ArrowDown className="h-4 w-4" />
            <span className="sr-only">Scroll to next section</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
