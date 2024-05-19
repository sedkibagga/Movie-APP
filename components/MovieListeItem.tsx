import React from 'react';
import { View, Text, TextStyle, ViewStyle,Image ,useWindowDimensions , Pressable } from 'react-native';
import { Link } from 'expo-router';
interface MovieListItemProps {
  movie: {
    id: number; 
    title: string;
    poster_path : string ;
    // Add other properties if there are more
  };
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  
  return ( 
    <Link href={`/${movie.id}`} asChild >
    <Pressable key={movie.id} style={styles.container}>
      
        <Image source={{

            uri :'https://image.tmdb.org/t/p/w500'+movie.poster_path ,
        }} style ={{width : '100%' , aspectRatio : 3/5 ,  }}/>
      <Text style={styles.title}>Title: {movie.title}</Text>
    </Pressable> 
    </Link>
  );
};

const styles = {
  container: {
    padding: 10,  
    flex: 1 ,
  } as ViewStyle,
  title: {
    color: 'white',
    marginTop:10 ,
  } as TextStyle,
};

export default MovieListItem;
