import { HamburgerButtonIcon } from 'assets';
import { useState } from 'react';
import styles from './header.module.scss';

function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const navList = () => {
    if (!isOpen) return null;
    return (
      <ul className={styles.list}>
        <li className={styles.item}>소식받기</li>
        <li className={styles.item}>제휴/문의</li>
      </ul>
    );
  };

  return (
    <nav className={styles['mobile-nav']}>
      <HamburgerButtonIcon onClick={toggleNav} />
      {navList()}
    </nav>
  );
}

export default MobileNav;
