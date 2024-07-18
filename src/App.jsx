import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"
import Provider from "./Context/ProviderContext"

import Cart from "./Components/Cart/Cart"

function App() {
 

  return (
    <><Provider>
    <Header></Header>
    <Products></Products>
    <Cart></Cart>
    </Provider>
    </>
  )
}

export default App
