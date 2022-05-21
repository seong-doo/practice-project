import styles from './header.module.scss';

function DesktopNav() {
  return (
    <nav className={styles['desktop-nav']}>
      <button className={styles.button} type="button">
        소식받기
      </button>
      <button className={styles.button} type="button">
        제휴/문의
      </button>
    </nav>
  );
}

export default DesktopNav;
