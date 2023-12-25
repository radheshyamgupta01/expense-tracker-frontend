import React, { useState } from "react";
import Ctx from "./Contex";
function ContexProvider({ children }) {
  const [Id, setID] = useState("");
  const [editData, setEditData] = useState(false);
  const setIDHandler = (id) => {
    setID(id);
  };
  const editDataHandler=()=>{
    setEditData(!editData)
  }
  return <Ctx.Provider value={{ Id, setIDHandler,editDataHandler,editData }}>{children}</Ctx.Provider>;
}

export default ContexProvider;
