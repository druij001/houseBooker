import { useEffect, useState } from "react";
import { fetchHouseDetails, fetchHouseImages, fetchImageURL } from "../DbAccess";
import { useParams } from "react-router-dom";

export default function HouseDetails() {
    let {houseId} = useParams(null); 

    const [costPerNight, setCostPerNight] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const [pub, setPub] = useState(null);

    const [imageUrls, setImageUrls] = useState([]);

    const [number, setNumber] = useState(null);    
    const [state, setState] = useState(null);
    const [street, setStreet] = useState(null);
    const [suburb, setSuburb] = useState(null);
    const [postcode, setPostcode] = useState(null);

    const [postStayInfo, setPostStayInfo] = useState(null);
    const [preStayInfo, setPreStayInfo] = useState(null);
    const [stayInfo, setStayInfo] = useState(null);
   
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        getHouseDetails();
    }, [])

    async function getHouseDetails() {
        var data = await fetchHouseDetails(houseId);
        
        if(data) {
            setImageUrls(await retrieveAllImages());
            console.log(imageUrls);

            console.log(data.cost_per_night);
            setCreatedAt(data.created_at);
            setPub(data.public);
            
            setNumber(data.number);    
            setState(data.state);
            setStreet(data.street);
            setSuburb(data.suburb);
            setPostcode(data.postcode);
        
            setPostStayInfo(data.post_stay_info);
            setPreStayInfo(data.pre_stay_info);
            setStayInfo(data.stay_info);
           
            userId, setUserId(data.user_id);
        }
    }

    async function retrieveAllImages() {
        const images = await fetchHouseImages(houseId);

        if(images.length > 0) {
            const result = await Promise.all(images.map(async (image) => {
                return await retrieveImageUrl(image);
            })).then(res => {return res});
            return result;
            }

            return null;
        }

    async function retrieveImageUrl(image){
        var url = await fetchImageURL(houseId, image.name);
        return url.publicUrl;
    }

    return (
        <div>
            <h1>{`${number} ${street} ${suburb}`}</h1>
            <p>{`${state}, ${postcode}`}</p>

            {imageUrls && imageUrls.map((img, i) => (
                <div key={i}>
                    <img src={img} className="housePhoto"/>
                </div>
            ))}
        </div>
    )
}