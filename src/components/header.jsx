// the best practice is to import any static assets like images in the component
// the path to the image should be realtive from the component file directory instead of the html file directory
// this way the build tools can correctly process the assets during the build process
import ChefClaudeLogo from "../assets/chef-claude.png";

function Header() {
    return (
        <header className='header'>
            <img src={ ChefClaudeLogo } alt='Chef Claude' className='headerImg'/>
            <h1 className='headerH1'>ChefClaude</h1>
        </header>
    );
}

export default Header;