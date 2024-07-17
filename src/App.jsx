import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"
import Provider from "./Context/ProviderContext"
function App() {
 

  return (
    <><Provider>
    <Header></Header>
    <Products></Products>
    </Provider>
    </>
  )
}

export default App
