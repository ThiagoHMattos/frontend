function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;


    if(values.name === "") {
        error.name = "No espaço Nome deve estar preenchido"
    }

    else {
        error.name = ""
    }

    if(values.email === "") {
        error.email = "No espaço e-mail deve estar preenchido"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "E-mail não bate os requisitos"

    }else {
        error.email = ""
    }
    if(values.password === "") {
        error.password = "No espaço Senha deve estar preenchido"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "A Senha precisa ter acima de 8 caractéres e um caractére especial"

    }else {
        error.password = ""
    }
    return error;
}

export default Validation