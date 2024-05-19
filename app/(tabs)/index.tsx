import { StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { View } from '@/components/Themed';
//import { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '@/api/movies';
import { useQuery } from '@tanstack/react-query';
import MovieListeItem from '@/components/MovieListeItem';

// Define the type for your movie item
type MovieItem = {
  id: number;
  title: string; 
  poster_path : string ;

  // Add other properties if there are more
};

export default function TabOneScreen() {
  const {
    data : Movies , 
    isLoading , 
    error ,
  } = useQuery({
      queryKey : ['movies'] ,
      queryFn : fetchTopRatedMovies,
  });
//   const [Movies, setMovies] = useState<MovieItem[]>([]);
//   const [isLoading , setIsLoading] = useState (false) ; 
//  const [error,setError] = useState(null ) ;
//   useEffect(() => {
//     const fetchMovies = async () => { 
//       setIsLoading(true) ; 
//       try {
//         const movies = await fetchTopRatedMovies();
//         // console.log (movies) ;
//         setMovies(movies); 
//       } catch(e) {
//         setError(error)
//       }
//       setIsLoading(false) ;
//     };
//     fetchMovies();
//   }, []);
//    if (isLoading) {
//     return <ActivityIndicator/>
//    } 
//    if (error) {
//     return <Text> erreur </Text>
//    }
if (isLoading) {
  return <ActivityIndicator/>
} 
if (error) {
  return <Text> {error.message}</Text>
}
  return (
    <View style={styles.container}>
      <FlatList
        data={Movies} 
        numColumns={2} 
        contentContainerStyle = {{gap: 5}} 
        columnWrapperStyle = {{gap: 5 }}
        renderItem={({ item }: { item: MovieItem }) => (
          <MovieListeItem movie={item}/>
        )}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
