'use strict';

// 1. isHometown

function isHometown(town) {
    if (town === 'San Francisco') {
        return true;
    }
}

// 2. getFullName

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05) {
    const subtotal = basePrice * (1 + tax);

    let fee = 0; 
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA') {
        fee = 2;
    }
    else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    return subtotal + fee;
}
