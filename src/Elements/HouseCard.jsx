export default function HouseCard({name, cost, photo}) {
    return (
        <button className="houseCard">
            <h2>{name}</h2>
            <img src={photo} className="housePhoto"/>
            <p>${cost} per night</p>
        </button>
    );
}