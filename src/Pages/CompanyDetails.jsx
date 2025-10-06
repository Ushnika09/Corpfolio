import React from "react";
import { useParams, Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useCompanies } from "../Context/CompanyContext";

function CompanyDetails() {
  const { id } = useParams();
  const { companies, loading } = useCompanies();

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">Company not found</h2>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Back to Explore
        </Link>
      </div>
    );
  }

  // Safe values with defaults
  const revenue = company.revenue || 0;
  const marketCap = company.marketCap || 0;
  const employees = company.employees || 0;
  const productCount = company.productCount || 0;
  const lastYearRevenueGrowth = company.lastYearRevenueGrowth || 0;
  const revenueUnit = company.revenueUnit || "M";
  const marketCapUnit = company.marketCapUnit || "M";

  const chartData = [
    { name: "Revenue (₹M)", value: revenue },
    { name: "Employees (K)", value: employees / 1000 },
    { name: "Products", value: productCount },
  ];

  // Function to get initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 sm:px-12">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block font-medium">
        ← Back to Explore
      </Link>

      {/* Header */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          {company.logo && company.logo !== "razorpay.png" ? (
            <img
              src={company.logo}
              alt={company.name}
              className="h-32 w-32 md:h-40 md:w-40 rounded-xl object-cover shadow"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className={`h-32 w-32 md:h-40 md:w-40 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow ${
              company.logo && company.logo !== "razorpay.png" ? 'hidden' : 'flex'
            }`}
          >
            {getInitials(company.name)}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{company.name}</h1>
          <p className="text-gray-500 mt-2">{company.tagline || ""}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {company.industry && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {company.industry}
              </span>
            )}
            {company.location && (
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {company.location}
              </span>
            )}
            {company.founded && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Founded {company.founded}
              </span>
            )}
          </div>

          <div className="mt-6 text-gray-700 space-y-2">
            {company.ceo && <p><strong>CEO:</strong> {company.ceo}</p>}
            <p>
              <strong>Revenue:</strong> {revenue.toLocaleString()} {revenueUnit}
            </p>
            <p>
              <strong>Market Cap:</strong> {marketCap.toLocaleString()} {marketCapUnit}
            </p>
            {company.description && <p><strong>Description:</strong> {company.description}</p>}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="mt-10 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Company Stats</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => (value || 0).toLocaleString()} />
            <Bar dataKey="value" fill="#3B82F6" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Info */}
      <div className="mt-10 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Additional Info</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <div><strong>Employees:</strong> {employees.toLocaleString()}</div>
          <div><strong>Products:</strong> {productCount.toLocaleString()}</div>
          <div><strong>Last Year Revenue Growth:</strong> {lastYearRevenueGrowth}%</div>
          {company.website && (
            <div>
              <strong>Website:</strong>{" "}
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {company.website}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;