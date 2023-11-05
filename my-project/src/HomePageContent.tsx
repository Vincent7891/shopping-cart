export default function HomePageContent() {
    return (
      <div className="bg-sky-50">
          <div className="flex flex-col place-content-center">
              <div>
                  <h1 className="py-16 text-center font-semibold text-4xl tracking-tight">Explore our latest collections</h1>
              </div>
              <div className="px-16 py-8 flex items-center justify-around gap-16">
                  <div className="bg-white p-8  w-1/3 flex flex-col justify-center items-center rounded-lg shadow-lg gap-6"> 
                      <img className="rounded-md h-96 w-full object-cover rounded-t-md" src='src/assets/beach.jpg' alt="Beach Collection"></img>
                      <button className="p-4  text-white bg-blue-300 hover:bg-blue-600 font-bold rounded-lg shadow-md transition duration-300 text-lg">Our Beach Collection</button>
                  </div>
                  <div className="bg-white p-8 w-1/3 flex flex-col justify-center items-center rounded-lg shadow-lg gap-6"> {/* Added shadow-lg for some depth */}
                      <img className="rounded-md h-96 w-full object-cover rounded-t-md" src='src/assets/office.jpg' alt="Office Collection"></img> 
                      <button className="p-4   text-white bg-blue-300 hover:bg-blue-600 font-bold rounded-lg shadow-md transition duration-300 text-lg">Our Office Collection</button>
                  </div>
                  <div className="bg-white p-8  w-1/3 flex flex-col justify-center items-center rounded-lg shadow-lg gap-6"> {/* Added shadow-lg for some depth */}
                      <img className="rounded-md h-96 w-full object-cover rounded-t-md" src='src/assets/hike.jpg' alt="Outdoors Collection"></img> 
                      <button className="p-4  text-white bg-blue-300 hover:bg-blue-600 font-bold rounded-lg shadow-md transition duration-300 text-lg">Our Outdoors Collection</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  