import axios from 'axios';

import {GET_STUDENT} from './types';

export const getstudent = () => dispatch => {
    axios.get('/api/newstudent/')
    .then(res => {
        dispatch({
            type: GET_STUDENT,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}