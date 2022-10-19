import React from "react";
import ComponenteAxios from "./Componentes/ComponenteAxios/ComponenteAxios";


class App extends React.Component {

  render() {
    return(
      <div className="container row m-2 justify-content-center align-items-center">
        <ComponenteAxios/>
      </div>
    );
  }
}

export default App;
