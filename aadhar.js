

const getAadhar = () =>{
    fetch('https://uidai.gov.in/ecosystem/authentication-devices-documents/authentication-documents')
    .then(response => response.json())
    .then(json=>{
        console.log(json)
    })    
}

getAadhar();