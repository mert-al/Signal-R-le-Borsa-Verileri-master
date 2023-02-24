$(document).ready(function () {
    $('.datatable-currency').DataTable({
        "columns": [
            { "data": "currencyName" },
            { "data": "currencyBuy" },
            { "data": "currencySales" },
            { "data": "currencyHour" },
            { "data": "currencyDifference" }
        ]
    });
});
