function(doc, req) {
  var html = "<div data-role=\"page\" id=\"albumview\">" +
                       "<div data-role=\"header\" id=\"albumheader\">" +
                           "<h2 class=\"albumtitle\">" + doc.title + "<\/h2>" +
                       "<\/div>" +
                       "<div data-role=\"content\" id=\"albumcontent\">" +
                           "<h2 class=\"artist\">" + doc.artist + "<\/h2>" +
                           "<p class=\"title\">" + doc.title + "<\/p>" +
                           "<p class=\"description\">" + doc.description + "<\/p>" +
                       "<\/div>" +
                       "<div data-role=\"footer\" \/>" +
                   "<\/div>";
  return html;
}