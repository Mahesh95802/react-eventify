export const BACKEND_URL = 'http://localhost:8000/';

export const GET_EVENTS = {
    path: `api/events`,
    method: 'GET'
}

export const GET_EVENT_BY_ID = (id: number) => ({
    path: `api/events/${id}`,
    method: 'GET'
})

export const PATCH_EVENT_BY_ID = (id: number) => ({
    path: `api/events/${id}`,
    method: 'PATCH'
})

export const GET_THEME = {
    path: `api/themes`,
    method: 'GET'
}

export const PUT_THEME = {
    path: 'api/themes',
    method: 'PUT'
}