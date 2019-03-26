const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.

const container = document.querySelector("#display-container");
const inputField = document.createElement("input");
inputField.placeholder = "Search By Name, Email, or Number";
inputField.style.width = "190px"
container.appendChild(inputField);
const resultsDisplay = document.createElement("section");
container.appendChild(resultsDisplay);
const agentDisplay = document.createElement("section");
agentDisplay.innerHTML = "<h1>Agent List</h1>";
const vehicleDisplay = document.createElement("section");
vehicleDisplay.innerHTML = "<h1>Vehicle List</h1>";

const allInfoForAgents = salesByWeek.map(obj => obj.sales_agent)
const agentAndProfit = salesByWeek.map(obj => [obj.sales_agent, obj.gross_profit]);

inputField.addEventListener("keydown", KeyboardEvent => {
    if (KeyboardEvent.key === "Enter") {
        let results = [];
        const searchTerm = inputField.value
        agentAndProfit.forEach(agent => {
            for(key in agent[0]){
                if(agent[0][key].includes(searchTerm)){
                    let newObj = {
                        name: `${agent[0].first_name} ${agent[0].last_name}`,
                        email: `${agent[0].email}`,
                        phone: `${agent[0].mobile}`,
                        profit: `$${agent[1]}`
                    }
                    results.push(newObj);
                    break;
                }
            }
        })
        resultsDisplay.innerHTML = "<h1>Search Results</h1>";
        results.forEach(result => {
        resultsDisplay.innerHTML += `
        <p><em>Agent Name</em>: ${result.name}</p>
        <p><em>Email</em>: ${result.email}</p>
        <p><em>Mobile Number</em>: ${result.phone}</p>
        <p><em>Profit</em>: ${result.profit}
        <hr/>`
    })
    }
})

const buildElWithText = (el, txt) => {
    const newEl = document.createElement(el);
    newEl.textContent = txt;
    return newEl;
}

const agentList = salesByWeek.map(obj => [obj.sales_agent.first_name, obj.sales_agent.last_name]);

const buildAgentList = (array) => {
    array.forEach(person => {
        agentDisplay.appendChild(buildElWithText("p", `${person[0]} ${person[1]}`))
    })
    agentDisplay.innerHTML += "<hr/>";
    container.appendChild(agentDisplay);
}

buildAgentList(agentList);

const vehicleList = salesByWeek.map(obj => obj.vehicle);
const justProfit = salesByWeek.map(obj => obj.gross_profit);

const combinedLists = salesByWeek.map(obj => [obj.vehicle, obj.gross_profit]);




const buildVehicleList = (array) => {
    array.forEach(vehicle => {
        for(key in vehicle[0]){
            vehicleDisplay.innerHTML += `<p>${key}: ${vehicle[0][key]}`;
        }
        vehicleDisplay.innerHTML += `<p>Gross Profit: ${vehicle[1]}</p><hr/>`
    })  
    container.appendChild(vehicleDisplay);
    return container;
}

buildVehicleList(combinedLists);




