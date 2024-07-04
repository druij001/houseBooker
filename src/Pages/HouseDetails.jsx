import { useEffect, useState } from "react";
import { fetchHouseDetails, fetchHouseImages, fetchImageURL } from "../DbAccess";
import { useParams } from "react-router-dom";

export default function HouseDetails() {
    let {houseId} = useParams(null); 

    const [imageUrls, setImageUrls] = useState([]);

    const [number, setNumber] = useState(null);    
    const [state, setState] = useState(null);
    const [street, setStreet] = useState(null);
    const [suburb, setSuburb] = useState(null);
    const [postcode, setPostcode] = useState(null);

    const [costPerNight, setCostPerNight] = useState(null);
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
            
            setNumber(data.number);    
            setState(data.state);
            setStreet(data.street);
            setSuburb(data.suburb);
            setPostcode(data.postcode);
        
            setPostStayInfo(data.post_stay_info);
            setPreStayInfo(data.pre_stay_info);
            setStayInfo(data.stay_info);
           
            setCostPerNight(data.cost_per_night);
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

    function redirectToStay() {
        window.location.href = `/Houses/${houseId}/Book`
    }

    return (
        <div>
            <h1>{`${number} ${street}, ${suburb}`}</h1>
            <div className="col">
                <h3>${costPerNight} per night</h3>
            </div>

            <div>
                <button onClick={redirectToStay} style={{margin: '10px'}}>Stay Here</button>
            </div>

            {imageUrls && 
            <div className="houseCardCol">
            {imageUrls.map((img, i) => (
                    <img key={i} src={img} className='houseDetailImg'/>
            ))}
            </div>}

            <div>
                <h2>Details about this house</h2>
                <div>
                    <p>{preStayInfo}</p>
                </div>
                <div>
                    <p>{stayInfo}</p>
                </div>
                <div>
                    <p>{postStayInfo}</p>
                </div>
            </div>
        </div>
    )
}