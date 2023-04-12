<?php
    $todo = file_get_contents(__DIR__.'/list.json');
    
    $new_todo = isset($_POST['newTodo']) ? $_POST['newTodo'] : null;
    var_dump($_POST);
    var_dump($new_todo);
    
    if($new_todo !== null){
        $todo = json_decode($todo, true);
        $todo[] = 
            [
                "text" => $new_todo,
                "done" => false
            ];
        $todo = json_encode($todo);
        file_put_contents(__DIR__.'/list.json', $todo );
    };
    
          
    
    header('Content-Type: application/json');

    echo $todo;
?>