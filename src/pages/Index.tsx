import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { RoleSelection } from "@/components/RoleSelection";
import { DashboardLayout } from "@/components/DashboardLayout";

type AppState = "welcome" | "roleSelection" | "dashboard";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("welcome");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleContinue = () => {
    setCurrentState("roleSelection");
  };

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setCurrentState("dashboard");
  };

  const handleBack = () => {
    setCurrentState("welcome");
  };

  const handleLogout = () => {
    setSelectedRole("");
    setCurrentState("welcome");
  };

  switch (currentState) {
    case "welcome":
      return <WelcomeScreen onContinue={handleContinue} />;
    case "roleSelection":
      return <RoleSelection onSelectRole={handleRoleSelect} onBack={handleBack} />;
    case "dashboard":
      return <DashboardLayout role={selectedRole} onLogout={handleLogout} />;
    default:
      return <WelcomeScreen onContinue={handleContinue} />;
  }
};

export default Index;
