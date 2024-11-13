import styles from "./Section.module.css"; // Import the CSS module

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndText}>
            <div className={styles.headingAndBadge}>
              <div className={styles.badge}>
                <div className={styles.badgeBase}>
                  <span className={styles.badgeText}>our blog</span>
                </div>
              </div>
              <h1 className={styles.heading}>Resources and insights</h1>
            </div>
            <p className={styles.supportingText}>
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
          <div className={styles.inputField}>
            <div className={styles.inputBase}>
              <input
                className={styles.input}
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
