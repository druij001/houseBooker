import { useEffect, useState } from "react";
import { fetchHouseImages, fetchImageURL } from "../DbAccess";

export default function HouseCard({id, name, cost}) {
    
    const [imageUrl, setImageUrl] = useState("");
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        retrieveAllImages();
    }, [])

    async function retrieveAllImages() {
        const images = await fetchHouseImages(id);
        await setAllImages(images);
        images.length > 0 && retrieveImageUrl(images[0]);
    }

    async function retrieveImageUrl(image){
        console.log("IMG:", image.name)
        var url = await fetchImageURL(id, image.name);
        setImageUrl(url.publicUrl);
    }

    return (
        <button className="houseCard">
            <h2>{name}</h2>
                <img src={imageUrl} className="housePhoto"/>
            <p>${cost} per night</p>
        </button>
    );
}