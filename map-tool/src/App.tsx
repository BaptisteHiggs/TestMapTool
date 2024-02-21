import { useSelector } from "react-redux";
import "./App.css";
import { Map } from "./components/Map";
import { TokenInput } from "./components/TokenInput";
import { validateToken } from "./utils/validateToken";
import { useEffect, useState } from "react";

function App() {
  const token = useSelector((state) => (state as any).mapboxTokenReducer.value);
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    const getValidity = async () => {
      const tokenValidResult = await validateToken(token);
      setTokenValid(tokenValidResult);
    };

    getValidity();
  }, [token]);

  return (
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      {tokenValid ? <Map /> : <TokenInput />}
    </body>
  );
}

export default App;
