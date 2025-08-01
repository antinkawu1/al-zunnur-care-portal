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
  BarChart3,
  Users,
  TestTube,
  Heart,
  Pill,
  Plus,
  Search,
  Filter
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface MenuItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
}

interface DashboardLayoutProps {
  role: string;
  onLogout: () => void;
}

const roleConfig = {
  admin: {
    name: "Administrator",
    color: "bg-primary",
    menuItems: [
      { id: "dashboard", icon: Home, label: "Dashboard" },
      { id: "users", icon: Users, label: "User Management" },
      { id: "reports", icon: BarChart3, label: "Reports" },
      { id: "settings", icon: Settings, label: "System Settings" }
    ]
  },
  doctor: {
    name: "Doctor",
    color: "bg-medical",
    menuItems: [
      { id: "dashboard", icon: Home, label: "Dashboard" },
      { id: "patients", icon: FileText, label: "Patients" },
      { id: "appointments", icon: Calendar, label: "Appointments" },
      { id: "records", icon: BarChart3, label: "Medical Records" }
    ]
  },
  lab: {
    name: "Laboratory",
    color: "bg-accent",
    menuItems: [
      { id: "dashboard", icon: Home, label: "Dashboard" },
      { id: "queue", icon: FileText, label: "Test Queue" },
      { id: "results", icon: BarChart3, label: "Results" },
      { id: "equipment", icon: Settings, label: "Lab Equipment" }
    ]
  },
  nurse: {
    name: "Nurse Station",
    color: "bg-destructive",
    menuItems: [
      { id: "dashboard", icon: Home, label: "Dashboard" },
      { id: "care", icon: Heart, label: "Patient Care" },
      { id: "schedules", icon: Calendar, label: "Schedules" },
      { id: "vitals", icon: BarChart3, label: "Vitals" }
    ]
  },
  pharmacy: {
    name: "Pharmacy",
    color: "bg-warning",
    menuItems: [
      { id: "dashboard", icon: Home, label: "Dashboard" },
      { id: "prescriptions", icon: Pill, label: "Prescriptions" },
      { id: "inventory", icon: BarChart3, label: "Inventory" },
      { id: "stock", icon: Settings, label: "Stock Management" }
    ]
  }
};

// Sample data for different views
const sampleData = {
  patients: [
    { id: 1, name: "Ahmad Rahman", age: 35, status: "Active", lastVisit: "2024-01-15" },
    { id: 2, name: "Fatima Hassan", age: 28, status: "Pending", lastVisit: "2024-01-14" },
    { id: 3, name: "Omar Ali", age: 45, status: "Active", lastVisit: "2024-01-13" },
  ],
  appointments: [
    { id: 1, patient: "Ahmad Rahman", time: "09:00 AM", type: "Checkup", status: "Confirmed" },
    { id: 2, patient: "Fatima Hassan", time: "10:30 AM", type: "Follow-up", status: "Pending" },
    { id: 3, patient: "Omar Ali", time: "02:00 PM", type: "Consultation", status: "Confirmed" },
  ],
  tests: [
    { id: 1, patient: "Ahmad Rahman", test: "Blood Test", status: "In Progress", priority: "High" },
    { id: 2, patient: "Fatima Hassan", test: "X-Ray", status: "Pending", priority: "Medium" },
    { id: 3, patient: "Omar Ali", test: "ECG", status: "Completed", priority: "Low" },
  ],
  prescriptions: [
    { id: 1, patient: "Ahmad Rahman", medication: "Paracetamol 500mg", quantity: "30 tablets", status: "Ready" },
    { id: 2, patient: "Fatima Hassan", medication: "Amoxicillin 250mg", quantity: "21 capsules", status: "Preparing" },
    { id: 3, patient: "Omar Ali", medication: "Aspirin 75mg", quantity: "60 tablets", status: "Dispensed" },
  ]
};

const DashboardContent = ({ role }: { role: string }) => {
  const config = roleConfig[role as keyof typeof roleConfig];
  
  return (
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
  );
};

const PatientsContent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Patients</h2>
        <p className="text-muted-foreground">Manage patient records and information</p>
      </div>
      <Button variant="default">
        <Plus className="w-4 h-4 mr-2" />
        Add Patient
      </Button>
    </div>

    <div className="flex items-center gap-4">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input placeholder="Search patients..." className="pl-10" />
      </div>
      <Button variant="outline">
        <Filter className="w-4 h-4 mr-2" />
        Filter
      </Button>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Patient List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sampleData.patients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{patient.name}</p>
                <p className="text-sm text-muted-foreground">Age: {patient.age} • Last visit: {patient.lastVisit}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={patient.status === 'Active' ? 'default' : 'secondary'}>
                  {patient.status}
                </Badge>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const AppointmentsContent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Appointments</h2>
        <p className="text-muted-foreground">Schedule and manage patient appointments</p>
      </div>
      <Button variant="default">
        <Plus className="w-4 h-4 mr-2" />
        New Appointment
      </Button>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sampleData.appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{appointment.patient}</p>
                <p className="text-sm text-muted-foreground">{appointment.time} • {appointment.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={appointment.status === 'Confirmed' ? 'default' : 'secondary'}>
                  {appointment.status}
                </Badge>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const TestQueueContent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Test Queue</h2>
        <p className="text-muted-foreground">Manage laboratory tests and results</p>
      </div>
      <Button variant="default">
        <Plus className="w-4 h-4 mr-2" />
        Add Test
      </Button>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Pending Tests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sampleData.tests.map((test) => (
            <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{test.patient}</p>
                <p className="text-sm text-muted-foreground">{test.test}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={test.priority === 'High' ? 'destructive' : test.priority === 'Medium' ? 'secondary' : 'outline'}>
                  {test.priority}
                </Badge>
                <Badge variant={test.status === 'Completed' ? 'default' : 'secondary'}>
                  {test.status}
                </Badge>
                <Button variant="outline" size="sm">Process</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const PrescriptionsContent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Prescriptions</h2>
        <p className="text-muted-foreground">Manage medication prescriptions and dispensing</p>
      </div>
      <Button variant="default">
        <Plus className="w-4 h-4 mr-2" />
        New Prescription
      </Button>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Active Prescriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sampleData.prescriptions.map((prescription) => (
            <div key={prescription.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{prescription.patient}</p>
                <p className="text-sm text-muted-foreground">{prescription.medication} • {prescription.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={prescription.status === 'Ready' ? 'default' : prescription.status === 'Dispensed' ? 'outline' : 'secondary'}>
                  {prescription.status}
                </Badge>
                <Button variant="outline" size="sm">Process</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const renderTabContent = (activeTab: string, role: string) => {
  switch (activeTab) {
    case "dashboard":
      return <DashboardContent role={role} />;
    case "patients":
      return <PatientsContent />;
    case "appointments":
      return <AppointmentsContent />;
    case "queue":
      return <TestQueueContent />;
    case "prescriptions":
      return <PrescriptionsContent />;
    case "users":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">User Management</h2>
          <p className="text-muted-foreground">Manage system users and permissions</p>
          <Card><CardContent className="p-6">User management functionality coming soon...</CardContent></Card>
        </div>
      );
    case "reports":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Reports</h2>
          <p className="text-muted-foreground">View system reports and analytics</p>
          <Card><CardContent className="p-6">Reports and analytics coming soon...</CardContent></Card>
        </div>
      );
    case "settings":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground">Configure system settings</p>
          <Card><CardContent className="p-6">System settings coming soon...</CardContent></Card>
        </div>
      );
    default:
      return <DashboardContent role={role} />;
  }
};

export const DashboardLayout = ({ role, onLogout }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
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
              {config.menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab(item.id)}
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
          {renderTabContent(activeTab, role)}
        </main>
      </div>
    </div>
  );
};