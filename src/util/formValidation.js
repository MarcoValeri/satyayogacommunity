const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSanitiseStringInput = getInput => {
    let output = getInput.replace(/(<([^>]+)>)/ig, '');
    output = output.trim();
    return output;
}

export const formEmailValidation = getEmail => {
    if (getEmail.length > 0 && getEmail.length < 50 && emailRegex.test(getEmail)) {
        return true;
    }
    return false;
}

export const formPasswordValidation = getPassword => {
    if (getPassword.length > 0 && getPassword.length < 100) {
        return true;
    }
    return false;
}