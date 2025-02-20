import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get("q") || ""
  );

  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);

  const [searchStyle, setSearchStyle] = useState({
    width: window.innerWidth <= 768 ? "85%" : "35%",
    borderRadius: "100px",
  });

  useEffect(() => {
    const handleResize = () => {
      setSearchStyle((prevStyle) => ({
        ...prevStyle,
        width: window.innerWidth <= 768 ? "85%" : "35%",
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const adjustSearch = () => {
    setSearchStyle((prevStyle) => ({
      width:
        window.innerWidth <= 768
          ? prevStyle.width === "85%"
            ? "100%"
            : "100%"
          : prevStyle.width === "35%"
          ? "50%"
          : "50%",
      borderRadius: prevStyle.borderRadius === "100px" ? "0.25rem" : "0.25rem",
    }));
  };

  useEffect(() => {
    fetch("/data/nikedata.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
  
    const fuse = new Fuse(data, {
      keys: ["title", "description", "category"],
      threshold: 0.3,
      includeScore: true,
    });
  
    const result = fuse.search(query).map(({ item }) => item);
    setResults(result);
  }, [query, data]);
  

  return (
    <div className="search h-screen w-full pt-px flex flex-col items-center">
      <div className="search-wrap w-full mt-32 flex items-center justify-center flex-col">
        {/* Search Input/Main */}
        <div
          onClick={adjustSearch}
          style={{
            width: searchStyle.width,
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: searchStyle.borderRadius,
          }}
          className="search-main flex items-center justify-start gap-2 py-2 px-3 bg-gray-200 bg-opacity-15 shadow-md"
        >
          <span className="px-2">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            className="search-input w-full bg-transparent py-1 px-4 focus:outline-none"
            placeholder="Search Nike"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              navigate(`?q=${e.target.value}`); // Update URL
            }}
          />
        </div>

        {/* Search Results */}
        <div className="search-result-container w-full max-w-2xl mt-5 max-h-96 overflow-auto shadow-md rounded-md bg-gray-200 bg-opacity-15">
          {results.length > 0
            ? results.map((item) => (
                <div
                  key={item.id}
                  className="py-2 px-3 cursor-pointer hover:bg-gray-100 hover:bg-opacity-5"
                  onClick={() => navigate(`/shopall/productdetails/${item.id}`)}
                >
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.description.slice(0, 80)}...
                  </p>
                </div>
              ))
            : query && (
                <p className="p-2 text-gray-500 text-center">
                  No results found
                </p>
              )}
        </div>
      </div>

      <div
        className="navigati-badge text-xs py-2 px-4 rounded bg-gray-300 text-black cursor-pointer fixed bottom-4 right-4 hover:scale-90"
        style={{
          transition: "all 0.6s cubic-bezier(0.83, 0, 0.17, 1)",
        }}
        onClick={() => navigate(-1)}
      >
        Close
      </div>
    </div>
  );
};

export default Search;
