class HttpRequest {


    static get(url, params = {}) {

        return HttpRequest.request('GET', url, params);
    }


    static delete(url, params = {}) {

        return HttpRequest.request('DELETE', url, params);
    }

    //alteração
    static put(url, params = {}) {

        return HttpRequest.request('PUT', url, params);
    }

    //cadastro 
    static post(url, params = {}) {

        return HttpRequest.request('POST', url, params);
    }



    static request(method, url, params = {}) {


        return new Promise((resolve, reject) => {


            let ajax = new XMLHttpRequest();

            ajax.open(method.toUpperCase(), url); //qual o método da solicitação e onde ele irá chamar 

            ajax.onerror = event => {
                reject(e);
            }


            //evento de resposta da solicitação 
            ajax.onload = event => {

                let obj = {}

                try {
                    //tentando sobrescrever o objeto 

                    obj = JSON.parse(ajax.responseText)//um nó chamado users com o array de usuários 

                } catch (e) {

                    reject(e);

                    console.error(e)

                }
                resolve(obj);
            };

            ajax.setRequestHeader('Content-Type', 'application/json'); //setar o header, comunicando que é um json que está sendo enviado 

            ajax.send(JSON.stringify(params)); //chama a solicitação ajax s. O SEND só manda string 

        });




    }
}