'use strict';

module.exports = {
    setRandomDate: setRandomDate
}

const dates = [
    '2023-02-03',
    '2023-02-04',
    '2023-02-05',
    '2023-02-06',
    '2023-02-07',
    '2023-02-08',
    '2023-02-09',
    '2023-02-10',
    '2023-02-11',
    '2023-02-12'
]

function setRandomDate(requestParams, context, ee, next) {
    context.vars['date'] = dates[Math.floor(Math.random() * dates.length)];
    return next();
}
