// 
function tabla() {
      let input = document.getElementById("input").value;
      let table = "";
      for (let i = 1; i <= 10; i++) {
        table += `${input} * ${i} = ${input * i}<br>`;
      }
      document.getElementById("table").innerHTML = table;
    }
