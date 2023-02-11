import Header from "./src/components/header/header.js";

const newHeader = new Header();
newHeader.setLogo("./assets/logo_icon.svg", "Test GmbH");
newHeader.addLink('Home', './index.html');
newHeader.addLink('Contact', 'contact.html');