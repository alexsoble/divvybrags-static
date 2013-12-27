$(function() {
  $.ajax({
    url: "http://divvybrags-leaderboard.herokuapp.com/entries.json", 
    success: function(data) {
      // console.log(data);
      for (var i = 0; i <= data.length - 1; i++) {
        var leaderboard_entry = data[i];
        var leaderboard_position = Object.keys(leaderboard_entry)[0];
        var name = leaderboard_entry[leaderboard_position]["name"];
        var miles = leaderboard_entry[leaderboard_position]["miles"];
        var entry_html = leaderboard_position + ". " + name + ": " + miles + "mi<br/>";
        $('#leaderboard').append(entry_html);
      }
    }
  });
});