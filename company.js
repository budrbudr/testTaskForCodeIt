(async () => {
    'use strict';
    async function getCompany() {
        const response = await axios.get('http://codeit.ai/codeitCandidates/serverFrontendTest/company/getList')
            .then(function (response) {
                console.log(response);
                let tableBody = document.getElementById('nameCompanies');
                for (let i = 0; i <= response.data.list.length; i++) {
                    tableBody.innerHTML += `
                 <tr>
                <td>${response.data.list[i].name}</td>
                 </tr>`;
                }
            })
            .catch(function (error) {
                console.warn(error);
            })
    }


    const companies = await getCompany();

})();
