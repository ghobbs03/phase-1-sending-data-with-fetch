// Add your code here
  
function submitData(nameVal, emailVal) {
    const formData = {
        name: nameVal,
        email: emailVal
    };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    const call = fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then(obj => {
        const p = document.createElement('p');
        p.textContent = obj.id;
        document.body.append(p);
    })
        .catch(error =>{
        const p = document.createElement('p');
        p.textContent = error.message;
        document.body.append(p);
    })

    return call;
}