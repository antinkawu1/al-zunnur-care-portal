import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Activity } from "lucide-react";

interface WelcomeScreenProps {
  onContinue: () => void;
}

export const WelcomeScreen = ({ onContinue }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-medical-light flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Al-Zunnur Clinic & Maternity
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Comprehensive Healthcare Management System
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-medical" />
              </div>
              <p className="text-sm font-medium">Secure & Reliable</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-success" />
              </div>
              <p className="text-sm font-medium">Multi-Role Support</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-warning-light rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-warning" />
              </div>
              <p className="text-sm font-medium">Real-time Updates</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Access your healthcare management portal with role-based permissions
            </p>
            <Button 
              onClick={onContinue}
              variant="role"
              size="lg"
              className="w-full max-w-xs mx-auto"
            >
              Continue to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};