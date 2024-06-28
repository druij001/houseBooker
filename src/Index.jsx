import Account from './Account'
import Home from './Home'
import Layout from './Layout'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Index({id, session}) {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Account key={id} session={session} />} />
            <Route path="Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}