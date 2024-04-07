import React, {useRef} from "react";
import AppLayout from "../components/layout/AppLayout";
import {Stack , IconButton} from "@mui/material";
import { AttachFile as AttachFileIcon, Send as SendIcon } from "@mui/icons-material";
import { grayColor } from "../constants/color";
import { InputBox } from "../components/styles/StyledComponent";
import { orange } from "../constants/color";
const Chat = () => {

    const containerRef = useRef(null);
    return (
        
         <>
           <Stack
             ref = {containerRef}
             boxSizing={"border-box"}
             padding={"1rem"}
             spacing={"1rem"}
             bgcolor={grayColor}
             height={"90%"}
             sx={{
                overflowX : "hidden",
                overflowY : "auto"
              }}
           >
            {/* Message Render */}
           </Stack>

           <form style={{
             height:"10%",
           }}>

            <Stack
             direction={"row"}
              height={"100%"}
              padding={"1rem"}
              alignItems={"center"}
              position={"relative"}
              >
                <IconButton 
                  sx={{
                    position: "absolute",
                    left: "1.5rem",
                    rotate : "30deg"

                  }}
                >
                    <AttachFileIcon />
                </IconButton>


            <InputBox placeholder="Type Message Here..." />

            <IconButton type="submit" sx={{
                rotate : "-20deg",
                bgcolor : orange,
                color: "white",
                marginLeft : "1rem",
                padding : "0.5rem",
                "&:hover" : { 
                    bgcolor : "error.dark"
                }
            }}>
                <SendIcon />
            </IconButton>

            </Stack>

           </form>
         </>
    );
};


export default AppLayout()(Chat);