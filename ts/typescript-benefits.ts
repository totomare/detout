// Credit : https://learntypescript.dev

type VisitsData = {
  visits: Array<{
    page: {
      name: string;
    };
  }>;
  user: {
    name: string;
  };
};
function logVisits(data: VisitsData) {
  data.visits.forEach((visit) => console.log(visit.page.name, data.user.name));
}

logVisits({
  visits: [{ page: { name: "Page1" } }, { page: { name: "Page2" } }],
  user: { name: "Bob" },
});

/*
[LOG]: "Page1",  "Bob" 
[LOG]: "Page2",  "Bob" 
*/