export default function validateInfo(values, data) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    } else if (data.includes(values.email)) {
        errors.email = 'Email address is taken';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Password confirmation is required';
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = 'Passwords do not match';
    }
    return errors;
}