$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var animalInput = $("input#animal").val();
    $("input#animal").val("");
    var colorInput = $("input#color").val();
    $("input#color").val("");
    var movieInput= $("input#movie").val();
    $("input#movie").val("");
    var actorInput = $("input#actor").val();
    $("input#actor").val("");
    var songInput = $("input#song").val();
    $("input#song").val("");
    var foodInput = $("input#food").val();
    $("input#food").val("");
    var languageInput = $("input#language").val();
    $("input#language").val("");

    var arrayFav = [animalInput, colorInput, movieInput, actorInput, songInput, foodInput, languageInput];
    var arrayBro = [arrayFav[1], arrayFav[0], arrayFav[2]];
    arrayBro.push(arrayFav[3]);
    arrayBro.push(arrayFav[4]);
    arrayBro.push(arrayFav[5]);
    arrayBro.push(arrayFav[6]);

    $("#animal").text(animalInput);
    $("#color").text(colorInput);
    $("#movie").text(movieInput);
    $("#actor").text(actorInput);
    $("#song").text(songInput);
    $("#food").text(foodInput);
    $("#language").text(languageInput);

  $(".list").append('<li>' + arrayBro[0] + '</li>');
  $(".list").append('<li>' + arrayBro[1] + '</li>');
  $(".list").append('<li>' + arrayBro[2] + '</li>');
  $(".list").append('<li>' + arrayBro[3] + '</li>');
  $(".list").append('<li>' + arrayBro[4] + '</li>');
  $(".list").append('<li>' + arrayBro[5] + '</li>');
  $(".list").append('<li>' + arrayBro[6] + '</li>');






  });
});
