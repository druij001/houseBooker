import { insertHouse } from "../DbAccess";

export default function Add ({}) {

    async function addNewHouse(f) {
        f.preventDefault();
        let form = new FormData(f.target);

        let num = form.get("number");
        let str = form.get("street");
        let sub = form.get("suburb");
        let sta = form.get("state");
        let pc = form.get("postCode");

        if(num && str && sub && sta && pc) {
            let data = await insertHouse(num, str, sub, sta, pc);
            if(data) {
                let houseId=data.id;
                window.location.href=`/Add/${houseId}`;
                console.log(data.id);
            }
        }
        else {
            alert(`${num}, ${str}, ${sub}, ${sta}, ${pc}`);
        }
    }

    return (
        <div>
            <h1>New House</h1>

            <form method='post' onSubmit={addNewHouse} className="form-widget">
                <div className="col">
                    <div className="row">
                    <input name="number" type="text" placeholder="Number"/>
                    <input name="street" type="text" placeholder="Street"/>
                    </div>
                    <input name="suburb" type="text" placeholder="Suburb"/>
                    <div className="row">
                    <input name="state" type="text" placeholder="State"/>
                    <input name="postCode" type="text" placeholder="Post code"/>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        
    )
}