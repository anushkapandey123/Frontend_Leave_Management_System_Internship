// import React, { useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as YourSvg } from "./calendar_month_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
// import GenericCalendar from "../calender/GenericCalendar";





// const Header = () => {
//   const [open, setOpen] = useState(false)

//   function handleClick() {
//     setOpen(true)
//   }

//     return (
//       <>
//         <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{bgcolor: "#8B0000"}}> 
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               {/* <MenuIcon /> */}
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Employee Leave Management System
//             </Typography>
//             {/* <Button color="inherit">About</Button> */}
//             <Button onClick={handleClick}><YourSvg /></Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <GenericCalendar open={open} onClose={() => {setOpen(false)}} />
//       </>
//     )
// }

// export default Header;

// import React, { useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as YourSvg } from "./calendar_month_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
// import GenericCalendar from "../calender/GenericCalendar";

// const Header = () => {
//   const [open, setOpen] = useState(false)

//   function handleClick() {
//     setOpen(true)
//   }

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ bgcolor: "#8B0000" }}> 
//           <Toolbar sx={{ justifyContent: "space-between" }}>
//             <Box sx={{ flex: 1 }}>
//               <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 sx={{ mr: 2 }}
//               >
//                 {/* <MenuIcon /> */}
//               </IconButton>
//             </Box>
//             <Typography variant="h6" component="div" sx={{ flex: 1, textAlign: 'center' }}>
//               Employee Leave Management System
//             </Typography>
//             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
//               <Button onClick={handleClick} color="inherit"><YourSvg /></Button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <GenericCalendar open={open} onClose={() => { setOpen(false) }} />
//     </>
//   )
// }

// export default Header;

import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as YourSvg } from "./calendar_month_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
import GenericCalendar from "../calender/GenericCalendar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('jwt');
    // Redirect to login page
    window.location.href = '/';
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#8E2A2C" }}> 
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ flex: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {/* <MenuIcon /> */}
              </IconButton>
            </Box>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flex: 1, 
                textAlign: 'center',
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Employee Leave Management System
            </Typography>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button onClick={handleClick} color="inherit"><YourSvg /></Button>
              <Button onClick={handleLogout} color="inherit">Logout</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <GenericCalendar open={open} onClose={() => { setOpen(false) }} />
    </>
  );
}

export default Header;
