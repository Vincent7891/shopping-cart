export default function Header() {
    return (
      <div className="bg-amber-400">
          <div className="flex justify-between items-center p-6">
              <div><img className="h-40 w-auto" src="src/assets/Visionary-logos_transparent.png" alt="Visionary website logo" /></div>
              <h1 className="font-extrabold italic">Visionary: Frame Your Outlook</h1>
              <div>
                  <ul className="flex gap-8">
                      <li><img className="w-12 h-auto" src="src/assets/search.svg" alt="Search icon" /></li>
                      <li><img className="w-12 h-auto" src="src/assets/cart.svg" alt="Shopping cart icon" /></li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }
  