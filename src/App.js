import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Incomplete from "./tuiter/incomplete";
import Bibliography from "./tuiter/bibliography";
import ProfileComponent from "./tuiter/profile";
import EditProfileComponent from "./tuiter/EditProfile";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index
                         element={<Labs/>}/>
                  <Route path="/labs"
                         element={<Labs/>}/>
                  <Route path="/*"
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter"
                         element={<Tuiter/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
                  <Route path="/incomplete"
                         element={<Incomplete/>}/>
                  <Route path="/profile"
                         element={<ProfileComponent/>}/>
                  <Route path="/edit-profile"
                         element={<EditProfileComponent/>}/>
                  <Route path="labs/a7/*"
                         element={<Labs/>}/>
                  <Route path="labs/a6/*"
                         element={<Labs/>}/>
                  <Route path="/bibliography"
                         element={<Bibliography/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
