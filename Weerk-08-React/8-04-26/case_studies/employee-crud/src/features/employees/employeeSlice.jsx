// import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

// const initialState = {
//     employees: [],
// };

// export const employeeSlice = createSlice({
//     name: "employees",
//     initialState, 
//     reducers: {
//         addEmployee :(state, action) => {
//             state.employees.push(action.payload);
//         },
//         updateEmployee : (state, action) => {
//             const index = state.employees.findIndex((employee) => employee.id === action.payload)
//             if(index !== -1)
//             {
//                 state.employees[index] = action.payload;
//             }
//         },
//         deleteEmployee : (state, action) => {
//             state.employees = state.employees.filter((employee) => employee.id !== action.payload)
//         }
//     }
// });

// export const {addEmployee, updateEmployee, deleteEmployee} = employeeSlice
// export default employeeSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      );

      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },

    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

// ✅ FIXED HERE
export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;