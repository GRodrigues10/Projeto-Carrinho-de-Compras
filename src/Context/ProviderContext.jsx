import React from "react";
import appContext from "./appContext";
appContext

function Provider(){
    return(<>
            <appContext.Provider/>
           </>);
}
export default Provider;