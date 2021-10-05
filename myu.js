$(document).ready(function () {
  $("#button").click(function () {
    var toAdd = $("input[name=ListItem]").val();
    $("ol").append("<li>" + toAdd + "</li>");
  });

  $("input").focus(function () {
    $(this).val("");
  });

  $(".toggle").click(function () {
    $("ol").toggle();
  });
});
