const baseUrl = 'http://localhost:8082/api/User'

export const Login = (raw) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw2 = JSON.stringify({
        "email": `${raw.emailLogin}`,
        "password": `${raw.passLogin}`
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw2,
        redirect: 'follow'
    };
    console.log(raw2)
    fetch(`${baseUrl}/login`, requestOptions)
        .then(response => response.text())
        .then(result => {
            if (JSON.parse(result).status == 400) {
                console.log("ERROR 400")
                $('.errorlogin').fadeIn(500);
                $('.errorlog').removeClass('transform-out').addClass('transform-in');
                e.preventDefault();
            }
            else {
                location.href = 'http://lagorodrigo.herokuapp.com'
            }

        })
        .catch(error => console.log('error', error));
}


export const Register = (raw) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw2 = JSON.stringify({
        "name": `${raw.nameRegister}`,
        "lastName": `${raw.lastNameRegister}`,
        "email": `${raw.emailRegister}`,
        "password": `${raw.passRegister}`,
        "confirmPassword": `${raw.passCmRegister}`
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw2,
        redirect: 'follow'
    };
    console.log(raw2)
    fetch(`${baseUrl}/register`, requestOptions)
        .then(response => response.text())
        .then(result => {
            if (JSON.parse(result).status == 200) {
                $('.confirmRegister').fadeIn(500);
                $('.confirmReg').removeClass('transform-out').addClass('transform-in');
                e.preventDefault();
            }
        })
        .catch(error => console.log('error', error));
}