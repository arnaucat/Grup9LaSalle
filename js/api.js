
    //Arnau DB
    const url = "https://projectesalle-default-rtdb.europe-west1.firebasedatabase.app/" 

    const project = "grup-9/"
    const database = "formulari.json"

    fetch(url + project + database)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        
        let idAlumne

        for (const id in res) {
            if (res[id].nom == "Carlos") {
                idAlumne = id;
                break;
            }
        }

        console.log("ID de Carlos: " + idAlumne);
    })

    function postFormulari(name,email,phone,subject,message) {
        fetch(url + project + database, {
            method: 'POST',
            body: JSON.stringify({nom})
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

    function obtenerDatos(){
        fetch(url + project + database)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            })
    }