import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import { MAIN_ROUTES } from "_utils/_constants";
import { history, PrivateRoute, newUUID } from "_utils/_helpers";
import ThemeProvider from "_utils/_theme";
import Header from "_components/Header";
import MainContent from "MainContent";

function App() {
  // init custom history object to allow navigation from anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="App">
      <ThemeProvider>
        <Routes>
          {MAIN_ROUTES.map(({ path, secured, component, header, footer }) => (
            <Route
              key={newUUID()}
              path={path}
              element={
                <>
                  {header && <Header />}
                  {
                    <MainContent>
                      {secured ? (
                        <PrivateRoute>{component} </PrivateRoute>
                      ) : (
                        component
                      )}
                    </MainContent>
                  }
                  {/* {footer && <StickyFooter />} */}
                </>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
