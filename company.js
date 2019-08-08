(() => {
    'use strict';
    let data;
    let news;

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

    async function getNews() {
        const response = await axios.get('http://codeit.ai/codeitCandidates/serverFrontendTest/news/getList')
            .then(function (response) {
                console.log(response);
                news = response.data.list;
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
        tableBody.innerHTML = nodeTableText;
    }

    function renderCountCompanies(response) {
        let circle = document.getElementById('circle');
        circle.innerHTML = `${response.length}`;
    }

    function renderPartner(response, numberOfRow) {
        let nodeTableText = '<table>';
        let partnersTable = document.getElementById('companyPartners');
        //console.log(numberOfRow);
        for (let i = 0; i < response[numberOfRow].partners.length; i++) {
            nodeTableText += `
                 <tr>
                <td>${response[numberOfRow].partners[i].name}</td>
                <td>${response[numberOfRow].partners[i].value}%</td>
                 </tr>`;
        }
        nodeTableText += '</table>';
        partnersTable.innerHTML = nodeTableText;

    }

    function openPartners(response) {
        document.querySelectorAll('tr').forEach(element => {
            element.addEventListener('click', e => {
                element.classList.toggle('clickRow');
                renderPartner(data, element.rowIndex);
            })
        })
    }

    setTimeout(async () => {
        await getCompany();
        await getNews();
        await renderTotalCompanies(data);
        await renderCountCompanies(data);
        await openPartners();
    }, 1000);


})();
