import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Badge Component
function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded ${className}`}
    >
      {children}
    </span>
  );
}

// LocalStorage hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {}
  };

  return [storedValue, setValue];
}

// CompanyCard Component
export default function CompanyCard({ company }) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage("companygrid-favorites", []);
  const isFav = favorites.includes(company.id);

  const toggleFav = (e) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(company.id) ? prev.filter((id) => id !== company.id) : [...prev, company.id]
    );
  };

  const initials = company.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      className="group flex flex-col rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      whileHover={{ rotate: 0.2 }}
      onClick={() => navigate(`/details/${company.id}`)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white grid place-items-center font-bold shadow shrink-0">
            {initials}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{company.name}</h3>
            <p className="text-gray-500 text-sm">{company.tagline}</p>
          </div>
        </div>
        <button
          onClick={toggleFav}
          className={`flex items-center gap-1 px-3 py-1 rounded-full border ${
            isFav ? "bg-blue-500 text-white" : "border-gray-300 text-gray-700"
          }`}
          aria-label={isFav ? "Unfavorite" : "Favorite"}
        >
          <Star className={`h-4 w-4 ${isFav ? "fill-current" : ""}`} />
          <span className="hidden sm:inline">{isFav ? "Favorited" : "Favorite"}</span>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{company.industry}</Badge>
        <Badge>{company.location}</Badge>
        <Badge>Founded {company.founded}</Badge>
        <Badge className="ml-auto">👥 {company.employees.toLocaleString()}</Badge>
      </div>
    </motion.div>
  );
}
