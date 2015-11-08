

function MenuParser(filename) {
   var fs = require("fs");
   // Get content from file
   var menuitems = fs.readFileSync(filename);
   this.jsonContent = JSON.parse(menuitems);
}

MenuParser.prototype.retrieveItemPerType = function(type) {
   var items = []
   for(var index in this.jsonContent) {
      if (this.jsonContent[index].type === type) {
         items.push(this.jsonContent[index]);
      }
   }
   return items;
}

MenuParser.prototype.retrieveTags = function() {
   var itemtags = []
   for(var index in this.jsonContent) {
      var item = this.jsonContent[index];
      for (tag_index in item.tags) {
         var tag_element = item.tags[tag_index];
         // verify if tag is already in the list
         if (itemtags.indexOf(tag_element) == -1) {
            itemtags.push(tag_element);
         }
         console.log(tag_element);
      }
   }
   itemtags.sort();
   return itemtags;
}

module.exports = MenuParser; 
