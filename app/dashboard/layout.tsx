import { DashboardNav } from "@/components/DashboardNav";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}
