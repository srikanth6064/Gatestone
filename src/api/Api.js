
// get all no.of clients

export const getAllclients = () => {
    const url = `https://us-central1-gatestone-yyte.cloudfunctions.net/campaignAnalytics`;
    let data={

        "type":"totalClients"
    }

    let data1={method:'POST'}
    
    return fetch(url,data1).then((response)=>response.json())
    .catch((error)=>console.log(error));
};