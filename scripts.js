function addDivToContainer() {
      const newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'message sender');
      newDiv.textContent = "clicado";
      const container = document.getElementById("container");
      container.appendChild(newDiv);
  }