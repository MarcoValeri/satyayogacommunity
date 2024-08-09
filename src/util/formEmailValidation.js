const formEmailValidation = getEmail => {
    if (getEmail.length > 0) {
        return true;
    }
    return false;
}

export default formEmailValidation;