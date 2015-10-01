$(document).ready(function(){
  $("#form_submission").submit(function(event){
    event.preventDefault();
    var input = $("#state").val();
    $.getJSON("/states/"+input, function(data){
      var html_output = $("<div>");
      if(!data.State){
        html_output.append("<h3>State Not Found</h3>")
      }
      else{
        html_output.append("<h3>State: "+data.State+"</h3>")
        html_output.append("<h4>"+data.Governor+"</h4>");
        html_output.append("<h4>Senators: "+data.Senators+"</h4>");
      }
      $("#results").html(html_output)
      $("#state").val("")
    })
  })
})
