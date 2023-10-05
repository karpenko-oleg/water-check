<?php

$name = $_POST["name"];
$phone = $_POST["phone"];
$text = $_POST["textarea"];
$token = "6451764671:AAGizWg_3drCik5FseZI7JG4mCaECV-fRsA";
$chat_id = "-1001867028495";
$arr = array(
  "Имя пользователя: " => $name,
  "Телефон: " => $phone,
  "Текст " => $text
);
$site = "index.html";

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "<h3 class='error'>Ваше сообщение отправлено!</h3>";
  echo "<script>";
  echo "setTimeout(function(){ ";
  echo "   document.location='index.html';";
  echo "}, 3000);";  // redirect after 3 seconds
  echo "</script>";   
} else {
  echo "Error";
}
?>