import { SENTENCE_PREFIX } from './constants';

export const classNames = (classNames) => classNames.join(' ');

export const extractSentenceFromForm = (form) => {
    const formCopy = { ...form };

    Object.keys(formCopy).forEach((key) => {
        if (!formCopy[key]) {
            formCopy[key] = `with no ${key}`;
        }
    });

    const description = Object.values(formCopy).join(', ');
    return buildSentenceFromDescription(description);
};

export const buildSentenceFromDescription = (description) =>
    `${SENTENCE_PREFIX}${description}`;
