 <?php
 $servername ='localhost';
 $username ='nikesh';
 $password = 'niku';
 $dbname ='crud';
 
 // create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
 // Check connection
 if ($conn->connect_error){
    die('connection failed:' .$conn -> connect_error);

 }
 echo " Db connected sucessfully";
 ?>
