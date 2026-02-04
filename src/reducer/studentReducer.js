export function studentReducer(draft, action) {
  switch (action.type) {
    case "ADD_DATA":
      draft.push(action.payload);
      break;

    case "DELETE_DATA":
      return draft.filter(student => student.id !== action.payload);

    case "EDIT_DATA":
      const index = draft.findIndex(
        student => student.id === action.payload.id
      );
      if (index !== -1) {
        draft[index] = action.payload;
      }
      break;

    default:
      break;
  }
}
