import { SidebarProvider, SidebarTrigger } from '../../components/ui/sidebar.tsx';
import { AppSidebar } from '../../components/AppSidebar.tsx';
import Dashboard from '../Dashboard.tsx/Dashboard.tsx';
import styles from './layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={styles.main}>
        <SidebarTrigger />
        <Dashboard />
        {children}
      </main>
    </SidebarProvider>
  );
}
