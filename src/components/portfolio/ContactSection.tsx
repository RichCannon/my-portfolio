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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import {
  CONTACT_INFO,
  CONTACTS_FORM_URL,
  FOLLOW_ME_LINKS,
  LINKEDIN_LINK,
  MY_EMAIL,
  MY_EMAIL_MAILTO,
  RESUME_URL,
  TELEGRAM_LINK,
} from "@/constants/data";
import { FormEventHandler, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setIsLoading(true);
    try {
      await fetch(CONTACTS_FORM_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      toast({
        title: "Message Sent!",
        description: `Thank you for reaching out — your message was successfully delivered to my email. I\u2019ll get back to you as soon as possible!`,
        toastType: "success",
      });
    } catch (e) {
      toast({
        title: "Something Went Wrong",
        description: (
          <>
            <p>{`Unfortunately, your message couldn\u2019t be sent.`}</p>
            <p className="[&_a]:underline">
              You can still reach me via{" "}
              <a href={TELEGRAM_LINK} target="_blank">
                Telegram
              </a>
              ,{" "}
              <a href={LINKEDIN_LINK} target="_blank">
                LinkedIn
              </a>
              , or directly by email at <a href={MY_EMAIL_MAILTO}>{MY_EMAIL}</a>
            </p>
          </>
        ),
        toastType: "error",
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects,
            or just having a friendly conversation about web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg border bg-background hover:bg-accent transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {FOLLOW_ME_LINKS.map(({ Icon, href, name }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                        <span className="sr-only">{name}</span>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                {FOLLOW_ME_LINKS.map(({ name, username }) => (
                  <p key={name}>
                    <span className="font-medium">{name}:</span> {username}
                  </p>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Response</CardTitle>
                <CardDescription>
                  I typically respond to messages within 24 hours. For urgent
                  matters, please call or reach out via LinkedIn.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        disabled={isLoading}
                        name="firstName"
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        disabled={isLoading}
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      disabled={isLoading}
                      name="email"
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      disabled={isLoading}
                      name="_subject"
                      id="subject"
                      placeholder="Project Collaboration"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      disabled={isLoading}
                      name="message"
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <input type="text" name="_honey" className="hidden" />
                  <input type="hidden" name="_captcha" value="false" />
                  <Button disabled={isLoading} type="submit" className="w-full">
                    {isLoading ? "Sending..." : `Send Message`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can bring your ideas to life with modern
                web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href={MY_EMAIL_MAILTO}>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={RESUME_URL} target="_blank">
                    Open Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
