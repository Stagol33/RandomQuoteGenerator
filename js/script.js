/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Quotes Array
 * An array of objects containing various quotes and their sources
 * Some quotes include additional citation and year information
 ***/

// Creating the quotes array with five quote objects
const quotes = [
  {
    quote: "I think the most accurate description of how I play is 'controlled chaos.'",
    source: "Patrick Mahomes",
    citation: "Interview with ESPN",
    year: 2020
  },
  {
    quote: "Always work hard, never give up, and fight until the end because it's never really over until the whistle blows.",
    source: "Russell Wilson"
  },
  {
    quote: "The road to success runs uphill.",
    source: "Willie Davis"
  },
  {
    quote: "The measure of who we are is what we do with what we have.",
    source: "Vince Lombardi",
    citation: "Coach's speech",
    year: 1967
  },
  {
    quote: "I've failed over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan",
    citation: "Nike commercial"
  }
];

/**
 * getRandomQuote function
 * Generates a random number and returns a random quote object from the quotes array
 * 
 * @return {Object} A randomly selected quote object
 */
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  const randomQuote = quotes[randomIndex];
  
  // 3. Return the variable storing the random quote object
  return randomQuote;
}

// Test the getRandomQuote function
getRandomQuote();

/**
 * printQuote function
 * Gets a random quote and formats it as HTML to display on the page
 * Handles optional properties like citation and year
 */
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() function
  const randomQuote = getRandomQuote();
  
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let htmlString = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  
  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML string
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  
  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  htmlString += '</p>';
  
  
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = htmlString;
}

// The event listener is assumed to be provided in the HTML file
// document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);