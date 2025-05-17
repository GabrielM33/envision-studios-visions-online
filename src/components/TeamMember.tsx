
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  bio: string;
}

const TeamMember = ({ image, name, position, bio }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-envision-teal">{position}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{bio}</p>
        <div className="flex space-x-3 mt-4">
          <a href="#" className="text-gray-500 hover:text-envision-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-envision-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
