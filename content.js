
const updateDOM = function() {

    let element = document.createElement("a");
    element.setAttribute('aria-label', "Snippet");
    element.setAttribute('class', '_30yy _7oam snippet-btn');
    element.setAttribute('role', 'button');
    element.setAttribute('title', 'Enviar snippet');
    element.setAttribute('href', '#');
    element.innerHTML = `<svg class="_7oal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36px" height="36px"> <defs><clipPath id="a"><path d="M0 0h36v36H0z"/></clipPath></defs> <g fill="#3484d5" font-size="30" letter-spacing="-.005em" clip-path="url(#a)"> <text data-name="&lt;" transform="translate(1 28)"> <tspan x="0" y="0">&lt;</tspan> </text> <text data-name="&gt;" transform="translate(20 28)"> <tspan x="0" y="0">&gt;</tspan> </text> </g> </svg>`;

    let chat_options = document.querySelectorAll("._7mkk")[1];
    chat_options.appendChild(element);
};
setTimeout(updateDOM, 3000);

// Redrawn the snippets button
setInterval(function () {
    if (document.querySelector(".snippet-btn") == null){
        console.log("updating dom");
        updateDOM();
    }
}, 1000);