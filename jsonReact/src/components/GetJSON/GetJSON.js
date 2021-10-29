import React, { Component } from 'react';

import data from './APIdata.js';

class GetJSON extends Component {
    constructor(props) {
        super(props);
        this.createDisplay = this.createDisplay.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.createDisplay);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.createDisplay)
    }

    createDisplay() {
        let title = document.createElement("h1")
        title.innerHTML = "Title: "+ data[0].label

        let list = document.createElement("ul")
        for (let i = 0; i < data[0].row.length; i++) {
            let level = document.createElement("p")
            level.innerHTML = "Level: "+ data[0].row[i].level
            list.append(level)
            for (let j = 0; j < data[0].row[i].locations.length; j++) {
                let name = document.createElement("p")
                name.innerHTML = "Name: "+ data[0].row[i].locations[j].name
                list.append(name)
                for (let k = 0; k < data[0].row[i].locations[j].stock.length; k++) {
                    let product = document.createElement("p")
                    product.innerHTML = "Product: "+ data[0].row[i].locations[j].stock[k].product
                    let quantity = document.createElement("p")
                    quantity.innerHTML = "Quantity: "+ data[0].row[i].locations[j].stock[k].qty
                    let replenishment = document.createElement("p")
                    replenishment.innerHTML = "Replenishment: "+ data[0].row[i].locations[j].stock[k].replenishment

                    list.append(product)
                    list.append(quantity)
                    list.append(replenishment)

                }
            }

            document.getElementById("holder").append(title)
            document.getElementById("holder").append(list)
        }
    }

    render() {

        return (
            <div id="holder">
            </div>

        );
    }
}

export default GetJSON;