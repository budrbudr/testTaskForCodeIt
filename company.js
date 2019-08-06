( () => {
    'use strict';
    let data;
    async function getCompany() {
        const response = await axios.get('http://codeit.ai/codeitCandidates/serverFrontendTest/company/getList')
            .then(function (response) {
                console.log(response);
                data = response.data.list;
            })
            .catch(function (error) {
                console.warn(error);
            })
    }
    function renderTotalCompanies(response) {
        let nodeTableText = '<table>';
        let tableBody = document.getElementById('nameCompanies');
        for (let i = 0; i < response.length; i++) {
            nodeTableText += `
                 <tr>
                <td>${response[i].name}</td>
                 </tr>`;
        }
        nodeTableText += '</table>';
        tableBody.innerHTML=nodeTableText;
    }
    function renderCountCompanies(response) {
        let circle = document.getElementById('circle');
        circle.innerHTML = `${response.length}`;
    }
    setTimeout(async ()=> {
        await getCompany();
        await renderTotalCompanies(data);
        await renderCountCompanies(data);
    }, 1000);


})();
