import CardGroup from "../components/CardGroup/CardGroup";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Nabvar"
import CategoriesMenu from "../components/Sub-Menu-Categorias/categoriesmenu";
const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Header/>
        <CategoriesMenu/>
        <CardGroup/>
        </>
     );

}
 
export default Home;