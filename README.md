# TASK2 : Robot Control Panel 

This project is a web-based control panel for a robot. It allows users to control the robot's movements using a joystick🕹️ interface and stop the robot with a dedicated button. The commands are sent to a backend server and stored in a database for further processing. The project is divided into two pages: one for controlling the robot and another for retrieving the latest command.

## Table of Contents⚙️
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Code Explanation](#code-explanation)
  - [HTML (index.html)](#html-indexhtml)
  - [CSS (styles.css)](#css-stylescss)
  - [JavaScript (script.js)](#javascript-scriptjs)
  - [PHP (store_command.php)](#php-store_commandphp)
  - [PHP (retrieve_command.php)](#php-retrieve_commandphp)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Features](#features)

## Project Description📝

The Robot Control Panel project provides a simple and intuitive web interface for controlling a robot. The interface includes a joystick 🕹️ that users can manipulate to send directional commands (Forward, Backward, Left, Right) to the robot. Additionally, a Stop button allows users to halt the robot's movement instantly.

Commands are processed in real-time and sent to a backend server using AJAX requests. These commands are then stored in a MySQL database for logging and further actions.

The project includes two separate pages:

1. **Control Panel**: This page contains the joystick and the Stop button. Users can control the robot and send commands.
2. **Command Retrieval**: This page displays the latest command sent to the robot. It includes two buttons: a Refresh button to update the displayed command and a Back to Control Panel button to return to the control interface.

## Technologies Used 🔧

- **HTML**: To structure the web pages.
- **CSS**: To style the control panel and provide a user-friendly interface.
- **JavaScript**: To handle the joystick movements, send commands to the server, and refresh the latest command.
- **PHP**: To handle server-side operations and interact with the MySQL database.
- **MySQL**: To store and retrieve the commands sent by the user.

## Code Explanation 👩🏻‍🏫

### HTML (index.html)

This file defines the structure of the control panel web page. It includes the joystick and stop button elements which the user interacts with. It links to the external CSS for styling and JavaScript for functionality.

### HTML (retrieve_command.html)

This file defines the structure of the command retrieval page. It displays the latest command and includes buttons for refreshing the command and returning to the control panel.

### CSS (styles.css)

This file styles both the control panel and command retrieval pages to make them visually appealing and user-friendly. It defines the appearance of the joystick, stick, stop button, and the command display.

### JavaScript (script.js)

This file handles the joystick interactions and sends the commands to the server. It listens for user actions (like dragging the joystick) and sends corresponding commands using AJAX.

### JavaScript (retrieve.js)

This file handles the refreshing of the latest command on the command retrieval page. It sends a request to the server to get the latest command and updates the displayed command.

### PHP (store_command.php)

This file processes the commands sent from the front end. It receives the commands via POST requests and stores them in a MySQL database.

### PHP (get_last_command.php)

This file retrieves the latest command from the database. It sends the command back to the front end for display on the command retrieval page.

## Installation 🗺️

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/robot-control-panel.git
    cd robot-control-panel
    ```

2. **Set up the database**:
    - Create a MySQL database named `robot_control`.
    - Create a table named `commands` with the following structure:
        ```sql
        CREATE TABLE commands (
            id INT AUTO_INCREMENT PRIMARY KEY,
            command VARCHAR(255) NOT NULL
        );
        ```

3. **Configure database connection**:
    - Update the database connection parameters in `store_command.php` and `retrieve_command.php`:
        ```php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "robot_control";
        ```

4. **Run the project**:
    - Ensure you have a local server setup (e.g., XAMPP, WAMP).
    - Place the project folder in the `htdocs` directory (for XAMPP) or the appropriate directory for your server setup.
    - Start the server and navigate to `http://localhost/robot-control-panel` in your web browser.

## Usage🤖

1. **Control Panel**:
    - Navigate to the Control Panel page.
    - Click and drag the joystick to send movement commands (Forward, Backward, Left, Right) to the robot.
    - Click the Stop button to send a Stop command to the robot.

2. **Command Retrieval**:
    - Navigate to the Command Retrieval page.
    - Click the Refresh button to update and display the latest command.
    - Click the Back to Control Panel button to return to the control interface.

## File Structure 🏗️

```
robot-control-panel/
│
├── index.html
├── retrieve_command.html
├── styles.css
├── script.js
├── store_command.php
├── get_last_command.php
├── README.md
```

- `index.html`: The main HTML file that contains the structure of the control panel.
- `retrieve_command.html`: The HTML file for the command retrieval page.
- `styles.css`: The CSS file for styling both the control panel and command retrieval pages.
- `script.js`: The JavaScript file for handling the joystick interactions and sending commands.
- `store_command.php`: The PHP file for storing commands in the database.
- `get_last_command.php`: The PHP file for retrieving the latest command from the database.
- `README.md`: This file, containing information about the project.

## ⭐️Features⭐️

- **Joystick Control**: Interact with the joystick to send movement commands to the robot.
- **Stop Button**: Easily stop the robot with a single click.
- **Command Storage**: Store commands in a MySQL database for further processing or analysis.
- **Command Retrieval**: View the latest command sent to the robot and refresh the command display.
- **Separate Interfaces**: Designed with two separate interfaces for each device, one for controlling the robot and another for displaying the latest command.

made with love by "she code team "🤍😄
raghd Alshammari - sadeem alresaini - razan alothaim.
