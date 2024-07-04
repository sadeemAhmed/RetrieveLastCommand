document.addEventListener('DOMContentLoaded', () => {
    const joystick = document.getElementById('joystick');
    const stick = document.getElementById('stick');
    let isDragging = false;
    let lastCommand = '';

    stick.addEventListener('mousedown', function() {
        isDragging = true;
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        stick.style.top = '50%';
        stick.style.left = '50%';
        stick.style.transform = 'translate(-50%, -50%)';
        lastCommand = ''; 
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            const rect = joystick.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const offsetX = event.clientX - centerX;
            const offsetY = event.clientY - centerY;
            const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            const maxDistance = rect.width / 2 - stick.offsetWidth / 2;

            if (distance < maxDistance) {
                stick.style.left = `${offsetX + rect.width / 2}px`;
                stick.style.top = `${offsetY + rect.height / 2}px`;
                stick.style.transform = 'translate(-50%, -50%)';

                let command = '';
                if (offsetY < -maxDistance / 2) {
                    command += 'Forward';
                } else if (offsetY > maxDistance / 2) {
                    command += 'Backward';
                }
                if (offsetX < -maxDistance / 2) {
                    command += 'Left';
                } else if (offsetX > maxDistance / 2) {
                    command += 'Right';
                }

                if (command && command !== lastCommand) {
                    sendCommand(command);
                    lastCommand = command;
                }
            }
        }
    });
});

function sendCommand(command) {
    console.log("Command: " + command);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "store_command.php", true); 
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("command=" + encodeURIComponent(command));
}
