import { SubscriptionImage, SubscriptionImageSm } from 'assets';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SearchInput from 'components/SearchInput';

import styles from './main.module.scss';

function Main() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.search}>
          <div className={styles.title}>
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </div>
          <SearchInput />
        </section>
        <section className={styles.subscription}>
          <div className={styles.content}>
            <div className={styles.description}>
              <div className={styles.desc}>
                새로운 임상시험이 등록되면
                <span className={styles.wordbreak}> 문자로 알려드려요.</span>
              </div>
              <button className={styles.button} type="button">
                임상시험 소식 받기
              </button>
            </div>
            <SubscriptionImage className={styles.image} />
            <SubscriptionImageSm className={styles['image-sm']} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
