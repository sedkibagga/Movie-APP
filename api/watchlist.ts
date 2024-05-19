export const addMovieToWatchList = async (movieId: number) => { 
   

const url = 'https://api.themoviedb.org/3/account/21054909/watchlist';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWFlZWFhOTVmNzQwMWUwNWEyMDNkYWQzOTVjMDJmMSIsInN1YiI6IjY1ZTQ1NDM4YTY3MjU0MDE4NWFiMWFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1GAyOsFOmvTzhCY9Wy0Iw0r0SVxqJYoAEIXf0ZHHrK8'
  } , 
  body : JSON.stringify ({
    media_type : 'movie' , 
    media_id : movieId , 
    watchList: true , 
  })
};

const res = await fetch (url,options) ; 
        if (!res.ok) {
            throw new Error('Failed to fetch ') ;
        }
        const json = await res.json() ;
        // console.log (JSON.stringify(json , null ,2)) ; 
        return json ; 
}