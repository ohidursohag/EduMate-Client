import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
const SearchBar = () => {
  return (
    <div className="relative ">
      <input
        type="search"
        placeholder="Search"
        name=""
        id=""
        className="peer outline-none bg-transparent border duration-500 border-gray-500 focus:border-secondary  text-gray-100 pl-14  rounded-[40px_10px_10px_10px] py-2 placeholder:font-semibold placeholder:text-gray-100 focus:placeholder:text-transparent max-w-[220px]"
      />
      <span className="peer-focus:text-secondary duration-500 absolute top-3  text-gray-100 left-6">
        <FaSearch size={20} />
      </span>
    </div>
  );
};

export default SearchBar;
