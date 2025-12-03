import { useEffect, useState } from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;
type SonnerTheme = NonNullable<ToasterProps["theme"]>;

const resolveDocumentTheme = (): SonnerTheme => {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }

  return "light";
};

const useDocumentTheme = (): SonnerTheme => {
  const [theme, setTheme] = useState<SonnerTheme>(() => resolveDocumentTheme());

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(resolveDocumentTheme());
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    setTheme(resolveDocumentTheme());

    return () => observer.disconnect();
  }, []);

  return theme;
};

const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useDocumentTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
