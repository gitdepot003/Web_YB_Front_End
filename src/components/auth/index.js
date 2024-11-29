import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Index(){
    const navigate=useNavigate('')
  useEffect(() => {
    window.location.href="https://theyouthbuzz.com/"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return(

        <div>

        </div>
    )
}
export default Index