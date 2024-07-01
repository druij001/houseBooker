import { useState, useEffect } from 'react'
import {fetchHouses, fetchHouseImages} from './DbAccess'
import HouseCard from './Elements/HouseCard';

export default function Home() {
    const [houses, setHouses] = useState(null);

    useEffect(() => {
        (async () => {
            const h = await fetchHouses();
            setHouses(h);
        })();

        return () => {

        };
    }, [])

    return (
        <div>
        {houses ? <div>
        <h1>Houses</h1>
        <div className='row'>
        {houses.map((house) => (
            <HouseCard
            key={house.id}
            id={house.id} 
            name={`${house.number} ${house.street}`}
            cost={house.cost_per_night}
            />
        ))}</div></div> : <></>}
        </div>
    );
}