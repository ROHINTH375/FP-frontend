import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    selectedJobId: null,
  },
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJobId = action.payload; // Update jobId in state
    },
  },
});

export const { setSelectedJob } = jobSlice.actions;
export default jobSlice.reducer;
