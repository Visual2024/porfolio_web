import { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar_Res(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header className="flex mt-5 relative pt-4 px-8 ">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        className="lg:hidden"
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
            {['Inicio', 'Sobre mi','Experiencia', 'Proyecto'].map((text) => (
              <ListItem button key={text} component="a" href={`#${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <nav className="hidden lg:flex items-center">
        <ul className="flex">
          {['Inicio', 'Sobre mi','Experiencia', 'Proyecto'].map((text) => (
            <li key={text}>
              <a href={`#${text.toLowerCase()}`} className="text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
