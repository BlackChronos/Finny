export default function validateInfo2(values) {
    let errors = {};

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone number required';
    } else if (!/[+]\d{2}[(]\d{3}[)]\d{3}[-]\d{4}/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone number is invalid';
    }

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    }

    if (!values.photoLink) {
        errors.photoLink = 'Profile photo is required';
    }


    return errors;
}