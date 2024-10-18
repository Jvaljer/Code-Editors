function clickRunButton()
{
    //todo
}
function clickFileButton()
{
    //todo
}
async function clickFolderButton()
{
    //todo
}
function clickSaveButton()
{
    //todo
}
function openFile(e)
{
    //todo
}

// Adding listeners for all buttons
document.getElementById("run-btn").addEventListener("click", clickRunButton);
document.getElementById("file-btn").addEventListener("click", clickFileButton);
document.getElementById("file-input").addEventListener("change", (event) => {
    openFile(event);
});
document.getElementById("folder-btn").addEventListener("click", clickFolderButton);
document.getElementById("save-btn").addEventListener("click", clickSaveButton);