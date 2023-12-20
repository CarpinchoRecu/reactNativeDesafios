import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from "../global/colors";

const BotonEsquina = ({ onPress, texto }) => {
    return (
        <TouchableOpacity style={styles.boton} onPress={onPress}>
            <Text style={styles.textoBoton}>{texto}</Text>
        </TouchableOpacity>
    );
};

export default BotonEsquina;

const styles = StyleSheet.create({
    boton: {
        position: 'absolute',
        top: 30,
        left: 10,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textoBoton: {
        color: colors.darkGray,
        fontFamily:"JosefinSans"
    },
});
