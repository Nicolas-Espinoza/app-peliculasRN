import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import { Movie } from "../interfaces/movieInterface";
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetails } from "../components/MovieDetails";

//parametros del navigation , pantalla a la que pertenece el parametro
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route }: Props) => {

    //le digo que a mi variable movie la interprete como una interface
    //const movie = route.params as Movie;

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>
            </View>


            {isLoading ? <ActivityIndicator size={35} color="grey" style={{
                marginTop: 20
            }} /> : <MovieDetails movieFull={movieFull!} cast={cast} />}

            <View style={styles.backButton}>
                <TouchableOpacity

                >
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={60}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    titleContainer: {
        marginHorizontal: 25,
        marginTop: 20
    },
    subTitle: {
        fontSize: 18,
        opacity: 0.8
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }
});