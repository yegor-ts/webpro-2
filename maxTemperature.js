(() => {
  const table = document.querySelector("table");
  const trElements = table.querySelectorAll("tr");

  const td = trElements[1].querySelectorAll("td");

  const maxTemperature = {
    value: parseFloat(td[3].innerHTML, 10),
    date: td[2].innerHTML,
  };

  for (let i = 2; i < trElements.length; i++) {
    const tdElements = trElements[i].querySelectorAll("td");
    const currentElement = parseFloat(tdElements[3].innerHTML, 10);

    if (currentElement > maxTemperature.value) {
        maxTemperature.value = currentElement;
        maxTemperature.date = tdElements[2].innerHTML
    };
  }

  alert(`Максимальна температура становила ${maxTemperature.value} була ${maxTemperature.date}`);
})();
