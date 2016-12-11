/**
 * Created by JakeAnstey on 2016-12-01.
 */
$(document).ready(function() {
    $('#sortable').sortable({
        axis: 'y',
        onDrop: function($item, container, _super) { //on drop call this @ updatelist()
            console.log('hle');
            //updateList();
            _super($item, container);
        }
    });

    //Function updateList
    function updateList() {
    }
});



// REFERENCE CODE //
/*

$(document).ready(function() {
    $('#sortable').sortable({
        axis: 'y',
        onDrop: function($item, container, _super) { //on drop call this @ updatelist()
            console.log('hle');
            updateList();
            _super($item, container);
        }
    });

    //Function updateList
    function updateList() {
        var tasks = []; //local in the JQuery, send it locally.
        //JQUERY LOOP OF ELEMENTS
        $(".task").each(function(index) { //for each of the task list,
            //ADD TO THE ARRAY OF TASKS BASED ON HOW THEY ARE DISPLAYED TO THE USER -- CORRECT ORDER
            console.log(index);
            //DATA('id) IS THE data-id TAG ON THE LI ELEMENT
            tasks[index] = {"id": $(this).data('id')};
        });

        //USE AJAX TO SEND A POST REQUEST TO NODE APP
        $.ajax({ //user level browsers redirect,
            url: '/rearrange',
            type: 'POST',
            data: JSON.stringify(tasks), // STRINGIFY THE ARRAY TO JSON
            contentType: 'application/json'
        });
    }
});


 */