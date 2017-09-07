export const event = (type, payload) => ({type, payload});

export const actionBuilder = prefix => actionType => `${prefix}/${actionType}`;

export const moduleStateGetter = name => state => state && state[name] != null ? state[name] : {};
