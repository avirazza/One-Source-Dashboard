$(document).ready(function(){
    $('.product-variation-toggle').click(function(){
        $(this).parent().parent().find('.product-tab-content').toggle();
    });

    //Add new page

    $('.add-tracking-number-icon').click(function(){
        $('.add-tracking-number-popup-wrap').show();
    });
    $('.add-tracking-number-popup-outer').click(function(){
        $('.add-tracking-number-popup-wrap').hide();
        $('.tracking-number-form')[0].reset();
    });

    //Tracking number form submission

    $('.tracking-number-form').submit(function(e){
        e.preventDefault();
        var trackingNumber = $('.tracking-number-form #tracking_number').val();
        var numberOfBoxes = $('.tracking-number-form #number_of_boxes_in_tracking').val();
        var company = $('.tracking-number-form #tracking_number_company').val();
        var actionType = $('.tracking-number-form #action_type').val();
        //console.log(trackingNumber, numberOfBoxes, company);
        
        if(actionType == 'add'){
            $('.tracking-numbers').append(`
            <div class="tracking-number" id="${trackingNumber}">
                <div class="number">${trackingNumber}</div>
                <div class="company">${company}</div>
                <div class="boxes">${numberOfBoxes}</div>

                <div class="action-buttons">
                    <i class="fa fa-pencil edit-tracking-number" aria-hidden="true"></i>
                    <i class="fa fa-trash delete-tracking-number" aria-hidden="true"></i>
                </div>
            </div>
        `);
        }

        if(actionType == 'update'){
            $('#'+trackingNumber).find('.number').text(trackingNumber);
            $('#'+trackingNumber).find('.company').text(company);
            $('#'+trackingNumber).find('.boxes').text(numberOfBoxes);
        }

        $('.tracking-number-form')[0].reset();
        $('.add-tracking-number-popup-wrap').hide();
    });

    //Delete tracking number
    $(document).on("click", ".delete-tracking-number" , function() {
        $(this).parent().parent().remove();
    });

    //Edit tracking number
    $(document).on("click", ".edit-tracking-number" , function() {
        var trackingNumber = $(this).parent().parent().find('.number').text();
        var numberOfBoxes = $(this).parent().parent().find('.company').text();
        var company = $(this).parent().parent().find('.boxes').text();

        //console.log(trackingNumber, numberOfBoxes, company);

        
        $('#tracking_number').val(trackingNumber);
        $('#tracking_number').prop("readonly", true);

        $('#number_of_boxes_in_tracking').val(company);
        $('#tracking_number_company').val(numberOfBoxes);
        $('#action_type').val('update');
        $('.save-tracking-number').text('Update');

        $('.add-tracking-number-popup-wrap').show();

        
    });
});
