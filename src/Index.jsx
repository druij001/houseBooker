import Account from './Account'
import Houses from './Pages/Houses'
import Layout from './Layout'
import Add from './Pages/Add'
import AddDetails from './Pages/AddDetails'
import AddImages from './Pages/AddImages'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetails from './Pages/HouseDetails'

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
            <Route path=":Houses/:houseId" element={<HouseDetails />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
}