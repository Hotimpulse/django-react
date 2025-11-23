import { Outlet } from 'react-router';
import { SidebarProvider, SidebarTrigger } from '@src/components/ui/sidebar.tsx';
import { AppSidebar } from '@src/components/AppSidebar.tsx';
import styles from './layout.module.scss';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Outlet />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
