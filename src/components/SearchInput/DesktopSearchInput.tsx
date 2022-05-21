import { ChangeEvent, KeyboardEvent, useRef } from 'react';

import { MagnifierIcon } from 'assets';
import { useAppSelector, useAppDispatch } from 'hooks';
import { setSearchString } from 'store';

import SearchList from 'components/SearchList';

import styles from './search-input.module.scss';

function DesktopSearchInput() {
  const listRef = useRef<HTMLUListElement>(null);

  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(e.target.value));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const firstListItem = listRef.current?.firstElementChild as HTMLLIElement;
      firstListItem.focus();
    }
  };

  return (
    <div data-id="desktop" className={styles['desktop-search-input']}>
      <div className={styles['input-container']}>
        <MagnifierIcon />
        <input
          type="search"
          className={styles.input}
          placeholder="질환명을 입력해 주세요."
          value={searchString}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <button type="button" tabIndex={-1} className={styles.button}>
        검색
      </button>
      <SearchList listRef={listRef} />
    </div>
  );
}

export default DesktopSearchInput;
