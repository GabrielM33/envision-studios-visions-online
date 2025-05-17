
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-envision-teal h-full flex flex-col">
      <CardHeader>
        <div className="p-3 bg-envision-teal/10 rounded-lg w-14 h-14 flex items-center justify-center text-envision-teal mb-4">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-envision-teal flex-shrink-0 mr-2 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/contact" className="w-full">
          <Button className="w-full bg-envision-blue hover:bg-envision-teal transition-colors">
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
