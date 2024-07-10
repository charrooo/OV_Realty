import React from 'react'
import Title from './Component/Title'
import Data from './Component/Data'
import Photo from './Component/Photo'
import About from './Component/About'
import Footer from './Component/Footer'

function App() {
  
  return (
    <div>
    <Title/>
    <Data/>
    <br/>
    <div className="flex items-center justify-center w-full h-full">
  <h1 className="text-3xl font-bold text-blue-950">What we offer</h1>
</div>
<br/>
    <Photo/>
    <br/>
    <About/>
    <Footer/>

    </div>
  )
}

export default App
