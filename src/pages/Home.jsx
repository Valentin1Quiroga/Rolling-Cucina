import { useState } from "react";
import CardGroup from "../components/CardGroup/CardGroup";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Nabvar"
import SearchBar from "../components/SearchBar/SearchBar";
import CategoriesMenu from "../components/Sub-Menu-Categorias/categoriesmenu";
const Home = () => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    
    return ( 
        <>
        <Navbar/>
        <Header/>
        <CategoriesMenu/>
        <div className="fonduki">
        <SearchBar setResults={setResults} search={search} setSearch={setSearch} isSearching={isSearching} setIsSearching={setIsSearching}/>
        <CardGroup results={results}/>
        </div>
        <Footer/>
        </>
     );

}
 
export default Home;