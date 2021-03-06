// Updates the current tab's game manage buttons based on if the game
// is installed or not.
ipcRenderer.on('initialize_game_manage_buttons', (event, arg) => {
    const downloadButton = document.getElementById(`${currentTab}-download-button`);
    const downloadedManageButtons = document.getElementById(`${currentTab}-downloaded-manage-buttons`);

    ipcRenderer.removeAllListeners('initialize_game_manage_buttons');

    if (arg.exists) {
        checkForGameUpdates();
    } else {
        downloadButton.style.visibility = "visible";
        downloadedManageButtons.style.visibility = "hidden";
    }
});