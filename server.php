<?php

$todo_list = file_get_contents(__DIR__ . '/list.json');
$new_todo = isset($_POST['newTodo']) ? $_POST['newTodo'] : NULL;

if ($new_todo !== NULL) {
    $todo_list = json_decode($todo_list, true);
    $todo_list[] = [
        "text" => $new_todo,
        "done" => false
    ];
    $todo_list = json_encode($todo_list);
    file_put_contents(__DIR__ . '/list.json', $todo_list);
}

header('Content-Type: application/json');

echo $todo_list;