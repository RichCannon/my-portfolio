import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { CERTIFICATIONS, EDUCATIONS, EXPERIENCES } from "@/constants/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career progression and key achievements in frontend development,
            building scalable applications and leading technical initiatives.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">
                          {experience.title}
                        </CardTitle>
                        {/* <CardDescription className="text-lg font-medium text-primary">
                          {experience.company}
                        </CardDescription> */}
                      </div>
                      <div className="flex flex-col sm:text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          {experience.duration}
                        </div>
                        {/* <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {experience.location}
                        </div> */}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
            <div className="flex flex-wrap gap-4">
              {EDUCATIONS.map((edu) => (
                <Card key={edu.school}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {edu.school}
                    </CardDescription>
                    <div className="flex flex-col text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <Card>
              <CardHeader>
                <CardTitle>Professional Certifications</CardTitle>
                <CardDescription>
                  Continuous learning and professional development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
