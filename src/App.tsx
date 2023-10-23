import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./pages/List/list";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Forms from "./pages/Home";

export type Employee = {
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  startline: Date;
  departement: string;
  Street: string;
  City: string;
  State: string;
  PostalCode: string;
};

/**
 * EN : Main application component
 * FR : Composant principal de l'application.*
 *
 * EN : This component manages employee status and provides an interface for adding new employees.
 * FR : Ce composant gère l'état des employés et fournit une interface pour ajouter de nouveaux employés.
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the application structure.
 */

const App = () => {
  /**
   * EN : Local state that stores the employee list
   * FR : État local qui stocke la liste des employés.
   * @type {Employee[]}
   */
  const [employees, setEmployees] = useState<Employee[]>([]);

  /**
   * EN : Function to add a new employee to the employee list
   * FR : Fonction pour ajouter un nouvel employé à la liste des employés.
   *
   * @param {Employee} employee - L'objet représentant l'employé à ajouter.
   */
  const addEmployee = (employee: Employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Forms addEmployee={addEmployee} />} />
        <Route
          path="/liste"
          element={<List employees={employees} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App
