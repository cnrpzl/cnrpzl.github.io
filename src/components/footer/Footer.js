import "./FooterStyles.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>constAnhedonia</h1>
                    <p>Anhedonia is a term used to describe a decreased ability to feel pleasure.</p>
                </div>
                <div>
                    <a href="/">
                        <i><TwitterIcon/></i>
                    </a>
                    <a href="/">
                        <i><InstagramIcon/></i>
                    </a>
                    <a href="/">
                        <i><GitHubIcon/></i>
                    </a>
                    <a href="/">
                        <i><EmailIcon/></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/cnrpzl">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>

                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}


export default Footer