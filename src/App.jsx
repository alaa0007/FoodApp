import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/CartContex";
function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals /> 
    </CartContextProvider>
  );
}

export default App;
