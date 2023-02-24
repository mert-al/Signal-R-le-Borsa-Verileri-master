$(document).ready(function () {
    $('.datatable').DataTable({
        "columns": [
            { "data": "name" },
            { "data": "price" },
            { "data": "priceTop" },
            { "data": "priceDown" },
            { "data": "lastDay" }
        ]
    });
});
