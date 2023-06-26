let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((value) => {
    return value.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += `
      <div class="card">
            <img src="https://picsum.photos/300/200/?random=${item}" alt="random">
            <h2>${contests[item].name}</h2>
            <p> Status is ${contests[item].status}</p>
            <p> Site: ${contests[item].site} </p>
            <p> In 24 Hours:  ${contests[item].in_24_hours}</p>
            <p>Starts at: ${contests[item].start_time}</p>
            <p>End at: ${contests[item].end_time}</p>
           <a href="${contests[item].url}">View</a>
        </div>
`;
    }
    card_container.innerHTML = ihtml;
  });

