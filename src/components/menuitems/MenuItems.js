import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const MenuItems = [
    {
        title : "Home",
        url : "/",
        cName : "nav-links",
        icon : <HomeIcon className='icon'/>
    },
    {
        title : "About",
        url : "/about",
        cName : "nav-links",
        icon : <InfoIcon className='icon'/>
    },
    {
        title : "Service",
        url : "/service",
        cName : "nav-links",
        icon : <WorkIcon className='icon'/>
    },
    {
        title : "Contact",
        url : "/contact",
        cName : "nav-links",
        icon : <ContactMailIcon className='icon'/>
    },
    {
        title : "Sign Up",
        url : "/signup",
        cName : "nav-links-mobile",
    },
]