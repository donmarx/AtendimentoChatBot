  function addDivToContainer() {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'message sender');
      newDiv.textContent = "clicado";
      var container = document.getElementById("container");
      container.appendChild(newDiv);
  }