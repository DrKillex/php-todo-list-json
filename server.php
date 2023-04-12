<?php

$todo = file_get_contents(__DIR__ . '/list.json');
$new_todo = isset($_POST['newTodo']) ? $_POST['newTodo'] : NULL;
$delete = isset($_POST['deleteThis']) ? $_POST['deleteThis'] : NULL;
$check = isset($_POST['check']) ? $_POST['check'] : NULL;

if ($new_todo !== NULL) {
    $todo = json_decode($todo, true);
    $todo[] = [
        "text" => $new_todo,
        "done" => false
    ];
    $todo = json_encode($todo);
    file_put_contents(__DIR__ . '/list.json', $todo);
};

if ($delete !== NULL) {
    $todo = json_decode($todo, true);
    array_splice($todo, $delete, 1);
    $todo = json_encode($todo);
    file_put_contents(__DIR__ . '/list.json', $todo);
};

if ($check !== NULL) {
    $todo = json_decode($todo, true);
    $todo[$check]['done'] = !$todo[$check]['done'];
    $todo = json_encode($todo);
    file_put_contents(__DIR__ . '/list.json', $todo);
};

header('Content-Type: application/json');

echo $todo;