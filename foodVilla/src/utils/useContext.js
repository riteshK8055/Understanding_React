import { createContext } from "react";

const userContext = createContext({

    user : {

        name:"Duymmy Name",
        email : "Dummy Email"
    },
})


export default userContext; 