import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  listItemText: {
    textDecoration: 'none'
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });

    if(state.top) {
        setState({ ...state, [anchor]: false });
    }
  };

  const list = (anchor) => (
    <div
      style={{ paddingTop: '90px' }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Home</ListItemText>
          </Link>
        </ListItem>
        {/* <ListItem button>
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>About Us</ListItemText>
          </Link>
        </ListItem> */}
        <ListItem button>
          <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Products</ListItemText>
          </Link>
        </ListItem>
        {/* <ListItem button>
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Services</ListItemText>
          </Link>
        </ListItem> */}
        {/* <ListItem button>
          <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Partners</ListItemText>
          </Link>
        </ListItem> */}
        <ListItem button>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemText>Contact Us</ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <IconButton onClick={toggleDrawer('top', true)}>
            <MenuIcon
                fontSize="large"
                className="header__menuIcon"
                style={{ color: 'white'}}
            />
        </IconButton>
        <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
            {list('top')}
        </Drawer>
    </div>
  );
}
