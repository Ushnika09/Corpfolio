import React, { createContext, useState, useEffect, useContext } from "react";

// Define context
const CompanyContext = createContext();

// Provider component
export function CompanyProvider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading companies:", err);
        setLoading(false);
      });
  }, []);

  return (
    <CompanyContext.Provider value={{ companies, loading }}>
      {children}
    </CompanyContext.Provider>
  );
}

// Custom hook for easier usage
export function useCompanies() {
  return useContext(CompanyContext);
}
