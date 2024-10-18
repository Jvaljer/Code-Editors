//Configuring Monaco Editor
require.config({
    paths: { vs: "https://unpkg.com/monaco-editor@latest/min/vs" },
});

/* -------------------------
    Functions Definition
-------------------------- */
require(["vs/editor/editor.main"], createMonacoEditor);

var editor;

function createMonacoEditor()
{
    const editorDiv = document.getElementById("editor");
    const editorOptions = {
        value: `// Here you can start typing your code, or begin by opening a file or folder.`,
        language: "java",
        theme: "vs-dark",

        // 'smart' features optional selection
        automaticLayout: true,
        acceptSuggestionOnEnter: "smart",
        showUnused: true,
        //FIND MORE TO INCLUDE
    };

    editor = monaco.editor.create(editorDiv, editorOptions);
}