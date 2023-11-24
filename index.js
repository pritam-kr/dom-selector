const domSelector = (document) => {
  const getElementById = (selector) => {
    if (selector) {
      return document.getElementById(selector);
    } else {
      return null;
    }
  };

  const getElementsByClass = (selector) => {
    if (selector) {
      return document.getElementsByClassName(selector);
    } else {
      return null;
    }
  };

  const getElementsByTagName = (selector) => {
    if (selector) {
      return document.getElementsByTagName(selector);
    } else {
      return null;
    }
  };

  const querySelector = (selector) => {
    if (selector[0] === ".") {
      return document.querySelector(selector);
    } else if (selector[0] === "#") {
      return document.querySelector(selector);
    } else if (selector[0] !== "." && selector[0] !== "#") {
      return document.querySelector(selector);
    } else {
      return null;
    }
  };

  const querySelectorAll = (selector) => {
    if (selector[0] === ".") {
      return document.querySelectorAll(selector);
    } else if (selector[0] === "#") {
      return document.querySelectorAll(selector);
    } else if (selector[0] !== "." && selector[0] !== "#") {
      return document.querySelectorAll(selector);
    } else {
      return null;
    }
  };

  return {
    querySelector,
    querySelectorAll,
    getElementById,
    getElementsByClass,
    getElementsByTagName,
  };
};

export default domSelector;
