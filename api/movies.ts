 export const fetchTopRatedMovies =async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWFlZWFhOTVmNzQwMWUwNWEyMDNkYWQzOTVjMDJmMSIsInN1YiI6IjY1ZTQ1NDM4YTY3MjU0MDE4NWFiMWFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1GAyOsFOmvTzhCY9Wy0Iw0r0SVxqJYoAEIXf0ZHHrK8'
      },
    };
    
        const res = await fetch (url,options) ; 
        if (!res.ok) {
            throw new Error('Failed to fetch ') ;
        }
        const json = await res.json() ;
        // console.log (JSON.stringify(json , null ,2)) ; 
        return json.results ; 
    } ;
        
    export const fetchMovie = async (id:number) => {
     

const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWFlZWFhOTVmNzQwMWUwNWEyMDNkYWQzOTVjMDJmMSIsInN1YiI6IjY1ZTQ1NDM4YTY3MjU0MDE4NWFiMWFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1GAyOsFOmvTzhCY9Wy0Iw0r0SVxqJYoAEIXf0ZHHrK8'
  }
};
const res = await fetch (url,options) ; 
        if (!res.ok) {
            throw new Error('Failed to fetch ') ;
        }
        const json = await res.json() ;
        // console.log (JSON.stringify(json , null ,2)) ; 
        return json ; 

 }
      