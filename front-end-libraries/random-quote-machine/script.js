var quotes = [
  {
    quote:
      "OH, NO! 239 lbs?!? I'm a whale! Why are all the good things so tasty?",
    author: "Homer Simpson"
  },
  {
    quote:
      "I know you're upset right now, so I'll pretend you didn't say that.",
    author: "Homer Simpson"
  },
  {
    quote:
      "If you take away our cartoons, we'll grow up without a sense of humor and be robots.",
    author: "Lisa Simpson"
  },
  {
    quote:
      "Mom, romance is dead. It was acquired by Hallmark and Disney in a hostile takeover, homogenized, and sold off piece by piece.",
    author: "Lisa Simpson"
  },
  {
    quote:
      "You've got the brains and the talent to go as far as you want. And when you do, I'll be right there to borrow money.",
    author: "Bart Simpson"
  },
  {
    quote: "To start, press any key. Where’s the ANY key?",
    author: "Homer Simpson"
  },
  {
    quote: "I can’t promise I’ll try, but I’ll try to try.",
    author: "Bart Simpson"
  },
  {
    quote: "Mom, look, I found something more fun than complaining!",
    author: "Lisa Simpson"
  },
  {
    quote: "Shut up, brain. I got friends now. I don't need you anymore.",
    author: "Lisa Simpson"
  },
  {
    quote:
      "Mom, Dad, just so you don't hear any wild rumors, I'm being indicted for fraud in Australia.",
    author: "Bart Simpson"
  },
  {
    quote:
      "Don't you see? Getting what you want all time will ultimately leave you unfulfilled and joyless.",
    author: "Lisa Simpson"
  },
  {
    quote:
      "Oh, meltdown. It's one of these annoying buzzwords. We prefer to call it an unrequested fission surplus.",
    author: "Mr. Burns"
  },
  {
    quote:
      "What’s the point of going out? We’re just gonna wind up back here anyway.",
    author: "Homer Simpson"
  },
  {
    quote:
      "Bart, having never received any words of encouragement myself, I'm not sure how they're supposed to sound, but here goes: I believe in you.",
    author: "Lisa Simpson"
  }
];

function newQuote() {
  const random = Math.round(Math.random() * quotes.length);
  $("#text").html("❝" + quotes[random].quote + "❞");
  $("#author").html("-" + quotes[random].author);
 
  var link = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(quotes[random].quote) + encodeURIComponent(" -" + quotes[random].author);
  $("#tweet-quote").attr("href", link);
}

$(document).ready(function() {
  newQuote();
});

$("#new-quote").click(function() {
  $("#text").animate({
    height: "toggle",
  }, "slow");
  $("#author").animate({
    opacity: "0"
  }, "slow");
   $("#new-quote").attr("class", "btn btn-lg btn-block disabled").prop("disabled", true);
  setTimeout(function(){newQuote(); }, 500);
  $("#text").animate({
    height: "toggle",
  }, "slow");
  $("#author").animate({
    opacity: "1"
  }, "slow");
    setTimeout(function(){$("#new-quote").attr("class", "btn btn-lg btn-block").prop("disabled", false); }, 1200);
});
