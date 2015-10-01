var request = require('request');
var cheerio = require('cheerio');
var DB = require("./db/connection");
var State = require("./db/connection").models.State;
var array_of_data = [];

request('https://www.opencongress.org/people/senators', function(error, response, html){
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $("#people_list").children().each(function(i, element){
      var every_person = $(this);
      if(every_person.children().eq(0).attr("id") != undefined){
        var abbr = every_person.children().eq(0).attr("id")
        var state = every_person.children().eq(0).children().eq(0).html();
        var obj = {};
        array_of_data.push(state);
        array_of_data.push(abbr);
      }
      var name_with_affil = every_person.children().eq(1).children().eq(0).html();
      if(name_with_affil != null){
        var name_without_affil_array = name_with_affil.split("<span>");
        var name = name_without_affil_array[0].replace(/\s+/g,' ').trim();;
        array_of_data.push(name);
      }
    })
    console.log(array_of_data);
    for(var i = 0; i < array_of_data.length; i = i + 4){
      State.update({
        abbr: array_of_data[i+1],
        senator_one: array_of_data[i+2],
        senator_two: array_of_data[i+3]
      },
      {
        where:
          {
            name: array_of_data[i]
          }
      })
    }
  }
})
