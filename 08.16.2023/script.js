function testConsole() {
  console.log(new Date());
}
testConsole();

var sampleArrayData = ["item1", "item2", "item3", "item4"];

var arrayObject = [
  {
    name: "Shabnam",
    age: "29",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    name: "Ali",
    age: "30",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    name: "Mohammad",
    age: "22",
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    name: "Shadi",
    age: "34",
    image: "https://picsum.photos/200/300?random=4",
  },
];

function createList() {
  var root = document.getElementById("root");

  var listHtml = "";

  //   listHtml = "";
  //   listHtml = "";
  //   listHtml = ``;

  for (var item of sampleArrayData) {
    listHtml += `
                    <li>
                        ${item}
                    </li>
    
    `;
  }
  var ul = document.createElement("ul");
  ul.innerHTML = listHtml;
  root.appendChild(ul);
}
createList();

function createGallery() {
  var root = document.getElementById("root");

  var gallery = "";

  for (var obj of arrayObject) {
    gallery += `
            <div>
                <img src="${obj.image}" />
                <h4>
                    Photo By : ${obj.name}
                </h4>
                <small>
                    Age : ${obj.age}
                </small>
            </div>
        `;
  }
  root.style.display = "flex";
  root.style.flexDirection = "row";
  root.innerHTML = gallery;
}
createGallery();

function createGalleryApi() {
  var countryList = [];
  var root = document.getElementById("root");
  fetch("http://universities.hipolabs.com/search?country=United+States")
    .then((response) => response.json())
    .then((result) => {
      var resultList = '<ul>';
      for (var item of result) {
        resultList += `
                <li>
                    <h6>
                    ${item.name}
                    </h6>
                    <small>
                        ${item.web_pages}
                    </small>
                </li>
            `;
      }
      resultList += '</ul>';

      root.innerHTML = resultList;
    });
}
createGalleryApi();

function createUsaApi() {
  var countryusaList = [];
  var usaRoot = document.getElementById("usaRoot");
  fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then((response) => response.json())
    .then((result) => {
      var resultList = '<ul>';
      for (var item of result.data) {
        resultList += `
                <li>
                    ${item.Nation}
                    ${item.Year}
                    ${item.Population}
                </li>
            `;
      }
      resultList += '</ul>';

      usaRoot.innerHTML = resultList;
    });
}
createUsaApi();
