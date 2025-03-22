import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#" className={styles.navLink}>
              Azienda Agricola
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Fattoria Didattica
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Agriturismo
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Bio e sostenibilità
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Turismo e territorio
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Dove siamo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;