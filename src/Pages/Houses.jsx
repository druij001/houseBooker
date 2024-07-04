import { useState, useEffect } from 'react'
import {fetchHouses} from '../DbAccess'
import HouseCard from '../Elements/HouseCard';

export default function Houses() {
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
        <div className='col'><div className='houseCardCol'>
        {houses.map((house) => (
            <HouseCard
            key={house.id}
            houseId={house.id} 
            name={`${house.number} ${house.street}`}
            cost={house.cost_per_night}
            />
        ))}</div></div></div>
        : <></>}
        </div>
    );
}