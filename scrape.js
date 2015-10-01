var request = require('request');
var cheerio = require('cheerio');
var DB = require("./db/connection");

request('http://www.nga.org/cms/governors/bios', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.list-item').each(function(i, element){
      var governor_container = $(this);
      var state = governor_container.children().eq(0).html();
      var governor_spaced = governor_container.children().eq(1).children().eq(0).html();
      var governor = governor_spaced.replace(/\s+/g,' ').trim();
      console.log(state, governor)
      DB.models.State.create({name: state, governor: governor})
    })
  }
});
