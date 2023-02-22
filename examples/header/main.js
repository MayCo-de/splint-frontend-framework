const newHeader = new Header();                             // Create a new header

newHeader.setLogo("../../assets/favicon.svg", "Test GmbH"); // Setup the icon
newHeader.addLink('Home', './index.html');                  // Add a link to nav
newHeader.addLink('Contact', './index2.html');              // Add another link to nav