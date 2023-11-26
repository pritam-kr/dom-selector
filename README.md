# Dom Selector 
Note:- 
You may encounter bugs while using this package. I'm in the learning process as I build it.
# Dom Selectors
### @pritamkrv/dom-selectors - v1.0.1
### The concept is to create a library that offers various approaches for selecting Document Object Model (DOM) elements. I aim to understand the process of building an npm package.

## Installation
To integrate DomSelector into your project, follow these straightforward steps:

## Install it using npm:
```npm install @pritamkrv/dom-selectors```

## Import the library into your project:
```import domSelector from @pritamkrv/dom-selectors;```

# Usage

DomSelector provides a set of methods for selecting DOM elements with ease:

- getElementById(selector): Retrieve the element with the specified ID.
- getElementsByClass(selector): Obtain a collection of elements with the specified class.
- getElementsByTagName(selector): Fetch a collection of elements with the specified tag name.
- querySelector(selector): Retrieve the first element matching the specified CSS selector.
- querySelectorAll(selector): Get a collection of all elements matching the specified CSS selector.

```const selector = domSelector(document);

// Get element by ID
const elementById = selector.getElementById('myElementId');

// Get elements by class
const elementsByClass = selector.getElementsByClass('myClass');

// Get elements by tag name
const elementsByTag = selector.getElementsByTagName('div');

// Query a single element
const querySingle = selector.querySelector('.myClass');

// Query multiple elements
const queryMultiple = selector.querySelectorAll('.myClass');
```


# Configuration
No specific configuration is required for DomSelector. Simply import the library and start utilizing its methods.

# Contact Information
For questions or support, please reach out to Pritam Kumar at pritamvr9@gmail.com.