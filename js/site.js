const memoryMango = {
  name: "Mango",
  type: "dog",
  breed: "Bichon Frise",
  wasAge: "2 months",
  nowAge: "7 years",
  isFriendly: true,
  isPretty: true,

  skill: {
    hand: "Can use both right and left hands separately.",
    spin: "Only works with snacks.",
    sit: "Very well-behaved.",
    lay: "You need to put your hand down to the ground.",
    wait: "My dad is the best at this.",
    nose: "Mango will place her nose on your hand.",
    gunshot: "When you say 'bang!,' she will lay down as if she's been shot.",
  },

  dailyWalk: 2,

  favToy: ["brownies", "mongyi", "bbangyi"],

  birthday: {
    year: "2015",
    date: "Oct27",
  },

  firstTimeMet: {
    year: "2016",
    date: "Jan01",
    time: "02:25 PM",
  },

  place: {
    location: "Emart",
    floor: "3rd floor",
    store: "Molis Pet Store",
  },

  store: {
    firstFloor: "Bakery, Agricultural Produce, Seafood, Interior Design",
    secondFloor: "Home Appliances, Culture/Fashion, Cosmetics",
    thirdFloor: "Animal Hospital, Beauty Salon, Molis Pet",
    fourthFloor: "Parking Lot",
  },

  familyMembers: ["Me", "My parents", "My brother"],

  specialMoments: [
    "The first time I met Mango",
    "The moment we decided to bring Mango home",
    "The day Mango became a part of my family",
  ],

  responsibilities: [
    "Feeding Mango",
    "Taking Mango for walks",
    "Grooming Mango",
    "Training Mango",
  ],

  getFloorStore: function (floor) {
    return this.store[floor];
  },

  meetMango: function () {
    console.log("I met Mango for the first time on " + this.firstTimeMet.date);
    console.log(
      "Location: " + this.place.location + " on the " + this.place.floor
    );
    console.log("Mango was just " + this.wasAge + " old at that time.");
    console.log("It was a special moment for " + this.familyMembers.join(", "));
    console.log(
      "We felt an instant connection with Mango, and the decision to bring her home changed my life forever."
    );
  },

  shareResponsibilities: function () {
    console.log(
      "As a family, I shared various responsibilities for taking care of Mango:"
    );
    this.responsibilities.forEach((responsibility, index) => {
      console.log(`${index + 1}. ${responsibility}`);
    });
  },

  specialMomentsTogether: function () {
    console.log("We've had many special moments with Mango:");
    this.specialMoments.forEach((moment, index) => {
      console.log(`${index + 1}. ${moment}`);
    });
  },
};

memoryMango.meetMango();
memoryMango.shareResponsibilities();
memoryMango.specialMomentsTogether();

console.log(memoryMango.getFloorStore("firstFloor")); // Outputs: "Bakery, Agricultural Produce, Seafood, Interior Design"
console.log(memoryMango.getFloorStore("thirdFloor")); // Outputs: "Animal Hospital, Beauty Salon, Molis Pet"
