import { useEffect, useState } from "react";
import { Alert, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import "./searchBar.css";

const SearchBar = ({
  setResults,
  search,
  setSearch,
  isSearching,
  setIsSearching,
}) => {
  const [buscadont, setBuscadont] = useState(false);
  const doSearch = async () => {
    try {
      const { data } = await axios.get(`/menu`);
      const menus = data.menus;

      let buscado = menus.filter((item) => {
        const contenido = item.name.toLowerCase().replace(/\s+/g, "");
        return contenido.includes(search.toLowerCase().replace(/\s+/g, ""));
      });
      if (search === "") {
        setResults([]);
      } else {
        setResults(buscado);
        console.log(buscado);
      }
      setIsSearching(false);
      if (buscado.length == 0) {
        setBuscadont(true);
        toast.info(" MAMMA MIA! il plato no esta en nuestra carta", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
  };
  useEffect(() => {
    if (isSearching) {
      doSearch();
    }
  }, [search]);
  return (
    <div className="buscador-container  bg-white mt-3">
      <form className="buscador search-bar d-flex">
        <input
          key="randomKey"
          placeholder=""
          type="text"
          maxLength={30}
          value={search}
          className=""
          required
          onChange={handleChange}
        />
        <button className="search-btn">
          <span>Buscar</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
