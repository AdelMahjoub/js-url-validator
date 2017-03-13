const url = require("url");

const urlPatterns = {
  full: /^http[s]{0,1}:\/\/(www\.){0,1}[^-\W_][a-zA-Z0-9-]{1,}[^-\W_]\.[a-z]{1,63}$/,
  noProtocol: /^(www\.){0,1}[^-\W_][a-zA-Z0-9-]{1,}[^-\W_]\.[a-z]{1,63}$/,
  maxLength: 255
};

module.exports = (str) => {
  if(typeof str === "string") {
    if(urlPatterns.full.test(str) || urlPatterns.noProtocol.test(str)) {
      //full qualified domain name
      let fqdn; 
      fqdn = url.parse(str).protocol ? url.parse(str).hostname : url.parse(str).href;
      if(fqdn.length > urlPatterns.maxLength) {
        return false;
      }
      return true;
    }
    return false;
  }
  return false;
};