const createTours = () => {
  const tourDescriptions = [
    {
      title: "Cycle Around Gojo",
      desc:
        "Feel the cool Kyoto breeze as you cycle down the oldest city in the world."
    },
    {
      title: "Lunch Hiking Tour",
      desc: "Eat lunch and hike the mountains and hills of Kyoto."
    },
    {
      title: "Samurai for a Day",
      desc: "Ever wanted to become a honoroubale warrior with a katana sword?"
    },
    {
      title: "Discovering Hidden Temples",
      desc: "Your goal? Find and seek the most underground temples around."
    },
    {
      title: "Cuisine Adventure",
      desc:
        "Kyoto isn't just about japanese food, go around and try the world beneath your tongue."
    },
    {
      title: "Meeting Locals",
      desc:
        "What better way to emmerce yourself in a culture than to talk to local Kyotoites."
    },
    {
      title: "Outside the City",
      desc: "Kyoto city is great, but Kyoto prefecture is even bigger."
    },
    {
      title: "Cheap Eats",
      desc: "On a budget? Find the best foods for the best prices."
    },
    {
      title: "Bus Tour",
      desc: "Take a bus tour to see Kyoto from a different point of view."
    },
    {
      title: "Night Life",
      desc: "After a long day, begins an even longer night."
    },
    {
      title: "Shopping Spree",
      desc: "Have extra cash to spare? lets go shopping."
    }
  ];
  const tours = [];
  for (let i = 0; i < 10; i++) {
    const tour = {
      id: i,
      tourName: tourDescriptions[i].title,
      tourDesc: tourDescriptions[i].desc,
      plans: [
        {
          id: 1,
          planTitle: "Kinkakuji Temple",
          planTime: 30,
          planLocation: {
            lat: "",
            long: ""
          }
        },
        {
          id: 2,
          planTitle: "Fortune Garden",
          planTime: 60,
          planLocation: {
            lat: "",
            long: ""
          }
        },
        {
          id: 3,
          planTitle: "Kamogawa River",
          planTime: 20,
          planLocation: {
            lat: "",
            long: ""
          }
        },
        {
          id: 4,
          planTitle: "Roll Up Icecream Shop",
          planTime: 10,
          planLocation: {
            lat: "",
            long: ""
          }
        },
        {
          id: 5,
          planTitle: "Gear Art Complex",
          planTime: 120,
          planLocation: {
            lat: "",
            long: ""
          }
        }
      ]
    };
    tours.push(tour);
  }
  return tours;
};

const findTour = tourId => {
  const tours = createTours();
  const tour = tours.find(tr => tr.id == tourId);
  return tour;
};

const findPlan = (tour, planId) => {
  const plans = tour.plans;
  const plan = plans.find(pl => pl.id == planId);
  return plan;
};

module.exports = {
  createTours,
  findTour,
  findPlan
};
