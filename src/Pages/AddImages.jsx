import { useEffect, useState } from "react";
import { uploadHouseImage } from "../DbAccess";
import {useParams} from 'react-router-dom'

export default function AddImages () {

    const [imgs, setImgs] = useState([]);
    let { houseId } = useParams(null);

    useEffect(() => {
        console.log(imgs);
        console.log(houseId);
    }, [imgs])

    async function handleUploadFiles(files) {
        const images = [...imgs];
        files.some(async (file) => {
        if(file.size > 2000000) {
            alert(`that file is ${file.size/1000000}mb, which is too big!`);
        } else {
        images.push(file);
        uploadHouseImage(houseId, file);
        }
    })
        setImgs(images);
    }
    
    function handleFileEvent(e) {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    return (
        <div>
            <h1>Let's add some images!</h1>
            <div className="col">
            <input id="photos" type="file" placeholder="Image" accept="image/*" multiple onChange={(f) => handleFileEvent(f)}/>
            {imgs.map((img, i) => (
                <button key={i}>{img.name}</button>
            ))}
            </div>
            <button onClick={window.location.href=`/${houseId}/AddDetails`}>Done</button>
        </div>
        
    )
}