import { API_URL } from '../config/config';

export function getBubbleList(dimWords, scoreDimWords, modelId) {
    console.log(dimWords, scoreDimWords, modelId)
    return fetch('https://cors-anywhere.herokuapp.com/' + API_URL, {
        method: 'post',
        body: JSON.stringify({
            dim_words: dimWords,
            score_dim_words: scoreDimWords,
            model_id: modelId}),
        headers: {'Access-Control-Allow-Origin': '*'}
    }).then(response => {
        console.log(response.body);
        return response.json();
    }, error => {
        console.log(error);
    });
}