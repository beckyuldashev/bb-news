import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilters, INews } from '../../interfaces';
import { PAGE_SIZE } from '../../constants/constants';

interface State {
  news: INews[];
  filters: IFilters;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: 'all',
    keywords: '',
  },
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        prop: string;
        value: string | number | readonly string[] | undefined;
      }>,
    ) => {
      const { prop, value } = action.payload;
      state.filters = { ...state.filters, [prop]: value };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
