import ProductProvider from "./src/contexts/ProductProvider";
import Routes from "./src/routes";
export default function App() {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
}
