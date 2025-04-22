/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Quotes Array
 * An array of objects containing NFL player quotes with sources
 * Some quotes include additional citation, year, and tags information
 ***/

// Creating the quotes array with five quote objects
const quotes = [
  {
    quote: "I think the most accurate description of how I play is 'controlled chaos.'",
    source: "Patrick Mahomes",
    citation: "Interview with ESPN",
    year: 2020,
    tags: ["sports", "football", "gameplay"]
  },
  {
    quote: "Always work hard, never give up, and fight until the end because it's never really over until the whistle blows.",
    source: "Russell Wilson",
    tags: ["motivation", "perseverance"]
  },
  {
    quote: "The road to success runs uphill.",
    source: "Willie Davis",
    tags: ["inspiration", "success"]
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
    citation: "Nike commercial",
    tags: ["motivation", "perseverance", "failure"]
  }
];

/**
 * getRandomQuote function
 * Generates a random number and returns a random quote object from the quotes array
 * 
 * @return {Object} A randomly selected quote object
 */
function getRandomQuote() {
  // Generate a random number between zero and the last index in the `quotes` array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // Use the random number to grab a random object from the `quotes` array
  const randomQuote = quotes[randomIndex];
    
  // Return the random quote object
  return randomQuote;
}

/**
 * getRandomColor function
 * Generates a random RGB color
 * 
 * @return {String} A random RGB color string
 */
function getRandomColor() {
  // Generate random values for red, green, and blue (0-255)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  // Return RGB string
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * changeBackgroundColor function
 * Updates the page background to a random color
 */
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  console.log("Background color changed to:", randomColor);
}

/**
 * printQuote function
 * Gets a random quote and formats it as HTML to display on the page
 * Also changes the background color to a random color
 */
function printQuote() {
  // Get a random quote
  const randomQuote = getRandomQuote();
  
  // Create HTML string with quote and source
  let htmlString = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  
  // Add citation if it exists
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  
  // Add year if it exists
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  
  // Add tags if they exist
  if (randomQuote.tags) {
    htmlString += `<span class="tags">${randomQuote.tags.join(", ")}</span>`;
  }
  
  // Close the source paragraph
  htmlString += '</p>';
  
  // For testing
  console.log("HTML String:", htmlString);
  
  // Update the quote-box div with the HTML string
  document.getElementById('quote-box').innerHTML = htmlString;
  
  // Change background color
  changeBackgroundColor();
}

// Set up auto-refresh for quotes every 15 seconds (15000 milliseconds)
let quoteInterval = setInterval(printQuote, 15000);

/**
 * resetQuoteTimer function
 * Resets the auto-refresh timer when user manually requests a new quote
 */
function resetQuoteTimer() {
  // Clear the existing interval
  clearInterval(quoteInterval);
  
  // Print a new quote
  printQuote();
  
  // Set up a new interval
  quoteInterval = setInterval(printQuote, 15000);
}

// The event listener is assumed to be provided in the HTML file
// document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);