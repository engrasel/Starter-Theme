$(document).ready(function(){
    $('.tp-mega-menu').parents('li').addClass("has-dropdown has-mega-menu");
    $('.mega-menu').parents('li').addClass("has-dropdown");
    $('.mega-menu').siblings('a').addClass("has-mega-menu");

    // lanugage 
    $('.lang-input').on('click', function(){
        var id = $(this).data('lang');
        $('#language_iso').val(id);
        $('#language_form').submit();
    })

    // Country Currency 
    $('.country-input').on('click', function(){
        var id = $(this).data('lang');
        $('#country_iso').val(id);
        $('#country_form').submit();
    })

    // variant 
    $('.tp-product-details-variation input').on('change', function(){
        var option_name = '';
        $('input:radio.input_field:checked').each(function(e){
            option_name += e != 0 ? '-' : '';
            option_name += $(this).val();
        })

        // console.log('Option name ' + option_name);

        $('#productSelector option').each(function(){
            var txt = $.trim($(this).text());
            if(txt == option_name){
                var id = $(this).val();
                var src = $(this).data('img');
                var price = $(this).data('price');
                price = (price * 0.01).toFixed(2);
                var compare_price = $(this).data('compare');
                compare_price = (compare_price * 0.01)
                var available = $(this).data('available');

                $('.product_featured_image').attr('src', src );
                $('.new-price').text(currency + price);
                $('.old-price').text(currency + compare_price);

                $('#product_id').val(id);
                if(available != true ){
                    $('.addToCart').addClass('sold_out').text('Sold Out');
                }else{
                    $('.addToCart').removeClass('sold_out').text('Add To Cart');
                }
                $(this).parent().val($(this).val());

                $('.nav-link').each(function(){
                    var thumb_src = $(this).children().attr('src');
                    
                    if( src == thumb_src ){
                        console.log( 'src '+ src );
                        console.log( 'thumb_src '+ thumb_src );
                    }
                });
            }
        })

    });
 });