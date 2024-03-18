import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FigmaLogoIcon } from "@radix-ui/react-icons";
import {
  BookText,
  Chrome,
  Figma,
  Smartphone,
  TabletSmartphone,
  Users,
} from "lucide-react";

export default function ToolsAndResources() {
  const resources = [
    {
      icon: <Smartphone />,
      title: "Google's Mobile-Friendly Test",
      description:
        "Evaluate your site's mobile-friendliness and identify areas for improvement.",
    },
    {
      icon: <Figma />,
      title: "Adobe XD or Figma",
      description:
        "Design tools to create prototypes with a mobile-first approach.",
    },
    {
      icon: <Chrome />,
      title: "Chrome DevTools",
      description:
        "Test and debug your site across various devices with Chrome's built-in developer tools.",
    },
    {
      icon: <TabletSmartphone />,
      title: "Responsive Design Testing Tools",
      description:
        "Platforms like Responsinator or BrowserStack allow you to preview your site across multiple devices and screen sizes.",
    },
    {
      icon: <BookText />,
      title: "Mobile Optimization Guides",
      description:
        "Access comprehensive guides and tutorials on mobile optimization techniques from reputable sources like Google Developers or Mozilla Developer Network (MDN).",
    },
    {
      icon: <Users />,
      title: "Community Forums and Support Groups",
      description:
        "Join online communities like Stack Overflow or Reddit's web development forums to seek advice, share insights, and collaborate with fellow developers.",
    },
  ];

  return (
    <section id="tools" className="space-y-4 pt-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight">
          Tools & Resources for Mobile-First Success
        </h2>
        <p className="text-muted-foreground">
          We provide the best resources, tutorials, and tools to ensure the
          success of your mobile-first development. Access step-by-step guides,
          expert tips, and join our dedicated community.
        </p>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => {
          return (
            <Card key={resource.title}>
              <CardHeader className="flex flex-row items-center gap-x-4">
                <div className="flex items-center gap-x-4">
                  <span>{resource.icon}</span>

                  <div className="space-y-2">
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription className="leading-tight">
                      {resource.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
