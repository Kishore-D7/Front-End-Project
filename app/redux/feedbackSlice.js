import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: { list: [] },
  reducers: {
    addFeedback: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload });
    },
    removeFeedback: (state, action) => {
      state.list = state.list.filter((f) => f.id !== action.payload);
    },
    editFeedback: (state, action) => {
      const { id, newText } = action.payload;
      state.list = state.list.map((f) =>
        f.id === id ? { ...f, text: newText } : f
      );
    },
    clearFeedback: (state) => {
      state.list = [];
    },
  },
});

export const { addFeedback, removeFeedback, editFeedback, clearFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
