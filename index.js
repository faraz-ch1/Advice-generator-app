const img = $(".dice-image");
img.click(function(e){
  e.preventDefault();

  $.ajax({
    url: "https://api.adviceslip.com/advice",
    type: "GET",
    success: function (result) {

        const adviceDetails = JSON.parse(result);
        const adviceId = adviceDetails.slip.id;
        const adviceData = adviceDetails.slip.advice;

        $("h4").text("Advice #" + adviceId);
        $("h1").text(adviceData);
        console.log(adviceId, adviceData);
    },
    error: function (result) {
      console.log(error);
    }
  });
})
