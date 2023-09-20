
  function addDivToContainer(clickedId) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'message sender');
      switch (clickedId){
        case "recepcao":
        newDiv.textContent = "voce clicou recepcao";
        break;

        case "financeiro":
        newDiv.textContent = "voce clicou financeiro";
        break;

        case "rh":
        newDiv.textContent = "voce clicou recursos humanos";
        break;

        default:
          "algo de errado"
      }
      var container = document.getElementById("container");

function addDivToContainer() {
      const newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'message sender');
      newDiv.textContent = "clicado";
      const container = document.getElementById("container");
      container.appendChild(newDiv);

  }

  $( document ).ready(function() {
    console.log( "ready!" );
});