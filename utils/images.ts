import { PEXELS_TOKEN } from "./envVariables";
import { createClient , ErrorResponse, Photo, PhotosWithTotalResults} from 'pexels';
const client = createClient(PEXELS_TOKEN);

export type PexelsImageSize = keyof Photo["src"]

export async function getBase64EncodingFromUri(uri:string){
  console.log("start fetching")
  const imagesProps = await (
    await fetch("/api/getbase64FromUri", {
      method: "POST",
      body: JSON.stringify({ uri }),
    })
  ).json(); // wrote for demonstration
  return imagesProps
}


export async function getRandomPexelsImage(size?:PexelsImageSize, query?:string):Promise<any>{
  
  let result:any; 
  let error:string;
  
  if(query){
   const res = await client.photos.search({query})
   error = (res as ErrorResponse).error; 
  const { photos, } = (res as PhotosWithTotalResults);
  result = photos[Math.floor(Math.random() * photos.length)];
  }else {
    result = await client.photos.random()
    error = (result as ErrorResponse).error; 
  }
  
  if(error){
    return handleError(error)
  }
  
  const {width, height, src, photographer} = (result as Photo);
   return {
    width,
    height,
    alt: `a photo by ${photographer}`,
    url: (size && src[size]) || src["original"],
   }
}

function handleError(error:string){
  console.log("something when wrong")
    alert(`Pexels responds with error in usePexelsRandomImage: ${error}`)
    return {
        width: 600,
        height: 600,
        url: "https://picsum.photos/600/600",
        alt: "placeholder image",
        size: 0
    }
}