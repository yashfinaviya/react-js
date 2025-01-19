const initialState = {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    note: null
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            let oldData = JSON.parse(localStorage.getItem('notes')) || [];
            oldData.push(action.payload);
            localStorage.setItem('notes', JSON.stringify(oldData))
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case "DELETE_NOTE":
            let allRecords = JSON.parse(localStorage.getItem('notes'))
            let updatedRec = allRecords.filter((record) => record.id != action.payload)
            localStorage.setItem("notes", JSON.stringify(updatedRec));
            return {
                ...state,
                notes: updatedRec
            }
        case "EDIT_NOTE":
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? { ...action.payload } : note
                ),
            };
        default:
            return state;
    }
}