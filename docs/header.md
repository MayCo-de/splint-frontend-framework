---
description: Create a header for your page.
---

# Header

First import the Header module:

```javascript
import Header from "./src/components/header/header.js";
```

Now create a new header.

```javascript
const newHeader = new Header();
```

Customize your new header like this:

```javascript
// add a logo to your header
newHeader.setLogo("./assets/logo_icon.svg", "Test GmbH");

// change the styling of your header -> you can use every css attribute
newHeader.setStyle("background-color", "aqua");

```
