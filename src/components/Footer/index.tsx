import { KIDSLogo } from 'assets';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['left-section']}>
          <div className={styles.name}>(주)휴먼스케이프</div>
          <div className={styles.address}>
            서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자:
            장민후
          </div>
          <div className={styles.copyrights}>
            © 2021 Humanscape, All rights reserved.
          </div>
          <img src={KIDSLogo} alt="kids-logo" />
        </div>
        <div className={styles['right-section']}>
          <a href="/" className={styles.terms}>
            개인정보처리방침
          </a>
          <div className={styles.slogan}>
            Living healthier by connecting better
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
