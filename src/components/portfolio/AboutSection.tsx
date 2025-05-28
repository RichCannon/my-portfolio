import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Zap } from "lucide-react";
import { FUN_FACTS } from "@/constants/data";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code that follows best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces with attention to detail.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed, accessibility, and excellent user experience.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Passionate About Creating
            <span className="block text-primary">
              Amazing Digital Experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 4 years of experience in frontend development, I
            specialize in creating responsive web applications using modern
            JavaScript frameworks. I believe in the power of clean code and
            thoughtful design to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I started my journey in web development with a curiosity about
                how websites work. What began as a hobby quickly turned into a
                passion as I discovered the perfect blend of creativity and
                logic that frontend development offers.
              </p>
              <p>
                Today, I focus on building accessible, performant web
                applications using modern technologies like React, TypeScript,
                and Next.js. I'm constantly learning and staying up-to-date with
                the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design
                trends, contributing to open-source projects, or mentoring other
                developers in their journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <Card key={highlight.title}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {FUN_FACTS.map((fact) => (
              <Badge key={fact} variant="secondary">
                {fact}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
