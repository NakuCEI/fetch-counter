import { News } from "./components/News"


function App() {

  return (
    <>
      <header className="bg-dark text-light text-center py-5">
        <p className="h1">Fetch Counter</p>
      </header>
      <main className="container my-4">
        <News />
      </main>
      <footer className="bg-dark text-light text-center py-1">
        <p className="h6">Fetch Counter</p>
      </footer>
    </>
  )
}

export default App
