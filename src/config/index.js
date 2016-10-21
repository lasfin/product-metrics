const localBaseUrl = `http://localhost:5000/`;

export default {
    api: {
        events: '/events/',
        features: '/features/'
    },
    apiLocal: {
        events: `${localBaseUrl}events/`,
        features: `${localBaseUrl}features/`
    }
}