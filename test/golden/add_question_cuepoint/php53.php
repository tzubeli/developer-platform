<?php
  $cuePoint = new QuestionCuePoint();
  $cuePoint->entryId = "0_mej0it92";
  $cuePoint->question = "hello world";

  try {
    $result = $cuePointPlugin->cuePoint->add($cuePoint);
    var_dump($result);
  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>