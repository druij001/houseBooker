import { supabase } from './supabaseClient'


export async function fetchHouses() {
    const {data} = await supabase.from('Houses').select();
    if (data) 
        return data;
    else 
        console.log("ERR: Get Houses");
}