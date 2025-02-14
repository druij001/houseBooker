import { supabase } from './supabaseClient'


export async function fetchHouses() {
    const {data} = await supabase.from('Houses').select();
    if (data) 
        return data;
    else 
        console.log("ERR: Get Houses");
}

export async function fetchHouseDetails(houseId) {
  const {data, error} = await supabase.from('Houses')
  .select()
  .eq('id', houseId).single();

  if(error) {
    console.log(error);
  } else {
    return data;
  }
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

export async function fetchBookingDetails(bookingId) {
  
  const {data, error} = await supabase.from("Booking")
  .select()
  .eq('id', bookingId)
  .single();

  if(error) {
    alert('error', error);
  } else {
    return data;
  }
}

export async function fetchBookings() {
  const {data, error} = await supabase.from('Booking')
  .select(`
    id, created_at, start_date, end_date, num_people, message, is_confirmed,
    Houses (id, cost_per_night, number, street, suburb, state, user_id),
    profiles (id, full_name)`);

  if(error) {
    console.log(error);
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

export async function insertHouseDetails(houseId, pre, dur, post, cost, pub) {

  const {data, error} = await supabase.from('Houses')
  .update({pre_stay_info: pre, post_stay_info: post, stay_info: dur, cost_per_night: cost, public: pub})
  .eq("id", houseId)
  .select().single();

  if(error) {
    console.log("Error inserting details");
  } else {
    console.log(data);
    return data;
  }
}

export async function updateBookingApproval(bookingId, approvalStatus) {
  const {data, error} = await supabase.from('Booking')
  .update({is_confirmed: approvalStatus})
  .eq('id', bookingId)
  .select().single();

  if(error) {
    console.log("Error updating", bookingId);
  } else {
    return data;
  }
}

export async function insertBookingDetails(houseId, startDate, endDate, numPeople, message) {
  const {data, error} = await supabase.from("Booking")
  .insert({house_id: houseId, start_date: startDate, end_date: endDate, num_people: numPeople, message: message})
  .select().single();

  if(error) {
    console.log("E", error);
  } else {
    return data;
  }
}