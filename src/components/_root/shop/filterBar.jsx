import React from "react";

const FilterBar = ({
  handleSortChange,
  handleItemsPerPageChange,
  handleSearch,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-400 p-4 mb-4">
      {/* Items per page */}

      {/* Search bar */}
      <div className="md:flex hidden items-center gap-6">
        <div className="">
          <h1 className="text-gray-900 font-semibold flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"
              />
            </svg>
            Filter
          </h1>
        </div>

        <div className="border-s border-gray-900 px-4">
          <p>Showing 1-16 of 32 results</p>
        </div>
        <div className="hidden">
          <input
            type="text"
            id="search"
            onChange={(e) => handleSearch(e.target.value)}
            className="ml-2 px-2 py-2.5 border border-gray-300 text-sm w-[800] rounded-md"
            placeholder="Search Product or Category"
          />
        </div>
      </div>

      {/* Sort by */}
      <div className="flex flex-row items-center justify-between gap-[6em]">
        <div className="flex flex-col md:flex-row items-start justify-start gap-3">
          <label htmlFor="itemsPerPage">Show</label>
          <select
            name="itemsPerPage"
            id="itemsPerPage"
            onChange={(e) => handleItemsPerPageChange(e.target.value)}
            className="px-2 py-2.5 border border-gray-300 rounded-md"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-start gap-3">
          <label htmlFor="sort">Sort by</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-2 py-2.5 border border-gray-200 rounded-md"
          >
            <option value="price-asc">Default</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="date-asc">Date: Old to New</option>
            <option value="date-desc">Date: New to Old</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
