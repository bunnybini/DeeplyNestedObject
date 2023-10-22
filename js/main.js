let modal = document.getElementById("modalPopup");
let modalDailyDate = document.querySelector(".dailyDate");
let modalDailyTitle = document.querySelector(".dailyTitle");
let modalDailyContent = document.querySelector(".dailyContent");

let spanClose = document.querySelector(".close");
let mangoElement = document.querySelector(".day24");
let mangodetailElement = document.querySelector(".mangodetail");

let moreInfo = [
  {
    date: "1st Janurary 2016",
    title: "First Time meeting Mango",
    content:
      "I saw a white, fluffy creature running and playing with boundless joy, trying to wake the others up. It was small, with dark black eyes and nose, and it looked at us with a curious expression.",
  },

  {
    date: "2nd January 2016",
    title: "Bring her home",
    content:
      "We brought her home and showed her the new room. She fell asleep right away, as if she had known this place for a long time",
  },

  {
    date: "3rd January 2016",
    title: "She tries to jump out of the fence",
    content:
      "We put her inside the fence to let her get used to the house, but she tried to jump out of the fence. She literally tried to climb it",
  },

  {
    date: "4th January 2016",
    title: "Finally, She is free",
    content:
      "As she seemed okay, I let her out of the fence. Then, she started to search for something to chew on, and her target was the TV remote control.",
  },

  {
    date: "20th May 2016",
    title: "Her 5 jelly paw",
    content: "Look at her cute jelly paw. That's what I'm living for.",
  },

  {
    date: "10th June 2016",
    title: "Her First walk",
    content:
      "After all the vaccination, we took her out for her first walk. She wore a little dog jumper and shoes..",
  },

  {
    date: "7th August 2016",
    title: "Her first haircut",
    content:
      "Since her hair was covering her eye, we decided to give her a haircut. We went to the dog beauty shop and waited for three hours. Then, ta-da! She emerged looking like the queen of the dog empire.",
  },

  {
    date: "8th September 2016",
    title: "Big Mistake",
    content:
      "She ruined my stuff for the first time. She tore apart my lipstick and ate them all. I guess the smell was attractive ",
  },

  {
    date: "9th December 2016",
    title: "Snow playtime!!",
    content:
      "She saw the snow for the first time in her life. She was afraid at first, but then she ran and dug into the snow in our front yard.",
  },

  {
    date: "10th March 2017",
    title: "BathTime",
    content:
      "Every twice a month, we took her to the shower booth and gave her a bath. It's so cute how she looks like an alien without her fur.",
  },

  {
    date: "11th July 2017",
    title: "The way she looks at me makes me happy",
    content:
      "Whenever I've had a tough day, she lies beside me, gazing into my eyes with her sweet expression. It brings me happiness, and that's all I need.",
  },

  {
    date: "31th October 2017",
    title: "She is Pumpkin Witch!",
    content:
      "We got a gift for Mango's Halloween costume from Godiva. She was the star of the day.",
  },

  {
    date: "13th February 2018",
    title: "Obsessed with my slipper",
    content:
      "Suddenly, my slipper kept disappearing and going missing. Later, we figured out that Mango was the culprit in this case, and she was obsessed with my slipper",
  },

  {
    date: "25th February 2018",
    title: "Bought her new toys",
    content:
      "Since she kept stealing my stuffed animals and clothes, I bought her various types of toys just for her. She started to like this rope-type toy.",
  },

  {
    date: "15th June 2018",
    title: "Trip to Busan",
    content:
      "Busan is where my grandparents live, so we took Mango there for the first time. We visited the beach and let her step onto the sand, and she absolutely loved it.",
  },

  {
    date: "16th August 2018",
    title: "Sunny Day",
    content:
      "She loves going out to our backyard and sitting in the sunlight to soak up the rays",
  },

  {
    date: "17th March 2019",
    title: "Facial expression",
    content:
      "I always find amusement in her human-like facial expressions. One day, I playfully placed her inside a laundry bag, and she shot me an annoyed look. I can't help but adore her expressive antics",
  },

  {
    date: "18th June 2020",
    title: "Hilarious moment from camping",
    content:
      "We adore our family camping trips, and they often lead to amusing moments. On one occasion, Mango quickly squeezed her body onto one of the tiniest chairs to escape the hot rocks. It was then we realized that the rocks were too hot for her to handle. We felt a twinge of sympathy for her discomfort but couldn't help bursting into laughter at her comical pose",
  },

  {
    date: "19th November 2020",
    title: "Never sleep without cushion",
    content:
      "Our royal highness, the Mango queen, never sleeps without a blanket or cushion. She always seeks out a spot with a cushion to lean on when she sleeps. What a loyal and pampered dog!",
  },

  {
    date: "20th December 2020",
    title: "She doesn't like snow",
    content:
      "She doesn't like to bury her body under the snow because her fur would freeze, and she despises that feeling. Instead, she enjoys strolling on the thin layer of snow, savoring the scent of winter",
  },

  {
    date: "21st August 2021",
    title: "Time to say Goodbye",
    content:
      "It's time to say goodbye. I'm leaving my country to attend college, and it's the first time both Mango and I will be living apart. This was our last photo together in 2021.",
  },

  {
    date: "22nd March 2022",
    title: "How we dry out Dog",
    content:
      "My mom sent me this photo of her drying Mango with her ears covered. She had seen a news report that dogs don't like the sound of the dryer, so she covered Mango's ears to protect her. It was incredibly cute.",
  },

  {
    date: "23rd December",
    title: "Makeup filter",
    content:
      "I took a picture of Mango with a makeup filter that was popular back in the day. She looks so pretty and cute.",
  },

  {
    date: "27th October | MANGO'S BRITHDAY",
    title: "10 27 2015",
    content:
      "On 10/27/2015, a beautiful and precious puppy was born and miraculously came to our house on 01/02/2016. It was a wonderful gift for me as I was entering middle school, marking a fresh start with a new family that was the best gift ever. I could sense that we were destined to share a strong bond. Meeting my best friend brought me immense happiness",
    details: {
      name: "Mango",
      type: "dog",
      breed: "Bichon Frise",
      Age: "7 years",
    },
  },
];

function Hover() {
  this.parentNode.classList.add("hover");
}

// === door-front: hover + click events

var doorFronts = document.querySelectorAll(".front");

for (var i = 0; i < doorFronts.length; i++) {
  doorFronts[i].addEventListener("mouseover", Hover);
  doorFronts[i].addEventListener("click", clickFront);
}

// === door-back: click event

var doorBacks = document.querySelectorAll(".back");

for (var i = 0; i < doorBacks.length; i++) {
  doorBacks[i].addEventListener("click", clickBack);
}

// === door-front: click toggles class 'open'

function clickFront() {
  var numberClicked = this.innerHTML;

  if (numberClicked === "Mango") {
    modalDailyDate.innerHTML = moreInfo[moreInfo.length - 1].date;
    modalDailyTitle.innerHTML = moreInfo[moreInfo.length - 1].title;
    modalDailyContent.innerHTML = moreInfo[moreInfo.length - 1].content;

    var mangoDetails = moreInfo[moreInfo.length - 1].details;
    mangodetailElement.innerHTML = `
      Name: ${mangoDetails.name}<br>
      Type: ${mangoDetails.type}<br>
      Breed: ${mangoDetails.breed}<br>
      Age: ${mangoDetails.nowAge}<br>
    `;
  } else {
    mangodetailElement.innerHTML = "";
  }

  this.parentNode.classList.toggle("open");
}

// === door-back: click opens the modal + displays corresponding content

function clickBack() {
  var calendarNum = this.previousElementSibling.innerHTML;
  var calendarNumIndex = calendarNum - 1;

  // change modal css to display it //
  modal.style.display = "block";

  // put message from array into modal content //
  modalDailyDate.innerHTML = moreInfo[calendarNumIndex].date;
  modalDailyTitle.innerHTML = moreInfo[calendarNumIndex].title;
  modalDailyContent.innerHTML = moreInfo[calendarNumIndex].content;
}

// === click span (x) to close modal

spanClose.onclick = function () {
  modal.style.display = "none";
};

// === click anywhere outside modal to close it

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
