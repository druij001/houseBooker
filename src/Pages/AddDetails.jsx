import { useParams } from "react-router-dom";
import { insertHouseDetails } from "../DbAccess";

export default function AddDetails() {
    let {houseId} = useParams(null); 

    function submitDetails(f) {
        f.preventDefault();
        let form = new FormData(f.target);

        let pre = form.get("pre");
        let during = form.get("during");
        let post = form.get("post");

        let cost = form.get("cost");
        
        let pub = form.get("pub");
        let pubBool = false;
        if(pub == 'on'){pubBool = true;} 

        if(pre && during && post && cost) {
            alert(`INSERTING: ${pre}, ${during}, ${post}, ${cost}, ${pubBool}`);
            insertHouseDetails(houseId, pre, during, post, cost, pubBool);
        } else {
            alert(`Fill out all fields: ${pre}, ${during}, ${post}, ${cost}, ${pubBool}`);
        }
    }
    
    return (
        <div>
            <h1>Let's add some details</h1>

            <form method='post' onSubmit={submitDetails} className="form-widget">
                <input name="cost" type="number" placeholder="Cost per night" />
                <div className="column">
                    <h3>What should people be aware of before they book?</h3>
                    <input name="pre" type="text" placeholder=""></input>
                </div>
                <div className="column">
                    <h3>What should people be aware of during their stay?</h3>
                    <input name="during" type="text" placeholder=""></input>
                </div>
                <div className="column">
                    <h3>What do you need people to do before they leave?</h3>
                    <input name="post" type="text" placeholder=""></input>
                </div>
                <div>
                    <input name="pub" type="checkbox"/>
                    <label>Make available to public</label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}