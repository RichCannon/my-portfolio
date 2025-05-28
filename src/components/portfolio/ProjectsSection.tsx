import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranchIcon } from "lucide-react";
import { PROJECTS } from "@/constants/data";

const [otherProjects, featuredProjects] = PROJECTS.reduce(
  (curr, prev) => {
    const idx = +!!prev.featured;
    curr[idx].push(prev);
    return curr;
  },
  [[], []] as [typeof PROJECTS, typeof PROJECTS],
);

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications built with
            modern technologies and thoughtful user experience design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Badge variant="secondary" className="mb-4">
                  Featured Project
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitBranchIcon className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    {project.image ? (
                      <img
                        className="block w-full h-full object-cover"
                        src={project.image}
                        alt={project.title}
                        title={project.description}
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <ExternalLink className="h-8 w-8" />
                        </div>
                        <p className="text-sm">Project Screenshot</p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Other Notable Projects</h3>
          <p className="text-muted-foreground">
            Additional projects that showcase different technologies and
            approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center mb-4">
                    {project.image ? (
                      <img
                        className="block w-full h-full object-cover"
                        src={project.image}
                        alt={project.title}
                        title={project.description}
                      />
                    ) : (
                      <ExternalLink className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.url && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitBranchIcon className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
