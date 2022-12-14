export const classNames = (classNames) => classNames.join(' ');

export const extractSentenceFromForm = (form) => {
    const formCopy = { ...form };

    Object.keys(formCopy).forEach((key) => {
        if (!formCopy[key]) {
            formCopy[key] = `with no ${key}`;
        }
    });

    return Object.values(formCopy).join(', ');
};
