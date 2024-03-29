import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Cast } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";
import currencyFromatter from 'currency-formatter';
import { CastItem } from "./CastItem";

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}


export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 10 }}>
                        - {movieFull.genres.map(genero => genero.name).join(', ')}
                    </Text>

                </View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}> Historia:</Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
                <Text style={{ fontSize: 23, marginTop: 10, color: 'black' }}>Presupuesto:</Text>
                <Text>{currencyFromatter.format(movieFull.budget, { code: 'USD' })}</Text>
            </View>
            <View style={{ marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black', marginHorizontal: 20 }}>
                    Actores:
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />

            </View>
        </>
    )
}