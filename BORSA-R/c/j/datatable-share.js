$(document).ready(function () {
    $('.datatable-share').DataTable({
        "columns": [
            { "data": "shareName" },
            { "data": "shareLast" },
            { "data": "shareYesterday" },
            { "data": "sharePriceTop" },
            { "data": "sharePriceDown" },
            { "data": "shareAverage" },
            { "data": "shareCapacity" },
            { "data": "shareCapacityTl" },
            { "data": "shareLastDay" }
        ]
    });
});