function Navbar() {
  return (
    <nav className="sticky top-0 px-3 py-3 bg-white shadow-md">
          <div className="flex justify-between items-center">
              <div><img className="h-20 w-22 object-fit shadow-md" src="/images/icon3.png"></img></div>
              <div className="w-60"></div>
              <div className=""><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">Programs</button></div>
              <div className=""><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">Testimonials</button></div>
              <div className=""><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">About Us</button></div>
              <div className=""><button className="bg-lgpurple-500 rounded-md text-white px-3 py-3 font-semibold">Contact Us</button></div>
          </div>
    </nav>
  )
}

export default Navbar; 