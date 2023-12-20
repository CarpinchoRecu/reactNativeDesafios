import { FlatList } from "react-native";
import categorias_data from "../data/categorias_data.json";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import { useState } from "react";
import PeliculasScreen from "./PeliculasScreen";

const CategoriasScreen = () => {
    const [verPeli, setVerPeli] = useState(false);
    const [peliPorCategoria, setPeliPorCategoria] = useState([]);


    const renderCategorias = ({ item }) => (
        <Categorias setVerPeli={setVerPeli} setPeliPorCategoria={setPeliPorCategoria} categoria={item.nombre} />
    );

    return (
        <>
            {verPeli === true ? (
                <PeliculasScreen peliPorCategoria={peliPorCategoria} setVerPeli={setVerPeli} />

            ) : (
                <>
                    <Header
                        title="PeliFlix"
                        subTitle="Compra una peli, elegi tu categoria favorita"
                    />
                    <FlatList
                        data={categorias_data}
                        renderItem={renderCategorias}
                        keyExtractor={(categoria) => categoria.id}
                    />
                </>
            )}
        </>
    );
};

export default CategoriasScreen;
