var request = require('request');
var cheerio = require('cheerio');
var array_of_data = [];
var DB = require("./db/connection");
var State = require("./db/connection").models.State;

request('http://www.nga.org/cms/governors/bios', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    //Scrape nga and create State models with state name and governor name
    $('.list-item').each(function(i, element){
      var governor_container = $(this);
      var state = governor_container.children().eq(0).html();
      var governor_spaced = governor_container.children().eq(1).children().eq(0).html();
      var governor = governor_spaced.replace(/\s+/g,' ').trim();
      console.log(state, governor)
      DB.models.State.create({name: state, governor: governor})
    })

    //once each model has been created, scrape openCongress and update attributes with abbreviation and senators
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
  }
});
