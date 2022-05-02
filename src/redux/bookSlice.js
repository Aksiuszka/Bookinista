import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:"books",
    initialState:[
        { id:1, title: "Manitou", author: "Graham Masterton", completed: false },
        { id:2, title: "Wampir z Warszawy", author: "Jakub Molenda", completed: false },
        { id:3, title: "Pianista", author: "Władysław Szpilman", completed: false }
    ], 
    reducers:{
        addBook: (state, action) =>{
            const newBook = {
                id: Date.now(),
                title: action.payload.title,
                author: action.payload.author,
                completed: false,
            };
            state.push(newBook);
        },
    },
});
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;