jQuery.fn.alertMethod = function() { 
    return this.each(function() { 
        alert('GeeksforGeeks in "' + $(this).prop("tagName") + '"tag'); 
    }); 
    };
    