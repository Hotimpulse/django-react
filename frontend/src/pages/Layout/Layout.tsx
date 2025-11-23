import { Outlet, useLocation } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@src/components/ui/sidebar.tsx';
import { AppSidebar } from '@src/components/AppSidebar.tsx';
import styles from './layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  // const pageName = capitalize(pathname.slice(1));

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
