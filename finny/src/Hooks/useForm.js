import {useEffect, useState} from 'react';

export default function useForm(callback, validate, data = null) {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values, data));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
                // setIsSubmitting(false);
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
}