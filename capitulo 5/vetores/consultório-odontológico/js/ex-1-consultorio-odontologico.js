var pacientes = [];

// --------------------------------Adicionar paciente-----------------------------------

function adicionarPaciente() {
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");

  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o paciente!");
    inPaciente.focus();
    return;
  }

  pacientes.push(nome);

  var lista = "";

  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;

  inPaciente.value = "";
  inPaciente.focus();
}

var btAdicionar = document.getElementById("btAdicionar");

btAdicionar.addEventListener("click", adicionarPaciente);

// --------------------------------Adicionar urgência-----------------------------------

function adicionarUrgencia() {
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");

  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o paciente!");
    inPaciente.focus();
    return;
  }

  pacientes.unshift(nome);

  var lista = "";

  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;

  inPaciente.value = "";
  inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

// --------------------------------Atender paciente-----------------------------------

function atenderPaciente() { 
  if(pacientes.length == 0){
    alert("Não há paciente na lista de espera!")
    inPaciente.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");
  var atender = pacientes.shift();
  outAtendimento.textContent = atender;

  var lista = "";

  for(i = 0; i < pacientes.length; i++ ) {
    lista+= (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);