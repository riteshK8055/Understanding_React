import { Menu } from "@mui/icons-material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorE1={anchorE1} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ad
        distinctio soluta, maiores, quos nesciunt officiis tenetur obcaecati
        incidunt voluptas qui quis atque. Sunt perferendis voluptatibus sed
        dolorem labore atque.
      </div>
    </Menu>
  );
};

export default FileMenu;
