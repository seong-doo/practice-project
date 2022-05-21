import { MainLogo } from 'assets';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MainLogo className={styles.logo} />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
