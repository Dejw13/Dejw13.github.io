const data = [
  {
    nr: 1,
    pasmo: "Góry Świętokrzyskie",
    nazwa: "ŁYSICA",
    wysokość: 612,
  },
  {
    nr: 2,
    pasmo: "Masyw Ślęży (Przedgórze Sudeckie)",
    nazwa: "ŚLĘŻA",
    wysokość: 718,
  },
  {
    nr: 3,
    pasmo: "Góry Kaczawskie",
    nazwa: "SKOPIEC",
    wysokość: 724,
  },
  {
    nr: 4,
    pasmo: "Góry Bardzkie",
    nazwa: "KŁODZKA GÓRA",
    wysokość: 765,
  },
  {
    nr: 5,
    pasmo: "Góry Wałbrzyskie",
    nazwa: "CHEŁMIEC",
    wysokość: 869,
  },
  {
    nr: 6,
    pasmo: "Góry Opawskie",
    nazwa: "BISKUPIA KOPA",
    wysokość: 889,
  },
  {
    nr: 7,
    pasmo: "Beskid Makowski",
    nazwa: "LUBOMIR",
    wysokość: 912,
  },
  {
    nr: 8,
    pasmo: "Góry Stołowe",
    nazwa: "SZCZELINIEC WIELKI",
    wysokość: 919,
  },
  {
    nr: 9,
    pasmo: "Beskid Mały",
    nazwa: "CZUPEL",
    wysokość: 934,
  },
  {
    nr: 10,
    pasmo: "Góry Kamienne",
    nazwa: "WALIGÓRA",
    wysokość: 936,
  },
  {
    nr: 11,
    pasmo: "Rudawy Janowickie",
    nazwa: "SKALNIK",
    wysokość: 945,
  },
  {
    nr: 12,
    pasmo: "Góry Bystrzyckie",
    nazwa: "JAGODNA",
    wysokość: 977,
  },
  {
    nr: 13,
    pasmo: "Góry Złote",
    nazwa: "KOWADŁO",
    wysokość: 989,
  },
  {
    nr: 14,
    pasmo: "Beskid Niski",
    nazwa: "LACKOWA",
    wysokość: 997,
  },
  {
    nr: 15,
    pasmo: "Góry Sowie",
    nazwa: "WIELKA SOWA",
    wysokość: 1015,
  },
  {
    nr: 16,
    pasmo: "Pieniny",
    nazwa: "WYSOKA",
    wysokość: 1050,
  },
  {
    nr: 17,
    pasmo: "Góry Orlickie",
    nazwa: "ORLICA",
    wysokość: 1084,
  },
  {
    nr: 18,
    pasmo: "Góry Bialskie",
    nazwa: "RUDAWIEC",
    wysokość: 1112,
  },
  {
    nr: 19,
    pasmo: "Góry Izerskie",
    nazwa: "WYSOKA KOPA",
    wysokość: 1126,
  },
  {
    nr: 20,
    pasmo: "Beskid Wyspowy",
    nazwa: "MOGIELICA",
    wysokość: 1170,
  },
  {
    nr: 21,
    pasmo: "Beskid Śląski",
    nazwa: "SKRZYCZNE",
    wysokość: 1257,
  },
  {
    nr: 22,
    pasmo: "Beskid Sądecki",
    nazwa: "RADZIEJOWA",
    wysokość: 1262,
  },
  {
    nr: 23,
    pasmo: "Gorce",
    nazwa: "TURBACZ",
    wysokość: 1310,
  },
  {
    nr: 24,
    pasmo: "Bieszczady",
    nazwa: "TARNICA",
    wysokość: 1346,
  },
  {
    nr: 25,
    pasmo: "Masyw Śnieżnika",
    nazwa: "ŚNIEŻNIK",
    wysokość: 1425,
  },
  {
    nr: 26,
    pasmo: "Karkonosze",
    nazwa: "ŚNIEŻKA",
    wysokość: 1602,
  },
  {
    nr: 27,
    pasmo: "Beskid Żywiecki",
    nazwa: "BABIA GÓRA",
    wysokość: 1725,
  },
  {
    nr: 28,
    pasmo: "Tatry",
    nazwa: "RYSY",
    wysokość: 2499,
  },
];

function dynamicsort(property, order) {
  var sort_order = 1;
  if (order === "desc") {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

function generateHeaders() {
  const table = document.querySelector(".dynamic-table");
  const headers = Object.keys(data[0]);

  const THeader = document.createElement("tr");
  const Theaders = headers.forEach((el) => {
    const thEl = document.createElement("th");
    thEl.innerHTML = el;
    thEl.dataset.filter = el;
    thEl.dataset.order = "desc";
    thEl.classList.add("table-header");
    thEl.addEventListener("click", (e) => {
      if (thEl.dataset.order == "asc") {
        thEl.dataset.order = "desc";
      } else {
        thEl.dataset.order = "asc";
      }
      generateColumns(el, thEl.dataset.order);
    });
    THeader.appendChild(thEl);
  });
  table.appendChild(THeader);
}

function generateColumns(key = null, order = null) {
  const elements = [];
  const tbody = document.createElement("tbody");

  const table = document.querySelector(".dynamic-table");
  const oldChilds = table.childNodes;
  oldChilds.forEach((e, key) => {
    if (key > 0) e.remove();
  });
  let sortData = [];
  if (key && order) {
    sortData = data.sort(dynamicsort(key, order));
  } else {
    sortData = data;
  }

  sortData.forEach((item) => {
    const tr = document.createElement("tr");
    Object.values(item).forEach((el) => {
      const td = document.createElement("td");
      td.innerHTML = el;
      tr.appendChild(td);
    });
    const oldChilds = table.childNodes;
    elements.push(tr);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

generateHeaders();
generateColumns();
