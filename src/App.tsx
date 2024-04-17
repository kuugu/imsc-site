import Navbar from './components/Navbar'

// NOTE: for vercel deployment, static files need to be in /public folder 
//        and the locations need to be relative to that  

function App() {
  return (
    <div>
      <Navbar />
      <img src="/images/mains_2023.jpg"></img>
      <img src="/images/mains_2022.jpg"></img>
      <img src="/images/neet_2022.jpg"></img>
      <img src="/images/kcet_2022.jpg"></img> 
    </div>
  )
}

export default App; 