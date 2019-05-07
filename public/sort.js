/* eslint-disable no-undef */

$('#data_table').ready(function () {
    $('#data_table').DataTable( {
        "paging":   false,
        "info":     false
    } )
    $('.dataTables_length').addClass('bs-select');
});