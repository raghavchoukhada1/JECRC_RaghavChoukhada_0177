import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

/**
 * Hook → employee data access ke liye
 */
export const useEmployees = () => useContext(EmployeeContext);

/**
 * EmployeeProvider → CRUD operations handle karta hai
 */
export const EmployeeProvider = ({ children }) => {

  // employee list store ho rahi hai
  const [employees, setEmployees] = useState([
    { id: 1, name: "Raghav", role: "employee" },
    { id: 2, name: "Admin", role: "admin" }
  ]);

  /**
   * Add employee
   * - purane employees copy karta hai
   * - new employee add karta hai
   * - unique id generate karta hai
   */
  const addEmployee = (emp) => {
    setEmployees([
      ...employees,
      { ...emp, id: Date.now() }
    ]);
  };

  /**
   * Update employee
   * - map use karke specific employee replace karta hai
   */
  const updateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map(e =>
        e.id === updatedEmp.id ? updatedEmp : e
      )
    );
  };

  /**
   * Delete employee
   * - filter use karke remove karta hai
   */
  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(e => e.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider value={{
      employees,
      addEmployee,
      updateEmployee,
      deleteEmployee
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};