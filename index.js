let k = prompt("How many messages do you want to select? (insert -1 if you want to select the files untill the end)");
k = parseInt(k);
let messagesContainer = document.querySelector('#main > div._2wjK5 > div > div._1gL0z._2p49L > div._11liR._1fxaZ');

function getIndexOfSelectedElement() {
    for (let i = 0; i < messagesContainer.childElementCount; i++)
        if((messagesContainer.children[i].className.includes('message-out') || messagesContainer.children[i].className.includes('message-in')) && 
           messagesContainer.children[i].children[0].children[0].className.includes('_3GtSJ')) return i + 1;
}

let final_index = 0;
if(k == -1) final_index = messagesContainer.childElementCount;
else final_index = getIndexOfSelectedElement() + k - 1;

for (let i = getIndexOfSelectedElement(); i < final_index; i++)
    if(messagesContainer.children[i].className.includes('message-out') || messagesContainer.children[i].className.includes('message-in'))
        messagesContainer.children[i].children[0].children[0].children[0].click();
    else final_index++;
