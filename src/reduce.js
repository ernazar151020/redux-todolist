const initial = {
  list: [],
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state);
      if (action.message) {
        return {
          ...state,
          list: [
            ...state.list,
            { message: action.message, id: action.id, completed: false },
          ],
        };
      }

      break;
    case "DELETE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case "CHECK":
      return {
        list: state.list.map((item) => {
          return item.id === action.id
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    case "CLEAR_ALL":
      return { list: [] };
    default:
      return state;
  }
};
