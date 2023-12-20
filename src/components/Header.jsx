import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const Header = ({ title, subTitle }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        borderBottomWidth: 2,
        borderBottomColor: colors.black,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: colors.black,
        fontSize: 26,
        fontFamily:"JosefinSans"
    },
    subTitle: {
        color: colors.darkGray,
        fontSize: 16,
        textAlign: "center",
        marginTop: 8,
        fontFamily:"JosefinSans"
    },
});
