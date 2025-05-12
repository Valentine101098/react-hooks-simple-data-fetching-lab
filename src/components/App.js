// create your App component here
import React, { useState, useEffect} from "react"
export default function App() {
    const[image, setImage] = useState("")
    const[loaded, setLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data)=> {
            setImage(data.message);
            setLoaded(true)
        });
    },[])
    if(!loaded) return <p>Loading...</p>;
    return(
        <div>
           <img src={image} alt="A Random Dog" />
        </div>
    )
}