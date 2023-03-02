# splint-frontend <img src="https://skillicons.dev/icons?i=js" width="25px" height="25px" style="margin-left: .5rem;" alt="JavaScript icon"></img> <img src="https://skillicons.dev/icons?i=jquery" width="25px" height="25px" style="margin-left: .25rem;" alt="JavaScript icon"></img> <img src="https://skillicons.dev/icons?i=css" width="25px" height="25px" style="margin-left: .25rem;" alt="JavaScript icon"></img>
The frontend library for MayCo's "Splint"-framework.

## Whats new?
> <span style="color: #a8a8a8;"> Latest version *1.2.47*</span>

## Components

### Header component

#### Instalation

##### NPM
Run the following command to add the [npm package](https://www.npmjs.com/package/@mayco/splint-frontend-framework):
```
npm install @mayco/splint-frontend-framework
```

##### CDN
Add this to your header

```html
<link rel="stylesheet" href="https://cdn.colingrahm.de/frameworks/splint-frontend/components/header/header_1_2_12/header.min.css">
<script src="https://cdn.colingrahm.de/frameworks/splint-frontend/components/header/header_1_2_12/header.min.js"></script> 
```

#### Usage
To use the splint header you have to crate a new header object. Now you can customize it like this:

```javascript
const newHeader = new Header();                             // Create a new header

newHeader.setLogo("../../assets/favicon.svg", "Test GmbH"); // Setup the icon
newHeader.addLink('Home', './index.html');                  // Add a link to nav
newHeader.addLink('Contact', './index2.html');              // Add another link to nav
```

##### Customize colors
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
##### Set custom logo icon
```javascript
newHeader.setLogo("../../assets/favicon.svg", "Test GmbH");
```

##### Set logo target page
```javascript
newHeader.setLogoTarget("index.html");
```

##### Add a navigation link
```javascript
newHeader.addLink('Home', './index.html');
```

##### Remove a navigation link
```javascript
newHeader.removeLink('Home');
```

##### Set style
Enter the target attribute first and the value second.
```javascript
newHeader.setStyle("background-color", "blue");
```

##### Change view
```javascript
// Set mobile view
newHeader.mobile();

// Set desktop view
newHeader.desktop();
```

#### Example
Click [here](https://maycodev.colingrahm.de/examples/header/) for the example website.

#### Author
[CGWebDev2003](https://github.com/CGWebDev2003)
