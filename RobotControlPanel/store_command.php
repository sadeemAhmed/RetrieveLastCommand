<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "robot_control";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if command is set
if (!isset($_POST['command'])) {
    die("No command received");
}

// Get the command from the POST request
$command = $_POST['command'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO commands (command) VALUES (?)");
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}
$stmt->bind_param("s", $command);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
