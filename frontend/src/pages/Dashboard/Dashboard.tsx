import styles from './dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.main}>
      <main className={styles.main_view}>
        <div className={styles.top_bar_wrapper}>
          {/* <button className={styles.sidebar_toggle_btn}>
            <span className={styles.burger_bar}></span>
            <span className={styles.burger_bar}></span>
            <span className={styles.burger_bar}></span>
          </button> */}

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
