import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from "./MoviePoster";

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{
            height: title ? 270 : 220
        }}>
            {title && <Text style={[styles.popularesTitle]}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={150} height={220} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    popularesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black'
    }
})