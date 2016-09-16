import * as types from './actionTypes';

export function loadEventsSuccess(data) {
    return {
        type: types.LOAD_EVENTS_SUCCESS,
        list: prepareDataAfterFetch(data)
    };
}

export function searchEvents(query) {
    return {
        type: types.SEARCH_EVENTS,
        query: query.trim()
    }
}

export function filterByTrend(trend) {
    return {
        type: types.FILTER_BY_TREND,
        trend
    }
}


function prepareDataAfterFetch(data) {
    let days = data.days;
    let today = new Date();

    data.events.map((document) => {
        document.count = [];
        for (let i = 0; i < days; i++) {
            let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - days + i); // from first to today

            var existedEvent = document.events.find((event) => {
                return new Date(event.timestamp).getTime() === date.getTime();
            });

            if (existedEvent !== undefined) {
                document.count.push(existedEvent.count);
            } else {
                document.count.push(0);
            }
        }
        return null;
    });

    return data.events;
}