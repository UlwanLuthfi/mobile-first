import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MonitorSmartphone,
  BarChart4,
  UserCheck,
  Settings,
  Rocket,
} from "lucide-react";

export default function WhyMobileFirst() {
  const benefits = [
    {
      icon: <MonitorSmartphone />,
      title: "Wide Accessibility",
      description:
        "Reach more users with an optimally responsive design on any device.",
    },
    {
      icon: <BarChart4 />,
      title: "Enhanced SEO",
      description:
        "Search engine algorithms like Google favor responsive sites, boosting rankings and exposure.",
    },
    {
      icon: <UserCheck />,
      title: "Improved User Experience",
      description:
        "Deliver a seamless and engaging user experience, enhancing user retention and satisfaction.",
    },
    {
      icon: <Settings />,
      title: "Development Efficiency",
      description:
        "Reduce development complexity by focusing on adaptive design for various devices.",
    },
    {
      icon: <Rocket />,
      title: "Speed and Performance",
      description:
        "Optimized mobile sites load faster, increasing user satisfaction.",
    },
  ];

  return (
    <section id="why" className="space-y-4 pt-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight">
          Why Mobile-First?
        </h2>
        <p className="text-muted-foreground">
          The surge in mobile device usage is reshaping the digital landscape.
          Prioritizing mobile-first development opens doors to incredible
          opportunities
        </p>
      </div>

      <div className="space-y-4">
        {benefits.map((benefit) => {
          return (
            <Card key={benefit.title}>
              <CardHeader className="flex flex-row items-center gap-x-4">
                <span>{benefit.icon}</span>
                <div className="space-y-2">
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="leading-tight">
                    {benefit.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
