import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    type: '',
    statusModal: false,
  },
  reducers: {
    openModal(state, action) {
      state.statusModal = !state.statusModal;
      state.type = action.payload.type;
      state.title = action.payload && action.payload.title;
      state.descr = action.payload && action.payload.descr;
      state.status = action.payload && action.payload.status;
      state.id = action.payload && action.payload.id;
    },
    closeModal(state, action) {
      state.statusModal = false;
      state.type = '';
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
