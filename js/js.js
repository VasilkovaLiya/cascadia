$(document).ready(function(){
    
             $('.menu__icon').on('click', function(){
                
                var element = $('.menu__container');
                if (element.hasClass('active')) {
                    element.removeClass('active'); 
                    
                    $( ".menu__container" ).hide();
                          
                    
                   
                }
                else {
                    element.addClass('active');                
                    element.show();
                    $('.main-container').css('transform','translateX(320px)'); 
                    $( ".menu__icon" ).hide();            
                    
                }
            });

            $('.close').on('click', function(){
                $('.main-container').css('transform','translateX(0px)');
                $( ".menu__container" ).hide();
                $( ".menu__icon" ).css('display','block');  
            });

            $(document).mouseup(function (e){ // событие клика по веб-документу
                var div = $(".menu__container"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0)
                   
                    { // и не по его дочерним элементам
                    div.hide(); // скрываем его
                    $('.main-container').css('transform','translateX(0px)');
                    $( ".menu__icon" ).css('display','block');    
                }
            });

            $('.lng').on('click', e  => {
                e.preventDefault ()
                let elem = $(e.currentTarget)
                elem.toggleClass('lng_active');
                
                if (elem.hasClass('lng_active')) {
                        
                    elem.siblings().removeClass('lng_active');
                    
                } 
        
            })


            //Ваидация формы
            // $.validate({
            //     lang : 'ru',                
            //     // modules : 'location, date, security, file',
            //     // onModulesLoaded : function() {
            //     //   $('#country').suggestCountry();
            //     // }
            //   });
            
            //   // Restrict presentation length
            //   //$('#presentation').restrictLength( $('#pres-max-length') );

              
            
            //  })


             // Маска номера телефона
             jQuery (function ($) {  
                $(function() {
                 
                   $("#phone").mask("+7(999) 999-99-99");                      
                   $("#tel").mask("+7(999) 999-99-99");                      
                   $("#tel2").mask("+7(999) 999-99-99");                      
                                     
                
                });
              });


            
            // Проверка флажка чекбокса
               $(function(){
                $('.checkbox__input').on('change', function(){
                    var element = $(this).parents("form")
                    
                 if(element.find('.checkbox__input').prop('checked')){
                    element.find('.order').attr('disabled', false);
                 }else{
                    element.find('.order').attr('disabled', true);
                    
                 }
                });
               });






            });

