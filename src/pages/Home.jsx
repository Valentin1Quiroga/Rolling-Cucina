import { useContext, useState } from "react";
import BotonCarrito from "../components/BotonCarrito/BotonCarrito";
import CardGroup from "../components/CardGroup/CardGroup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Nabvar"
import SearchBar from "../components/SearchBar/SearchBar";
import CategoriesMenu from "../components/Sub-Menu-Categorias/categoriesmenu";
import { PedidosContext } from "../context/PedidosContext";
const Home = () => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const {
        
        pedidos,
        setPedidos,
    
      } = useContext(PedidosContext);
    console.log(pedidos);
    return ( 
        <>
        <Navbar/>
        <Header/>
        <CategoriesMenu/>
        <div className="fonduki">
        <SearchBar setResults={setResults} search={search} setSearch={setSearch} isSearching={isSearching} setIsSearching={setIsSearching}/>
        <CardGroup results={results}/>
        </div>
        {pedidos.length>0&&<BotonCarrito/>}
        <Footer/>
        </>
     );

}
 
export default Home;