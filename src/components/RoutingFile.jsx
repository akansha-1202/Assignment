import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Sum from './Sum'
import AppendString from './AppendString'
import CountWords from './CountWords'
import NavBar from './NavBar'


const RoutingFile = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Sum/>}/>
            <Route path="/appendString" element={<AppendString/>}/>
            <Route path="/countWords" element = {<CountWords/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutingFile