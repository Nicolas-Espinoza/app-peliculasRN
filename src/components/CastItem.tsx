import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { Cast } from "../interfaces/creditsInterface";


interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (<Image source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                />)
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,

        elevation: 10,
        marginHorizontal: 20,
        marginLeft: 10,
        paddingRight: 15
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }

});