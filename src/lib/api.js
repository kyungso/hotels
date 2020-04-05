import axios from "axios";

const api = axios.create({
    baseURL: "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev",
});

export const hotelListAPI = {
    hotelList: ({page, filter_condition}) => api.get(`hotels`, {
        params: {
            page: page,
            filters: filter_condition
        }
    }),
    hotelPrice: ({hotelId}) => api.get(`hotel-prices`, {
        params: {
            ids: hotelId,
        }
    })
};