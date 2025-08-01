import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LogOut, 
  Bell, 
  Settings, 
  Menu,
  Home,
  Calendar,
  FileText,
  BarChart3
} from "lucide-react";
import { useState } from "react";

interface DashboardLayoutProps {
  role: string;
  onLogout: () => void;
  children?: React.ReactNode;
}

const roleConfig = {
  admin: {
    name: "Administrator",
    color: "bg-primary",
    menuItems: [
      { icon: Home, label: "Dashboard", active: true },
      { icon: FileText, label: "User Management" },
      { icon: BarChart3, label: "Reports" },
      { icon: Settings, label: "System Settings" }
    ]
  },
  doctor: {
    name: "Doctor",
    color: "bg-medical",
    menuItems: [
      { icon: Home, label: "Dashboard", active: true },
      { icon: FileText, label: "Patients" },
      { icon: Calendar, label: "Appointments" },
      { icon: BarChart3, label: "Medical Records" }
    ]
  },
  lab: {
    name: "Laboratory",
    color: "bg-accent",
    menuItems: [
      { icon: Home, label: "Dashboard", active: true },
      { icon: FileText, label: "Test Queue" },
      { icon: BarChart3, label: "Results" },
      { icon: Settings, label: "Lab Equipment" }
    ]
  },
  nurse: {
    name: "Nurse Station",
    color: "bg-destructive",
    menuItems: [
      { icon: Home, label: "Dashboard", active: true },
      { icon: FileText, label: "Patient Care" },
      { icon: Calendar, label: "Schedules" },
      { icon: BarChart3, label: "Vitals" }
    ]
  },
  pharmacy: {
    name: "Pharmacy",
    color: "bg-warning",
    menuItems: [
      { icon: Home, label: "Dashboard", active: true },
      { icon: FileText, label: "Prescriptions" },
      { icon: BarChart3, label: "Inventory" },
      { icon: Settings, label: "Stock Management" }
    ]
  }
};

export const DashboardLayout = ({ role, onLogout, children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const config = roleConfig[role as keyof typeof roleConfig];

  if (!config) {
    return <div>Invalid role</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-foreground">
            Al-Zunnur Clinic & Maternity
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className={`${config.color} text-white`}>
            {config.name}
          </Badge>
          <Button variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onLogout}>
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-4rem)] p-4">
            <nav className="space-y-2">
              {config.menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={index}
                    variant={item.active ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    <IconComponent className="w-4 h-4 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children || (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {config.name} Dashboard
                </h2>
                <p className="text-muted-foreground">
                  Welcome to your healthcare management portal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Today's Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">24</div>
                    <p className="text-xs text-muted-foreground">+20% from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Active Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">142</div>
                    <p className="text-xs text-muted-foreground">+5 new today</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Pending Items
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">8</div>
                    <p className="text-xs text-muted-foreground">-2 from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">3</div>
                    <p className="text-xs text-muted-foreground">Requires attention</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New patient registered</p>
                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Lab results pending review</p>
                        <p className="text-xs text-muted-foreground">15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Appointment scheduled</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};