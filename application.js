const calculatorncontainer = document.getElementById('calculatorn_container');
const displayarea = document.getElementById('display_area');

calculatorncontainer.addEventListener('click',e =>{
    if(e.target.nodeName == "BUTTON"){
        switch(e.target.textContent){
            case "C":
                clear();
                break;
            case "DEL":
                deletOneValue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);

        }
    }
})

function clear(){
    displayarea.textContent = '';
}

function addToDisplayArea(value){
    displayarea.textContent = displayarea.textContent + value;
}
function deletOneValue(){
    let currentContent = displayarea.textContent;
    displayarea.textContent = currentContent.substring(0, currentContent.length -1);
}
function evaluate() {
    try {
        let calculation = math.evaluate(displayarea.textContent);
        displayarea.textContent = calculation;
    }catch (error){
        displayarea.textContent = "Invalid Operation";
        console.error(error);
    }
}