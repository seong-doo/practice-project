import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from 'types/search.d';

interface IFilteredListState {
  item: IItem[];
}

const initialState: IFilteredListState = {
  item: [],
};

const filteredListSlice = createSlice({
  name: 'filteredList',
  initialState,
  reducers: {
    setFilteredList: (
      state: IFilteredListState,
      action: PayloadAction<IItem[]>
    ) => {
      state.item = action.payload;
    },
  },
});

export const { setFilteredList } = filteredListSlice.actions;

export default filteredListSlice.reducer;
