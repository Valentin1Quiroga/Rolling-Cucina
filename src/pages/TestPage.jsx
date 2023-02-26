import CardGroup from "../components/CardGroup/CardGroup";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Nabvar";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoriesMenu from "../components/Sub-Menu-Categorias/CategoriesMenu";


const TestPage = () => {
    return ( 
    <>
     <Navbar/>
     
     <Header/>
    <CategoriesMenu/>
    <SearchBar setResults={setResults} search={search} setSearch={setSearch} isSearching={isSearching} setIsSearching={setIsSearching}/>

     <CardGroup/> 

     </>
    
     );

}
 
export default TestPage;