import React, { memo, useEffect, useState } from "react";
import { Grid , IconButton , Tooltip , Box , Drawer , Stack , Typography , TextField, Button } from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon  } from "@mui/icons-material";
import { matBlack } from "../constants/color";
import { useNavigate , useSearchParams} from "react-router-dom"; 
import { Link } from "../components/styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import {sampleChats} from "../constants/sampleData";

export const Groups = () => {


    const chatId = useSearchParams()[0].get("group");

    const navigate = useNavigate();
    

    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState();

    const [isEdit , setIsEdit] = useState(false);

    const [confirmDeleteDialog , setConfirmDeleteDialog] = useState(false);

    const [groupName, setGroupName] = useState("Group Name");

    const [groupNameUpdatedValue , setGroupNameUpdatedValue] = useState("");

    const navigateBack = () => {

        navigate("/");
    };

    const handleMobile = () => {

        setIsMobileMenuOpen(prev => !prev);
    }

    const handleMobileClose =  () => {

        setIsMobileMenuOpen(false);

    }

    const updateGroupName = () => {

        setIsEdit(false);
        console.log(groupNameUpdatedValue);
    }


    const openConfirmDeleteHandler = () => {

        setConfirmDeleteDialog(true);
        console.log("delete group")
    };

    const closeConfirmDeleteHandler = () => {

        setConfirmDeleteDialog(false);
        
    };

    const openAddMemberHandler = () => {

        console.log("Add Member")
    };


    useEffect(() => {

        setGroupName(`Group Name ${chatId}`);
        setGroupNameUpdatedValue("Group Name");

        return () => {

            setGroupName("");
            setGroupNameUpdatedValue("");
            setIsEdit(false);
        }

    }, [chatId]);

    const IconBtns = 
    <>
     
     <Box 
       sx={{
        display  :{

            xs: "block",
            sm: "none",
            position : "fixed",
            right : "1rem",
            top : "1rem",
        },
       }}
     >
        <IconButton onClick={handleMobile}>
            <MenuIcon />
        </IconButton>
     </Box>

    

    <Tooltip title = "back">
        <IconButton
        
        sx={{
            position: "absolute",
            top : "2rem",
            left :"2rem",
            bgcolor : matBlack,
            color : "white",
            ":hover" : {

                bgcolor : "rgba(0,0,0,0.7)",
            },

        }}
        onClick={navigateBack}
        >
            <KeyboardBackspaceIcon />
        </IconButton>
    </Tooltip>
    
    </>


     const GroupName =( <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"}>

     
     
       { isEdit ?(<>
       
       <TextField value={groupNameUpdatedValue}  
       onChange={ (e)=> setGroupNameUpdatedValue(e.target.value)} 
       />
       <IconButton onClick= {updateGroupName} >
         <DoneIcon />
       </IconButton>

       </>)  :(
       
       <>
       
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>

       </>
    )}     

     </Stack>
    );


    const buttonGroup = (

        <Stack
         direction={{

            sm: "row",
            xs: "column-reverse",
         }}

         spacing={"1rem"}
         p = {{
            xs: "0",
            sm: "1rem",
            md: "1rem 4rem",
         }}
        >

         
         <Button size = "large"  color="error" startIcon={<DeleteIcon />} onClick = {openConfirmDeleteHandler}>Delete Group</Button>
         <Button size = "large" variant = "contained" startIcon={<AddIcon />} onClick = {openAddMemberHandler}>Add Member</Button>
        
        </Stack>
    ) 

    return (

     <Grid container height={"100vh"}>
        
        <Grid
          item 
           sx={{ 
            display: {
            xs: "none",
            sm: "block",
           },
         }}
        sm={4}
        bgcolor={"bisque"}
    >
        <GroupList  myGroups={sampleChats} chatId={chatId} />
     </Grid>
         
     <Grid
        item
        xs={12}
        sm={8}
        sx={{
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           position: "relative",
           padding: "1rem 3rem",
        }}
        >
           {IconBtns}

         
         { groupName && <>
         
         {GroupName}

         <Typography
           margin={"2rem"}
           alignSelf={"flex-start"}
           variant="body1"
         >
            Members
         
         </Typography>

         <Stack
            
            maxWidth={"45rem"}
            width={"100%"}
            boxSizing={"border-box"}
            padding={{

                sm: "1rem",
                xs: "0",
                md : "1rem 4rem",
            }}

            spacing={"2rem"}
            bgcolor={"bisque"}
            height={"50vh"}
            overflow={"auto"}

         >

            {/* Members */}

         </Stack>

         {buttonGroup}
         </>
         
         }
         

        </Grid>


        {confirmDeleteDialog && <></>}

       
       <Drawer 
       sx={{

        display : {

            xs:"block",
            sm: "none",
        },
       }}
       open={isMobileMenuOpen}
       onClose= {handleMobileClose}
       >

        <GroupList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
       </Drawer>


        </Grid>
    );
};


const GroupList = ({w="100%" , myGroups=[] , chatId}) => (


    <Stack width={w} >

        {
            myGroups.length > 0 ? (myGroups.map((group) => <GroupListItem group = {group} chatId = {chatId} key={group._id} />)
           ) : <Typography textAlign={"center"} padding= "1rem" >No Groups Found....</Typography>
        }
    </Stack>

    );


    const GroupListItem = memo(({group , chatId}) => {

        const{name , avatar, _id } = group;

        return (
        <Link 
          to={`?group=${_id}`} 
          onClick={(e) => {if(chatId === _id) e.preventDefault();
        }}
        
        >
          
           <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
            <AvatarCard avatar={avatar} />
            <Typography>{name}</Typography>
           </Stack>
        
        </Link>
        );
    });

export default Groups;