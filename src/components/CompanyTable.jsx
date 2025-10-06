import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyTable({ companies = [], loading }) {
  const navigate = useNavigate();

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (companies.length === 0)
    return <p className="text-center py-10">No companies found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-blue-50">
          <tr>
            <th className="text-left p-4 text-blue-700 font-semibold">Name</th>
            <th className="text-left p-4 text-blue-700 font-semibold">Industry</th>
            <th className="text-left p-4 text-blue-700 font-semibold">Location</th>
            <th className="text-left p-4 text-blue-700 font-semibold">Founded</th>
            <th className="text-left p-4 text-blue-700 font-semibold">Employees</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((c, idx) => (
            <tr
              key={c.id}
              onClick={() => navigate(`/company/${c.id}`)}
              className={`cursor-pointer transition-all transform hover:scale-[1.02] hover:bg-blue-50 ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-4 font-semibold text-blue-800">{c.name}</td>
              <td className="p-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {c.industry}
                </span>
              </td>
              <td className="p-4">{c.location}</td>
              <td className="p-4">{c.founded}</td>
              <td className="p-4">
                <span className="text-gray-700 font-medium">👥 {c.employees.toLocaleString()}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
