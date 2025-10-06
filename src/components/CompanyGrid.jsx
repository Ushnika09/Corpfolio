import React from "react";
import CompanyCard from "./CompanyCard";

export default function CompanyGrid({ companies = [], loading = false }) {
  if (loading) return <p className="text-center text-gray-500 py-10">Loading companies...</p>;

  if (!Array.isArray(companies) || companies.length === 0)
    return <p className="text-center text-gray-600 py-10">No companies found.</p>;

  return (
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
