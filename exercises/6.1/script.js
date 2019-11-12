window.onload = function () {
    let brazilStates = {
        'Default': 'Selecione o Estado',
        'AC': 'Acre',
        'AL': 'Alagoas',
        'AP': 'Amapá',
        'AM': 'Amazonas',
        'BA': 'Bahia',
        'CE': 'Ceará',
        'DF': 'Distrito Federal',
        'ES': 'Espírito Santo',
        'GO': 'Goiás',
        'MA': 'Maranhão',
        'MT': 'Mato Grosso',
        'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais',
        'PA': 'Pará',
        'PB': 'Paraíba',
        'PR': 'Paraná',
        'PE': 'Pernambuco',
        'PI': 'Piauí',
        'RJ': 'Rio de Janeiro',
        'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul',
        'RO': 'Rondônia',
        'RR': 'Roraima',
        'SC': 'Santa Catarina',
        'SP': 'São Paulo',
        'SE': 'Sergipe',
        'TO': 'Tocantins'
    }

    for (let stateInitials in brazilStates) {
        const stateSelect = document.getElementById("select-state");
        let stateOption = document.createElement('option');

        stateSelect.appendChild(stateOption);
        stateOption.value = stateInitials;
        stateOption.innerHTML = brazilStates[stateInitials];
    }

    const curriculum = document.getElementById("user-curriculum");
    let inputs = document.getElementsByTagName("input");

    document.getElementById("btn-submit").addEventListener("click", function (event) {
        event.preventDefault()

        curriculum.style.display = "block";
        curriculum.appendChild(document.createElement("h5"))
        curriculum.firstChild.innerHTML = "Dados Pessoais"

        for (let index = 0; index < inputs.length; index++) {
            let createField = document.createElement("p")
            curriculum.appendChild(createField)

            if (inputs[index].id == "user-city") {
                createField.innerHTML = inputs[index].value + "/" + document.getElementById("select-state").value;
            } else if (inputs[index].type == "radio") {
                createField.innerHTML = document.querySelector("input[type]:checked").value + "<br><br><h5>Último emprego</h5>"
                index++
            } else {
                createField.innerHTML = inputs[index].value
            }
        }
        let createField = document.createElement("p")
        curriculum.appendChild(createField)
        createField.innerHTML = document.getElementById("curriculum-summary").value
    });

    document.getElementById("btn-clear").addEventListener("click", function () {
        const curriculum = document.getElementById("user-curriculum");
        while (curriculum.firstChild) {
            curriculum.firstChild.remove()
        }

        curriculum.style.display = "none";
    });
}
