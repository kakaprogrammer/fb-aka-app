import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
 
  return (
    <div className="app">
      {
        !user ? (
          <Login />
      ):
      <>
        {/* Header  */}
        <Header />

        {/* App body */}
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />

          {/* Feed  */}
          <Feed />

          {/* Widget */}
          <Widgets />
        </div>
      </>
}
    </div>
  );
}

export default App;
