import { ApiCategory } from "../../API/api";
import { ScrollsToTop } from "../../components/scrollsToTop/scrollsToTop";
import { AppRoutes } from "../../routes/routes";
import "./app.css";

function App() {

  return (
    <>
      <ApiCategory />


      <div className="continer">
        <ScrollsToTop>

          <AppRoutes />
        </ScrollsToTop>
      </div>
    </>
  );
}

export default App;
