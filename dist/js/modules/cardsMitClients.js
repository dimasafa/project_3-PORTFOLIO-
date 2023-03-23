 // cards aus db.json

import { getResource } from "../services/json-server";

 function cardsMitClients () {
    class HappyClient {
        constructor(src, alt, descr, name, stelle, parentSelctor, ...classes) {
            this.src = src;
            this.alt = alt;
            this.descr = descr;
            this.name = name;
            this.stelle = stelle;
            this.classes = classes;
            this.parent = document.querySelector(parentSelctor);
        }
    
        render() {
            const element = document.createElement('div');
    
            element.innerHTML = `
            <div class="client__box">
                <img src=${this.src} alt=${this.alt} class="client__img">
                <div class="client__text">
                    <div class="client__descr">${this.descr}</div>
                    <div class="client__name">
                        <div class="client__name-1">${this.name}</div>
                        <div class="client__name-2">${this.stelle}</div>
                    </div>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }
    getResource('http://localhost:3000/clients')
    .then(data => {
        data.forEach(({src, alt, descr, name, stelle}) => {
            new HappyClient(src, alt, descr, name, stelle, ".client__wrapper").render();
        });
    });

 }

export default cardsMitClients;

