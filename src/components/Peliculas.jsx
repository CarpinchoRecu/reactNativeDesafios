import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const Peliculas = ({ pelicula }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{pelicula.nombre_pelicula}</Text>
            <Text style={styles.category}>{pelicula.categoria}</Text>
        </View>
    );
};

export default Peliculas;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: colors.darkGray,
        textAlign: "center",
        fontFamily:"JosefinSans"

    },
    category: {
        fontSize: 12,
        color: colors.accent,
        fontFamily:"JosefinSans"

    },
});