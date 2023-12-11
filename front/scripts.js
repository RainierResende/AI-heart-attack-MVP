/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/pacientes';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if data is an array
      if (Array.isArray(data)) {
        data.forEach(item => insertList(item.name, 
                                        item.age, 
                                        item.sex,
                                        item.cp,
                                        item.trestbps,
                                        item.chol,
                                        item.fbs,
                                        item.restecg,
                                        item.thalach,
                                        item.exang,
                                        item.oldpeak,
                                        item.slope,
                                        item.ca,
                                        item.thal,
                                        item.outcome));
      } else {
        console.error('Unexpected server response:', data);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()




/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputPatient, inputAge, inputSex, inputCp,
                        inputTrestbps, inputChol, inputFbs, 
                        inputRestecg, inputThalach,
                        inputExang, inputOldpeak, inputSlope, inputCa,
                        inputThal) => {
    
  const formData = new FormData();
  formData.append('name', inputPatient);
  formData.append('age', inputAge);
  formData.append('sex', inputSex);
  formData.append('cp', inputCp);
  formData.append('trestbps', inputTrestbps);
  formData.append('chol', inputChol);
  formData.append('fbs', inputFbs);
  formData.append('restecg', inputRestecg);
  formData.append('thalach', inputThalach);
  formData.append('exang', inputExang);
  formData.append('oldpeak', inputOldpeak);
  formData.append('slope', inputSlope);
  formData.append('ca', inputCa);
  formData.append('thal', inputThal);
  
  

  let url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertDeleteButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}

/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  // var table = document.getElementById('myTable');
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/paciente?name='+item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item com nome, quantidade e valor 
  --------------------------------------------------------------------------------------
*/
const newItem = async () => {
  let inputPatient = document.getElementById("newInput").value;
  let inputAge = document.getElementById("newAge").value;
  let inputSex = document.getElementById("newSex").value;
  let inputCp = document.getElementById("newCp").value;
  let inputTrestbps = document.getElementById("newTrestbps").value;
  let inputChol = document.getElementById("newChol").value;
  let inputFbs = document.getElementById("newFbs").value;
  let inputRestecg = document.getElementById("newRestecg").value;
  let inputThalach = document.getElementById("newThalach").value;
  let inputExang = document.getElementById("newExang").value;
  let inputOldpeak = document.getElementById("newOldpeak").value;
  let inputSlope = document.getElementById("newSlope").value;
  let inputCa = document.getElementById("newCa").value;
  let inputThal = document.getElementById("newThal").value;

  

  // Verifique se o nome do produto já existe antes de adicionar
  const checkUrl = `http://127.0.0.1:5000/pacientes?nome=${inputPatient}`;
  fetch(checkUrl, {
    method: 'get'
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.pacientes && data.pacientes.some(item => item.name === inputPatient)) {
        alert("O paciente já está cadastrado.\nCadastre o paciente com um nome diferente ou atualize o existente.");
      } else if (inputPatient === '') {
        alert("O nome do paciente não pode ser vazio!");
      } else if (isNaN(inputAge) || isNaN(inputSex) || isNaN(inputCp) || isNaN(inputTrestbps) || isNaN(inputChol) || isNaN(inputFbs) || isNaN(inputRestecg) || isNaN(inputThalach) || isNaN(inputExang) || isNaN(inputOldpeak) || isNaN(inputSlope) || isNaN(inputCa) || isNaN(inputThal)) {
        alert("Esse(s) campo(s) precisam ser números!");
      } else {
        insertList(inputPatient, inputAge, inputSex, inputCp, inputTrestbps, inputChol, inputFbs, inputRestecg, inputThalach, inputExang, inputOldpeak, inputSlope, inputCa, inputThal);
        postItem(inputPatient, inputAge, inputSex, inputCp, inputTrestbps, inputChol, inputFbs, inputRestecg, inputThalach, inputExang, inputOldpeak, inputSlope, inputCa, inputThal);
        alert("Item adicionado!");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (namePatient, age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, outcome) => {
  var item = [namePatient, age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, outcome];
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cell = row.insertCell(i);
    cell.textContent = item[i];
  }

  var deleteCell = row.insertCell(-1);
  insertDeleteButton(deleteCell);


  document.getElementById("newInput").value = "";
  document.getElementById("newAge").value = "";
  document.getElementById("newSex").value = "";
  document.getElementById("newCp").value = "";
  document.getElementById("newTrestbps").value = "";
  document.getElementById("newChol").value = "";
  document.getElementById("newFbs").value = "";
  document.getElementById("newRestecg").value = "";
  document.getElementById("newThalach").value = "";
  document.getElementById("newExang").value = "";
  document.getElementById("newOldpeak").value = "";
  document.getElementById("newSlope").value = "";
  document.getElementById("newCa").value = "";
  document.getElementById("newThal").value = "";
 

  removeElement();
}