import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";

import Carousel from 'react-native-snap-carousel';

import { ActivityIndicator, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";
import { HorizontalSlider } from "../components/HorizontalSlider";

//obtengo el width de mi pantalla movil
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    //usando mi custom hook
    const { nowPlaying, topRated, popular, upcoming, isLoading } = useMovies();

    //en caso de IOS y android es para reconocer el margen top de la pantalla
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* carousel principal*/}
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

            </View>
            <HorizontalSlider
                title="Popular"
                movies={popular}
            />

            <HorizontalSlider
                title="Top Rated"
                movies={topRated}
            />

            <HorizontalSlider
                title="Upcoming"
                movies={upcoming}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    carouselContainer: {
        height: 440,
    },

})