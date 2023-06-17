const urls = [pieChartDataUrl, barChartDataUrl];

Promise.all(urls.map(url => d3.json(url))).then(run);

function run(dataset) {
    d3PieChart(dataset[0], dataset[1]);
    d3BarChart(dataset[1]);
};

const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

