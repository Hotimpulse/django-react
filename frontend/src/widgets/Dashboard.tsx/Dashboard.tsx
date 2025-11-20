import styles from './dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.main}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className={styles.menu_container}>
          <div className={styles.btn}>Dashboard</div>
          <div className={styles.btn}>Profile</div>
          <div className={styles.btn}>Settings</div>
          <div className={styles.btn}>Logout</div>
        </div>
      </aside>

      <main className={styles.main_view}>
        <div className={styles.top_bar_wrapper}>
          <button className={styles.sidebar_toggle_btn}>
            <span className={styles.burger_bar}></span>
            <span className={styles.burger_bar}></span>
            <span className={styles.burger_bar}></span>
          </button>

          <section className={styles.profile_section}>Profile Section</section>
        </div>

        <h1 className={styles.header}>Welcome Back!</h1>

        <div className={styles.main_container}>
          <div className={styles.card_wrapper}>
            <div className={styles.card}>Card Example</div>
            <div className={styles.card}>Card Example</div>
            <div className={styles.card}>Card Example</div>
          </div>

          <div className={styles.content}>Main Content Area</div>
        </div>
      </main>
    </div>
  );
}
