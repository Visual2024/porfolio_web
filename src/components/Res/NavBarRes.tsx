import { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar_Res(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header className="flex justify-end mt-5 relative pt-2 mr-8 scale-110">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        className="absolute left-2 top-2 z-50 lg:hidden"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {['Inicio', 'Experiencia', 'Proyecto', 'Blog'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <nav className="relative inset-0 hidden md:flex justify-center max-[400px]:bg-red-500"> 
        <ul className="flex bg-transparent gap-3">
          <li>
            <a href="#inicio" className="flex items-center justify-center m-2 p-3 text-white rounded-md hover:bg-gray-900 duration-100">
              Inici
            </a>
          </li>
          <li>
            <a href="#experiencia" className="flex items-center justify-center m-2 p-3 text-white rounded-md hover:bg-gray-900 duration-300">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#proyecto" className="flex items-center justify-center m-2 p-3 text-white rounded-md hover:bg-gray-900 duration-300">
              Proyecto
            </a>
          </li>
          <li>
            <a href="#blog" className="flex items-center justify-center m-2 p-3 text-white rounded-md hover:bg-gray-900 duration-300">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
