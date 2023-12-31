import React from 'react'
import ReactDOM from 'react-dom/client'
import CountryCapitalGame from './CountryCapitalGame.tsx'
import CountryCapitalGame2 from './CountryCapitalGame2.tsx'
import CountryCapitalGame3 from './CountryCapitalGame3.tsx'

const data: {[key:string]: string} = {"Germany": "Berlin", "France": "Paris", "Russia": "Moscow"}
const data2: {[key:string]: string} = {"Italy": "Rome", "poland": "Warsaw"}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountryCapitalGame3 data={data}/>
  </React.StrictMode>,
)
