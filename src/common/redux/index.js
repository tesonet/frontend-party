export const event = (type, payload) => ({type, payload});

export const actionBuilder = prefix => actionType => `${prefix}/${actionType}`;
