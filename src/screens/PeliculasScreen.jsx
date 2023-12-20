import { FlatList } from "react-native";
import Header from "../components/Header";
import Peliculas from "../components/Peliculas";
import BotonEsquina from "../components/BotonEsquina";

const PeliculasScreen = ({ setVerPeli, peliPorCategoria }) => {
    const handleCerrarPeli = () => {
        setVerPeli(false);
    };

    const renderPeliculas = ({ item }) => <Peliculas pelicula={item} />;

    return (
        <>
            <Header title="Peliculas" subTitle="Todas tus pelis favoritas" />
            <BotonEsquina texto="Atras" onPress={handleCerrarPeli} />
            <FlatList
                data={peliPorCategoria}
                renderItem={renderPeliculas}
                keyExtractor={(item) => item.id}
            />
        </>
    );
};

export default PeliculasScreen;
