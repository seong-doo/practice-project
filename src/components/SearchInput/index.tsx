import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { useAppDispatch, useAppSelector, useQueryDebounce } from 'hooks';
import { setFilteredList } from 'store';
import { fetcher } from 'utils';

import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';

import styles from './search-input.module.scss';

function SearchInput() {
  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const searchInput = useQueryDebounce(searchString, 500);

  const { data } = useQuery(['data', searchInput], () => fetcher(searchInput), {
    enabled: !!searchInput,
  });

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        dispatch(setFilteredList(data));
      } else {
        dispatch(setFilteredList([data]));
      }
    } else {
      dispatch(setFilteredList([]));
    }
  }, [data, dispatch]);

  return (
    <div className={styles['search-input']}>
      <MobileSearchInput />
      <DesktopSearchInput />
    </div>
  );
}

export default SearchInput;
