import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Pressable } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchMovie } from '@/api/movies';
import { Feather } from '@expo/vector-icons';

const MovieDetails = () => { 
    const { id } = useLocalSearchParams(); 
    const [selected, setSelected] = useState(false); // Ensure useState is called unconditionally
    const {
        data: movie, 
        isLoading, 
        error
    } = useQuery({
        queryKey: ['movies', id], 
        queryFn: () => fetchMovie(id),
    }); 

    if (isLoading) {
        return <ActivityIndicator/>;
    } else if (error) {
        return <Text>Failed to fetch</Text>;
    } 
    
    const pressed = () => {
        setSelected(true);
    };

    return (
        <View>  
            <Stack.Screen options={{ title: movie.title }} />
            <Image
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path }}
                style={{ width: '100%', height: 300 }}
            /> 
            <View style={{ padding: 20 }}>
                <Text style={styles.colorid}>MovieDetails : {movie.title}</Text>  
                <View style={{ backgroundColor: 'red', marginVertical: 10 }}>
                    <Pressable onPress={pressed} style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Feather name="bookmark" size={24} color={selected ? 'blue' : 'white'} /> 
                        <Text>Add to watchlist</Text>
                    </Pressable>
                </View>
                <Text style={{ fontSize: 16, color: 'white' }}>MovieDetails : {movie.overview}</Text>
            </View>
        </View>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    colorid: {
        color: 'white',
        fontSize: 30, 
        fontWeight: '500', 
        marginVertical: 10,  
    },
});
