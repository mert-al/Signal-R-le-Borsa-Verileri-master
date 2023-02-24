$(document).ready(function () {
    $('.datatable-crypto').DataTable({
        "columns": [
            { "data": "name" },
            { "data": "price" },
            { "data": "priceTop" },
            { "data": "priceDown" },
            { "data": "lastDay" }
        ]
    });
});
