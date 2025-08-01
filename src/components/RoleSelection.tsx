import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserCheck, 
  Stethoscope, 
  TestTube, 
  Heart, 
  Pill,
  ArrowLeft 
} from "lucide-react";

interface Role {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

const roles: Role[] = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full system access and management",
    icon: UserCheck,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: "doctor",
    name: "Doctor",
    description: "Patient care and medical records",
    icon: Stethoscope,
    color: "text-medical",
    bgColor: "bg-medical-light"
  },
  {
    id: "lab",
    name: "Laboratory",
    description: "Test results and lab management",
    icon: TestTube,
    color: "text-accent",
    bgColor: "bg-success-light"
  },
  {
    id: "nurse",
    name: "Nurse Station",
    description: "Patient monitoring and care",
    icon: Heart,
    color: "text-destructive",
    bgColor: "bg-red-50"
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    description: "Medication and prescription management",
    icon: Pill,
    color: "text-warning",
    bgColor: "bg-warning-light"
  }
];

interface RoleSelectionProps {
  onSelectRole: (roleId: string) => void;
  onBack: () => void;
}

export const RoleSelection = ({ onSelectRole, onBack }: RoleSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-medical-light p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Select Your Role
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your department to access the appropriate dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/50"
                onClick={() => onSelectRole(role.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 ${role.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${role.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {role.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {role.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    Access Dashboard
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};