import { useState } from "react";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClick={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisible(!alertVisible)}>My Button</Button>
    </div>
  );
}

export default App;
