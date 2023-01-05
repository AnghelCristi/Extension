const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked");
        let btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Buildings list";
            }
    });
})

chrome.storage.local.get(['number_of_days'], function(result) {
    document.getElementById("days").value = result['number_of_days'];
});

chrome.storage.local.get(['how_often'], function(result) {
    document.getElementById("time").value = result['how_often'];
});

chrome.storage.local.get(['triumph_parade'], function(result) {
    if (result['triumph_parade'] == 1){
        document.getElementById("yes-radio").checked = true
    } else if (result['triumph_parade'] == 0){
        document.getElementById("no-radio").checked = true
    }
});

chrome.storage.local.get(['building_preferences'], function(result) {
    
    var selected_buildings = [];

    for (const [key, value] of Object.entries(result['building_preferences'])) {
        selected_buildings.push(key);
    }

    var all_buildings_options = document.querySelectorAll(".item");

    for (let i = 0; i < all_buildings_options.length; i++) {

        if (selected_buildings.includes(all_buildings_options[i].innerText.replace(/ /g,"").replace(/\n/g,""))){
            all_buildings_options[i].className = 'item checked';

        }    
    }

    
    let checked = document.querySelectorAll(".checked");
    let btnText = document.querySelector(".btn-text");

    if(checked && checked.length > 0){
        btnText.innerText = `${checked.length} Selected`;
    }else{
        btnText.innerText = "Buildings list";
    }

});


const submit = document.getElementById("submit-button");

document.getElementById("submit-button").addEventListener("click", getData);
function getData(){
    var days = parseInt(document.getElementById("days").value);
    var time = parseInt(document.getElementById("time").value);
    var do_triumphal_parade = -1;
    var preferences_list = {};

    if(document.getElementById('yes-radio').checked) {
        do_triumphal_parade = 1;
      }else if(document.getElementById('no-radio').checked) {
        do_triumphal_parade = 0;
    }

    for(let i = 0; i < document.querySelectorAll(".checked").length; i ++){
        preferences_list[document.querySelectorAll(".checked")[i].innerText.replace(/ /g,"").replace(/\n/g,"")] = "-1";
    }

    chrome.storage.local.set({number_of_days: days}, function() {
        console.log('Day is set');
        console.log(days);
    });

    chrome.storage.local.set({triumph_parade: do_triumphal_parade}, function() {
        console.log('Triumphal parade is set');
        console.log(do_triumphal_parade);
    });

    chrome.storage.local.set({how_often: time}, function() {
        console.log('Time is set');
        console.log(time);
    });

    chrome.storage.local.set({building_preferences: preferences_list}, function() {
        console.log('Preferences are set');
        console.log(preferences_list);
    });

    chrome.tabs.reload(function(){});

}