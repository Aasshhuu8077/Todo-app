$('ul').on('click' , 'li' , function(){ // Mark the todo as completed 
    $(this).toggleClass('completed')
})

$('#inp').keypress(function(e){  // Creating a new todo item
    if(e.which === 13){
        const todo = $(this).val();
        $('#list').append(`<li><span>X </span> ${todo}</li>`);
        $(this).val("");
    }
})

$('#list').on('click' , 'span', function(e){  // To remove the element
    $(this).parent().fadeOut(800 , function(){
        $(this).remove();
    })

    e.stopPropagation(); // stop bubbling or calling the interconneccted events
})

$('#plus').click(function(){
    $('#inp').fadeToggle();
})