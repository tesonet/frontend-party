const email = value =>
    value !== 'tesonet' && "Incorrect. Try 'tesonet'."

const password = value =>
    value !== 'partyanimal' && "Nope. Try 'partyanimal'."

export { email, password }