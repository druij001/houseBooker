import { supabase } from './supabaseClient'


export async function fetchHouses() {
    const {data} = await supabase.from('Houses').select();
    if (data) 
        return data;
    else 
        console.log("ERR: Get Houses");
}

export async function fetchHouseImages(houseId) {
  const { data, error } = await supabase
  .storage
  .from("house_photos")
  .list(houseId, {limit: 5})

  if(error) {
    console.log("error retrieving photos");
  } else {
    return data;
  }
}

export async function fetchImageURL(houseId, fileName) {
  const {data, error} = supabase
  .storage
  .from('house_photos')
  .getPublicUrl(`${houseId}/${fileName}`);

  if(error) {
    return null;
  } else {
    return data;
  }
}

export async function uploadHouseImage(houseId, file) {
    console.log(houseId);
    const { data, error } = await supabase.storage.from('house_photos')
  .upload(`${houseId}/${file.name}`, file, {
    cacheControl: '3600',
    upsert: true
  })

  if(error) {
    console.log("error uploading file!")
  } else
    console.log("D: ", data);
    return data.fullPath;
}

export async function insertHouse(nm, str, sb, sta, po) {

    const {data, error} = await supabase.from('Houses')
    .insert({number: nm, street: str, suburb: sb, state:sta, postcode: po})
    .select().single();

    if(error) {
        return null;
    } else {
        return data;
    }
}

export async function insertHouseImage(path, houseId) {
  console.log("HID: ", houseId);
  console.log("inserting: ", path);
  
  const {data, error} = await supabase.from('Houses')
  .update({photosPath: path})
  .eq("id", houseId)
  .select();

  if(error) {
    console.log("Error inserting house image");
  } else {
    console.log(data);
    return data;
  }
}