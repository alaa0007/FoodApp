import Cart from "./UI/Cart/Cart";
import Checkout from "./UI/CheckOut/Checkout";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/CartContex";
import { OrderContextProvider } from "./store/OrderContext";
function App() {
  return (
    <CartContextProvider>
      <OrderContextProvider>
        <Header />
        <Meals /> 
        <Cart />
        <Checkout />
      </OrderContextProvider>
    </CartContextProvider>
  );
}

export default App;
