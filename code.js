
new Chart(document.getElementById("chart"), {
            type: 'bar',
            data: {
              labels: ["1980", "1985", "1990", "1995","2000", "2005", "2010", "2015","2020","2025"],
              datasets: [{
                  label: "Bar Graph",
                  type: "bar",
                  borderColor: "black",
                  data: [1.221,1.196,1.217,1.205,1.563,2.338,2.836,2.510,2.242,4],
                  fill: false
                }, {
                    label: "Line Graph",
                    type: "line",
                    borderColor: "#87edba",
                    data: [1.221,1.196,1.217,1.205,1.563,2.338,2.836,2.510,2.242,4],
                    fill: false
                  }, 
              ]
            },

        });
