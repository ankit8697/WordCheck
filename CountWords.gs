function countWords() {
  // Get the active document
  var doc = DocumentApp.getActiveDocument();
  
  // Get all the paragraphs in the document
  var paragraphs = doc.getBody().getParagraphs();
  
  // Initialize count and flag
  var count = 0;
  var counting = false;
  
  // Loop through each paragraph
  for (var i = 0; i < paragraphs.length; i++) {
    var text = paragraphs[i].getText();
    
    // Check for "$count" and toggle counting flag
    if (text.indexOf("$count") !== -1) {
      counting = !counting;
      
      // If this is the second "$count", append count to the text after it
      if (!counting) {
        var index = text.indexOf("$count");
        var wordCount = "Word count: " + count;
        var newText = text.slice(0, index + 6) + " " + wordCount;
        paragraphs[i].setText(newText);
        var startIndex = index + 6;
        var endIndex = startIndex + wordCount.length;
        var textStyle = {};
        textStyle[DocumentApp.Attribute.BOLD] = true;
        paragraphs[i].editAsText().setAttributes(startIndex, endIndex, textStyle);
        count = 0;
        counting = false;
      }
    }
    
    // If counting, add words to count
    if (counting && text.trim() !== '') {
      count += text.split(" ").length;
    }
  }
}

function countCharacters() {
  // Get the active document
  var doc = DocumentApp.getActiveDocument();
  
  // Get all the paragraphs in the document
  var paragraphs = doc.getBody().getParagraphs();
  
  // Initialize count and flag
  var count = 0;
  var counting = false;
  
  // Loop through each paragraph
  for (var i = 0; i < paragraphs.length; i++) {
    var text = paragraphs[i].getText();
    
    // Check for "$count" and toggle counting flag
    if (text.indexOf("$count") !== -1) {
      counting = !counting;
      
      // If this is the second "$count", append count to the text after it
      if (!counting) {
        var index = text.indexOf("$count");
        var charCount = "Character count: " + count;
        var newText = text.slice(0, index + 7) + " " + charCount;
        paragraphs[i].setText(newText);
        var startIndex = index + 7;
        var endIndex = startIndex + charCount.length;
        var textStyle = {};
        textStyle[DocumentApp.Attribute.BOLD] = true;
        paragraphs[i].editAsText().setAttributes(startIndex, endIndex, textStyle);
        count = 0;
        counting = false;
      }
    }
    
    // If counting, add characters to count
    if (counting && text.trim() !== '') {
      count += text.trim().length;
    }
  }
}
