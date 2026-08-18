import { DashboardShell } from "@/component/demo/dashboard-shell";
import { ReactNode } from "react";


export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-dvh">
      

      
        <DashboardShell>
          {children}
        </DashboardShell>
      
    </main>
  );
}
