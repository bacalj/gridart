var sqs = document.querySelectorAll('#grid td.grido');

sqs.forEach(e => e.addEventListener("click", function() {
  if (this.style.backgroundColor !== "darkblue"){
    this.style.backgroundColor = "darkblue"
  } else {
    this.style.backgroundColor = "white"
  }
  
  var theRows = document.querySelector('#grid').rows;

  for (r of theRows ){
    let rep = [];
    for (c of r.cells){
      if (c.style.backgroundColor == "darkblue"){
        rep.push('1')
      } else {
        rep.push('0')
      }
    }
    r.cells[8].innerHTML = "[ " + rep + " ]"
  }
}));