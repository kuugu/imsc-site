function Navbar() {
  return (
    <nav className="sticky top-0 px-3 py-3 bg-white shadow-md">
          <div className="flex justify-between items-center">
              <section className="justify-start"> 
                <div><img className="h-20 w-22 object-fit shadow-md" src="/images/icon3.png"></img></div>
              </section>

              <section className="flex justify-end"> 
                <div className="px-2"><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">Programs</button></div>
                <div className="px-2"><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">Testimonials</button></div>
                <div className="px-2"><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">About Us</button></div>
                <div className="px-2"><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">Contact Us</button></div>
              </section> 
          </div>
    </nav>
  )
}

export default Navbar; 