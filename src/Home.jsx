import { useState, useEffect } from 'react'
import {fetchHouses} from './DbAccess'
import HouseCard from './Elements/HouseCard';

export default function Home() {
    const [houses, setHouses] = useState(null);

    useEffect(() => {
        (async () => {
            const h = await fetchHouses();
            setHouses(h);
            console.log(await h);
        })();

        return () => {

        };
    }, [])

    console.log(houses);
    return (
        <div>
        {houses ? <div>
        <h1>Houses</h1>
        <div className='row'>
        {houses.map((house) => (
            <HouseCard
            key={house.id} 
            name={house.house_name}
            cost={house.cost_per_night}
            photo={house.photo}
            />
        ))}</div></div> : <></>}
        </div>
    );
}