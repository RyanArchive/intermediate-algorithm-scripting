/*
  Convert HTML Entities

  Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
  in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  return str.replace(/([&<>\"\'])/g, entity => htmlEntities[entity]);
}

convertHTML("Dolce & Gabbana");