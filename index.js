let k = prompt("How many messages do you want to select? (insert -1 if you want to select the files untill the end)");
k = parseInt(k);

function getIndexOfSelectedElement() {
    for (let i = 0; i < document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').childElementCount; i++)
        if((document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').children[i].className.includes('message-out') || document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').children[i].className.includes('message-in')) && 
           document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').children[i].children[0].children[0].className.includes('_3TADo')) return i + 1;
}

let final_index = 0;
if(k == -1) final_index = document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').childElementCount;
else final_index = getIndexOfSelectedElement() + k - 1;

for (let i = getIndexOfSelectedElement(); i < final_index; i++)
    if(document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').children[i].className.includes('message-out') || document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').children[i].className.includes('message-in'))
        document.querySelector('#main > div.RUGMB > div > div > div.tSmQ1.jujkF').children[i].children[0].children[0].children[0].click();
    else final_index++;
