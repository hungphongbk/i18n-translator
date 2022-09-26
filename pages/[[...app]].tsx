import { useEffect, useState } from "react";
import CreateReactAppEntryPoint from "../src/App";

function App(): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CreateReactAppEntryPoint />;
}

export default App;
