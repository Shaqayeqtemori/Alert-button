
const button =
document.querySelector('#btn');
button.addEventListener('click',function () {
    alert('Are you sure?');
});
$(document).ready(function(){
$('#cardModal').change(function(){
    var selectedOption = $(this).find(':selected');
    var targetModal = selectedOption.data('target');
    if(targetModal) {
    $(targetModal).modal('show');
    }
});
});