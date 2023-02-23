# splint-frontend
The frontend library for MayCo's "Splint"-framework.

## Components

### Header component

#### Instalation

##### NPM
Run the following command:
```
npm install @mayco/splint-frontend-framework
```

##### CDN
Add this to your header

```html
<link rel="stylesheet" href="https://cdn.colingrahm.de/frameworks/splint-frontend/components/header/header_1_0_0/header.min.css">
<script src="https://cdn.colingrahm.de/frameworks/splint-frontend/components/header/header_1_0_0/header.min.js"></script> 
```

#### Usage
To use the splint header you have to crate a new header object. Now you can customize it like this:

```javascript
const newHeader = new Header();                             // Create a new header

newHeader.setLogo("../../assets/favicon.svg", "Test GmbH"); // Setup the icon
newHeader.addLink('Home', './index.html');                  // Add a link to nav
newHeader.addLink('Contact', './index2.html');              // Add another link to nav
```

To customize the colors you have to setup these css variables:

```css
:root {
    --primary: #DC143C;         /* Primary color */
    --primary-dark: #B21031;    /* Primary color hovered */

    --bg-color: #ffffff;        /* Background color */
    --bg-color-dark: #e9e9e9;   /* Dark background color */
    --bg-color-dark-2: #cecece; /* Second dark background color */

    --primary-text: #333;       /* Primary text color */
    --secondary-text: #cecece;  /* Secondary text color */
    --button-text: #ffffff;     /* Button text color */
}
```

#### Example
Click [here](https://maycodev.colingrahm.de/examples/header/) for the example website.

#### Author
[CGWebDev2003](https://github.com/CGWebDev2003)
