import AppRoutes from "./routes/Routes";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="App">
      <Analytics />
      <AppRoutes />
    </div>
  );
}

export default App;
