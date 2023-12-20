import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import peliculas_data from "../data/peliculas_data.json";

const Categorias = ({ categoria, setVerPeli, setPeliPorCategoria }) => {

    const filtrarPeliculasPorCategoria = () => {
        const peliculasFiltradas = peliculas_data.filter(
            (pelicula) => pelicula.categoria === categoria
        );
        setPeliPorCategoria(peliculasFiltradas);
        setVerPeli(true)
    };

    return (
        <TouchableOpacity onPress={filtrarPeliculasPorCategoria}>
            <View style={styles.container}>
                <Text style={styles.categoryText}>{categoria}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Categorias;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginBottom: 8,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },
    categoryText: {
        fontFamily: "JosefinSans",
        fontSize: 20,
        color: colors.darkGray,
    },
});
