function search_fruits(e) {
  const searchTxt = e.target.value.toLowerCase().trim();
  const newItems = listOffruit.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTxt)
  );
  writeData(newItems);
}

const listOffruit = [
  {
    id:1,
    name: "Apple",
    price: "80",
    url: "images/apple-juice.jpg"
  },
  {
    id:2,
    name: "Mango",
    price: "90",
    url: "images/mango-juice.jpg"
  },
  {
    id:3,
    name: "Orange",
    price: "70",
    url: "images/orange.jpeg"
  },
  {
    id:4,
    name: "banana",
    price: "30",
    url: "images/banana.jpg"
  },
  {
    id:5,
    name: "blueberry",
    price: "40",
    url: "images/blueberry.jpg"
  },
  {
    id:6,
    name: "grape",
    price: "50",
    url: "images/grape.jpg"
  },
  {
    id:7,
    name: "kiwi",
    price: "80",
    url: "images/kiwi.jpeg"
  },
  {
    id:8,
    name: "watermelon",
    price: "30",
    url: "images/watermelon.jpg"
  },
  {
    id:9,
    name: "pomegranate",
    price: "45",
    url: "images/pomegranate.jpg"
  }

];

function initialStore() {
  const items = listOffruit;
  writeData(items);
}

function writeData(items) {
  const fruitsDiv = document.getElementById("fruit-container");
  fruitsDiv.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("div");
    li.className = "temp";
    li.innerHTML = `<div class="fruit" name=${item.name}>
    <h2 class="fruit">${item.name}</h2>
    <p>Price Rs. ${item.price}</p>
    <img src=${item.url} alt="Lamp" width="90" height="90" style="border-radius:10" height="100" />
    </div>`;
    fruitsDiv.appendChild(li);
  });
}
initialStore();
const searchInput = document.querySelector("#searchbar");
searchInput.addEventListener("keyup", search_fruits);
