$(document).ready(function(){
  $("#christmasStory").submit(function(event){
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var demonymInput = $("input#demonym").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var adjectiveInput = $("input#adjective").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".demonym").text(demonymInput);
    $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();
  });
});
