export const getGifs = async(category) => {
    //const apiKey = 'ms1cq6nfuuLVzxbip9lGF7D0LMpSElQL';
    const resp   = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ms1cq6nfuuLVzxbip9lGF7D0LMpSElQL&q=${category}&limit=25&offset=0&rating=g&lang=en`);
    const{ data } =await resp.json();
    

   const gifs = data.map(gif=>{
     return{
         id:gif.id,
         title:gif.title,
         img:gif.images.original.url
     }
   })
   
   return gifs;
   } 
   