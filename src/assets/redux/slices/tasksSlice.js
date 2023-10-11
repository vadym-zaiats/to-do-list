import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    allTasks: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.allTasks.push({
        title: action.payload.title,
        descr: action.payload.descr,
        status: action.payload.status,
        id: new Date().toISOString(),
      });
    },
    changeStatus: (state, action) => {
      const updatedData = state.allTasks.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: !item.status };
        }
        return item;
      });

      return {
        ...state,
        allTasks: updatedData,
      };
    },
    deleteToDo: (state, action) => {
      const { id } = action.payload;
      state.allTasks = state.allTasks.filter((item) => item.id !== id);
    },
    editItem: (state, action) => {
      const updatedData = state.allTasks.map((item) => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            title: action.payload.title,
            descr: action.payload.descr,
          };
        }
        return item;
      });

      return {
        ...state,
        allTasks: updatedData,
      };
    },
  },
});

export default tasksSlice.reducer;
export const { addToDo, changeStatus, deleteToDo, editItem } =
  tasksSlice.actions;
