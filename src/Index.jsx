import Account from './Account'
import Home from './Home'
import Layout from './Layout'
import Add from './Pages/Add'
import AddDetails from './Pages/AddDetails'
import AddImages from './Pages/AddImages'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Index({id, session}) {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Account key={id} session={session} />} />
            <Route path="Home" element={<Home />} />
            <Route path="Add" element={<Add/>} />

            <Route path=":houseId/AddImages" element={<AddImages/>} />
            <Route path=":houseId/AddDetails" element={<AddDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}