import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import React from 'react'
import { Link }from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    
    const toggleDrawer = (open) => (event) =>{
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'shift')){
            return;
        }
        setDrawerOpen(open)
    };
  return (
    <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/studentDashboard">
        Student Dashboard
      </Button>
      <Button color="inherit" component={Link} to="/teacherDashboard">
        Teacher Dashboard
      </Button>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar