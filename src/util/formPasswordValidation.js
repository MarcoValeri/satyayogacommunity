const formPasswordValidation = getPassword => {
    if (getPassword.length > 0) {
        return true;
    }
    return false;
}

export default formPasswordValidation;