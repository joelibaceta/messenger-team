
const GetSnippetImage = function() {
    fetch('https://carbon-now-api.herokuapp.com/api', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: {
            language: "",
            code: ""
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
};

const OpenModalBox = function() {

    let element = document.createElement("div");

    element.setAttribute("style", "position: absolute;left: 450px;width:278px;height: 364.5px;bottom: 68.5px;display: block;background-color: white;padding: 10px;border-radius: 6px;box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 10px rgba(0, 0, 0, .35);");

    let languageSelector = document.createElement("select");
    languageSelector.setAttribute("style", "width: 100%");
    languageSelector.setAttribute("id", "language-selector");

    languageSelector.innerHTML =`
        <option value="javascript">Javascript</option>
        <option value="ruby">Ruby</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>`;

    let snippetTextArea = document.createElement("textarea");

    snippetTextArea.setAttribute("placeholder", "Write your code here...");
    snippetTextArea.setAttribute("style", "width: calc(100% - 7px);");
    snippetTextArea.setAttribute("rows", "21");
    snippetTextArea.setAttribute("id", "code-snippet");

    let actionButtons = document.createElement("div");
    actionButtons.setAttribute("style", "display: flex; justify-content: space-around;");

    let buttonStyle     = "padding: 10px;margin-top: 5px;font-weight: 600;color:white;";
    let buttonBlueStyle = buttonStyle + "background-color: rgb(0, 153, 255);";
    let buttonRedStyle  = buttonStyle + "background-color: rgb(212, 60, 55);";

    let sendButton = document.createElement("a");
    sendButton.setAttribute("style", buttonBlueStyle);
    sendButton.textContent = "Send";

    let cancelButton = document.createElement("a");
    cancelButton.setAttribute("style", buttonRedStyle);
    cancelButton.textContent = "Cancel";


    actionButtons.appendChild(sendButton);
    actionButtons.appendChild(cancelButton);

    element.appendChild(languageSelector);
    element.appendChild(snippetTextArea);
    element.appendChild(actionButtons);

    let body = document.querySelector("body");
    body.appendChild(element);



};

const updateDOM = function() {

    let element = document.createElement("a");
    element.setAttribute('aria-label', "Snippet");
    element.setAttribute('class', '_30yy _7oam snippet-btn');
    element.setAttribute('role', 'button');
    element.setAttribute('title', 'Enviar snippet');
    element.setAttribute('href', '#');
    element.innerHTML = `<svg class="_7oal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36px" height="36px"> <defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs> <g fill="#3484d5" font-size="30" letter-spacing="-.005em" clip-path="url(#a)"> <text data-name="&lt;" transform="translate(1 28)"> <tspan x="0" y="0">&lt;</tspan> </text> <text data-name="&gt;" transform="translate(20 28)"> <tspan x="0" y="0">&gt;</tspan> </text> </g> </svg>`;

    element.addEventListener('click', function(){
        OpenModalBox();
    });

    let chat_options = document.querySelectorAll("._7mkk")[1];
    chat_options.appendChild(element);

};


// Redrawn the snippets button
setInterval(function () {
    if (document.querySelector(".snippet-btn") == null){
        console.log("updating dom");
        updateDOM();
    }
}, 1000);