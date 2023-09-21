import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";

import CityList from "./componenet/CityList";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
// dist/assets/index-59fcab9b.css   30.56 kB │ gzip:   5.14 kB
// dist/assets/index-f7c12d89.js   572.44 kB │ gzip: 151.29 kB

const base_url = "http://127.0.0.1:8000"
function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const fetchCities = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`${base_url}/cities`)
        const data = await res.json()
        // setCities(data)
      } catch {
        alert('there was an error fetching')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])


  return (
    <>
      {/* <AppLayout /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} >
            <Route index element={<CityList cities={cities} />} />
            <Route path="countries" element={<p>countries</p>} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          </Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
