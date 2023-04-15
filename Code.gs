function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('WordCheck')
      .addItem('Count Words', 'countWords')
      .addToUi();
}
