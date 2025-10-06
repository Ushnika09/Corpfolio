import React, { useEffect, useState } from "react";
import CompanyGrid from "./CompanyGrid";
import CompanyTable from "./CompanyTable";
import { useCompanies } from "../Context/CompanyContext";

function Actions() {
  const { companies = [], loading } = useCompanies();
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("grid");

  // 🔍 Filtering logic
  useEffect(() => {
    let data = [...companies];

    if (search.trim() !== "") {
      data = data.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.location.toLowerCase().includes(search.toLowerCase()) ||
          c.industry.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (industry) data = data.filter((c) => c.industry === industry);
    if (location) data = data.filter((c) => c.location === location);

    if (sortBy === "az") data.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "za") data.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "employees") data.sort((a, b) => b.employees - a.employees);

    setFilteredCompanies(data);
    setCurrentPage(1);
  }, [search, industry, location, sortBy, companies]);

  // 🔢 Pagination
  const totalPages = Math.ceil(filteredCompanies.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedData = filteredCompanies.slice(start, start + perPage);

  // 🏭 Dropdown values
  const industries = [...new Set(companies.map((c) => c.industry))];
  const locations = [...new Set(companies.map((c) => c.location))];

  const resetFilters = () => {
    setSearch("");
    setIndustry("");
    setLocation("");
    setSortBy("");
    setPerPage(12);
    setCurrentPage(1);
  };

  const anyFilterActive =
    search || industry || location || sortBy || perPage !== 12;

  return (
    <section id="explore" className="max-w-7xl px-4 py-10 mx-auto">
      {/* 🔧 Filter Panel */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border border-gray-100">
        <div className="flex flex-wrap justify-between gap-4 items-center">
          {/* Filters */}
          <div className="grid md:grid-cols-5 gap-4 flex-1">

            {/* Search */}
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">🔍 Search</label>
              <input
                type="text"
                placeholder="Search by name, location, or industry"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none font-bold"
              />
            </div>

            {/* Industry */}
            {industries.length > 0 && (
              <div className="relative">
                <label className="block font-semibold mb-1">🏭 Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-blue-500 outline-none bg-white font-bold"
                >
                  <option value="">All</option>
                  {industries.map((ind, i) => (
                    <option key={i} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-10 w-4 h-4 text-gray-500 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            )}

            {/* Location */}
            {locations.length > 0 && (
              <div className="relative">
                <label className="block font-semibold mb-1">📍 Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-blue-500 outline-none bg-white font-bold"
                >
                  <option value="">All</option>
                  {locations.map((loc, i) => (
                    <option key={i} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-10 w-4 h-4 text-gray-500 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            )}

            {/* Sort */}
            <div className="relative">
              <label className="block font-semibold mb-1">↕️ Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-blue-500 outline-none bg-white font-bold"
              >
                <option value="">Default</option>
                <option value="az">A–Z</option>
                <option value="za">Z–A</option>
                <option value="employees">Employee Count</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-10 w-4 h-4 text-gray-500 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Per Page */}
            <div className="relative">
              <label className="block font-semibold mb-1">📄 Per Page</label>
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-blue-500 outline-none bg-white font-bold"
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-10 w-4 h-4 text-gray-500 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg transition ${
                view === "grid"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              title="Grid View"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z" />
              </svg>
            </button>

            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-lg transition ${
                view === "table"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              title="Table View"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Reset Filters */}
        {anyFilterActive && (
          <div className="mt-4 text-right">
            <button
              onClick={resetFilters}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Company List */}
      {view === "grid" ? (
        <CompanyGrid companies={paginatedData} loading={loading} />
      ) : (
        <CompanyTable companies={paginatedData} loading={loading} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1 ? "text-gray-400 border-gray-300" : "hover:bg-blue-100"
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages ? "text-gray-400 border-gray-300" : "hover:bg-blue-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Actions;
