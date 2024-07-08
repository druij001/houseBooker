import Account from './Account'
import Houses from './Pages/Houses'
import Layout from './Layout'
import Add from './Pages/Add'
import AddDetails from './Pages/AddDetails'
import AddImages from './Pages/AddImages'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetails from './Pages/HouseDetails'
import BookStay from './Pages/BookStay'
import BookingComplete from './Pages/BookingComplete'
import BookingRequests from './Pages/BookingRequests'

export default function Index({id, session}) {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Account key={id} session={session} />} />
            <Route path="Houses" element={<Houses />} />
            <Route path="Add" element={<Add/>} />

            <Route path=":houseId/AddImages" element={<AddImages/>} />
            <Route path=":houseId/AddDetails" element={<AddDetails/>} />
            <Route path="Houses/:houseId" element={<HouseDetails />}/>
            <Route path="Houses/:houseId/Book" element={<BookStay />}/>
            <Route path="Booking/:bookingId/complete" element={<BookingComplete />} />
            <Route path="bookingRequests" element={<BookingRequests/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}