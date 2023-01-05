//click daily reward
const open_daily_reward = "#daily_login_icon";
//box
const daily_reward_box = "div.window_content.js-window-content > div";
//day
const daily_reward_box_day = "div.window_content.js-window-content > div > div.best_series.js-tooltip-best-series > div";
//click box resources
const daily_reward_box_resources = "div.window_content.js-window-content > div > div.rewards_box > div > div.reward.resources.js-tooltip-resources.js-reward";
//box resources
const daily_reward_box_resources_amount = "div.window_content.js-window-content > div > div.rewards_box > div > div.reward.resources.js-tooltip-resources.js-reward > div > div.res_value"
//click box favor
const daily_reward_box_favor = "div.window_content.js-window-content > div > div.rewards_box > div > div.reward.favor.js-tooltip-favor.js-reward";
//box favor
const daily_reward_favor_amount = "div.window_content.js-window-content > div > div.rewards_box > div > div.reward.favor.js-tooltip-favor.js-reward > div > div.res_value";
//favor amount
const favor_amount = "#ui_box > div.gods_area > div.gods_progress.god > div.gods_favor_button_area > div.gods_favor_amount.ui-game-selectable > div.favor_amount";
//select storage
const storage = "#building_main_area_storage";
//storage capacity
const max_storage_capacity = "#storage_list > div > ul > li:nth-child(1)";
//close all window
const close_all = "#ui_box > div.btn_close_all_windows > div.middle > div > div.box-middle > div";
//wood
const wood = "#ui_box > div.ui_resources_bar > div.indicator.wood > div.wrapper > div.amount.ui-game-selectable";
//stone
const stone = "#ui_box > div.ui_resources_bar > div.indicator.stone > div.wrapper > div.amount.ui-game-selectable";
//iron 
const iron = "#ui_box > div.ui_resources_bar > div.indicator.iron > div.wrapper > div.amount.ui-game-selectable";
//click building
const open_building = "#building_main_area_main";
//build_ship
const building_plan_for_ship = {
    "main": 14,
    "hide": 2,
    "lumber": 15,
    "stoner": 10,
    "ironer": 10,
    "market": 3,
    "docks": 10,
    "barracks": 5,
    "wall": 2,
    "storage": 15,
    "farm": 6,
    "academy": 13,
    "temple": 5
};
//build normal plan
const building_plan_normal = {
    "main": 24,
    "hide": 10,
    "lumber": 40,
    "stoner": 40,
    "ironer": 40,
    "market": 15,
    "docks": 15,
    "barracks": 15,
    "wall": 20,
    "storage": 35,
    "farm": 45,
    "academy": 34,
    "temple": 15
};
//click every building
const click_for_every_building = {
    "main": "#building_main_main > div.building > a.button_build.build_up.build.small",
    "hide": "#building_main_hide > div.building > a.button_build.build_up.build.small",
    "lumber": "#building_main_lumber > div.building > a.button_build.build_up.build.small",
    "stoner": "#building_main_stoner > div.building > a.button_build.build_up.build.small",
    "ironer": "#building_main_ironer > div.building > a.button_build.build_up.build.small",
    "market": "#building_main_market > div.building > a.button_build.build_up.build.small",
    "docks": "#building_main_docks > div.building > a.button_build.build_up.build.small",
    "barracks": "#building_main_barracks > div.building > a.button_build.build_up.build.small",
    "wall": "#building_main_wall > div.building > a.button_build.build_up.build.small",
    "storage": "#building_main_storage > div.building > a.button_build.build_up.build.small",
    "farm": "#building_main_farm > div.building > a.button_build.build_up.build.small",
    "academy": "#building_main_academy > div.building > a.button_build.build_up.build.small",
    "temple": "#building_main_temple > div.building > a.button_build.build_up.build.small"
};
//population
const population = "#ui_box > div.ui_resources_bar > div.indicator.population > div.wrapper > div.amount.ui-game-selectable";
//current lvl building
const current_lvl_building = {
    "main": "#building_main_main > div.building > div.image.bold > span.level.white",
    "hide": "#building_main_hide > div.building > div.image.bold > span.level.white",
    "lumber": "#building_main_lumber > div.building > div.image.bold > span.level.white",
    "stoner": "#building_main_stoner > div.building > div.image.bold > span.level.white",
    "ironer": "#building_main_ironer > div.building > div.image.bold > span.level.white",
    "market": "#building_main_market > div.building > div.image.bold > span.level.white",
    "docks": "#building_main_docks > div.building > div.image.bold > span.level.white",
    "barracks": "#building_main_barracks > div.building > div.image.bold > span.level.white",
    "wall": "#building_main_wall > div.building > div.image.bold > span.level.white",
    "storage": "#building_main_storage > div.building > div.image.bold > span.level.white",
    "farm": "#building_main_farm > div.building > div.image.bold > span.level.white",
    "academy": "#building_main_academy > div.building > div.image.bold > span.level.white",
    "temple": "#building_main_temple > div.building > div.image.bold > span.level.white"
};
//agora building click
const agora = "#building_main_area_place";
//battle points
const battle_points = "#ui_box > div.nui_right_box > div.nui_battlepoints_container > div.points";
// click triumph parade
const triumph_parade = "#place_triumph > div:nth-child(2) > div > div.caption.js-caption";
//click profile
const profile = "#ui_box > div.nui_main_menu > div.middle > div.content > ul > li.profile.main_menu_item > span > span.button_wrapper > span > span.icon";
//# of cities
const no_of_cities = "#player_towns > div > div.game_header.bold";
//click next city
const next_city = "#ui_box > div.town_name_area > div.btn_next_town.button_arrow.right";
//max lvl buildings
const building_max_lvl = {
    "main": 25,
    "hide": 10,
    "lumber": 40,
    "stoner": 40,
    "ironer": 40,
    "market": 30,
    "docks": 30,
    "barracks": 30,
    "wall": 25,
    "storage": 35,
    "farm": 45,
    "academy": 36,
    "temple": 30
};


//do something with the flag
function daily_reward(number_of_days) {

    if (document.body.contains(document.querySelector(daily_reward_box)) === true
        && document.querySelector(open_daily_reward).getAttribute('style') != 'display: none;') {

        if (parseInt(document.querySelector(daily_reward_box_day).innerHTML) < number_of_days) {

            setTimeout(() => {

                document.querySelector(close_all).click();

            }, 1000 + Math.floor(Math.random() * 10));


            setTimeout(() => {

                document.querySelector(storage).click();

            }, 1300 + Math.floor(Math.random() * 10));


            setTimeout(() => {

                const max_storage_value = parseInt(document.querySelector(max_storage_capacity).innerHTML.match(/[1-9][0-9]*/)[0]);
                const wood_value = parseInt(document.querySelector(wood).innerHTML);
                const stone_value = parseInt(document.querySelector(stone).innerHTML);
                const iron_value = parseInt(document.querySelector(iron).innerHTML);

                setTimeout(() => {

                    document.querySelector(close_all).click();

                }, 1000 + Math.floor(Math.random() * 10));

                setTimeout(() => {

                    document.querySelector(open_daily_reward).click();

                }, 1300 + Math.floor(Math.random() * 10));

                setTimeout(() => {

                    if (parseInt(document.querySelector(daily_reward_box_resources_amount).innerHTML) + wood_value < max_storage_value
                        || parseInt(document.querySelector(daily_reward_box_resources_amount).innerHTML) + stone_value < max_storage_value
                        || parseInt(document.querySelector(daily_reward_box_resources_amount).innerHTML) + iron_value < max_storage_value) {

                        document.querySelector(daily_reward_box_resources).click();
                        daily_login_reward_collected = true;

                    } else if (parseInt(document.querySelector(favor_amount).innerHTML) + parseInt(document.querySelector(daily_reward_favor_amount).innerHTML) < 500) {

                        document.querySelector(daily_reward_box_favor).click();
                        daily_login_reward_collected = true;
                    } else {
                        console.log("Can't collect resources/favors");
                    }

                }, 1600 + Math.floor(Math.random() * 10));

            }, 1600 + Math.floor(Math.random() * 10));

        } else if (parseInt(document.querySelector(daily_reward_box_day).innerHTML) > number_of_days) {
            document.querySelector(close_all).click();
            console.log("Set to not collet from here anymore");
        }

    } else if (document.querySelector(open_daily_reward).getAttribute('style') == 'display: none;') {
        console.log("Already colected");
    }
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function build(build_plan){

    setTimeout(async () => {

        no_of_constructions = document.querySelector("#main_tasks > h4").innerHTML.match(/\(.*\)/)[0].replace(/ /g,"");
        start_index = parseInt(no_of_constructions.charAt(1));
        stop_index = parseInt(no_of_constructions.charAt(3));

        for (let i = start_index; i < stop_index; i++) {
        
            if (parseInt(document.querySelector(population).innerHTML) >= 30){

                var building_that_we_can_build = [];

                var current_lvl = {
                    "main": -1,
                    "hide": -1,
                    "lumber": -1,
                    "stoner": -1,
                    "ironer": -1,
                    "market": -1,
                    "docks": -1,
                    "barracks": -1,
                    "wall": -1,
                    "storage": -1,
                    "farm": -1,
                    "academy": -1,
                    "temple": -1
                };

                for (const [key, value] of Object.entries(current_lvl)) {
                    
                    if(document.querySelector(click_for_every_building[key])
                        && /Construire/.test(document.querySelector(click_for_every_building[key]).innerHTML) === false 
                        && /Imposibil/.test(document.querySelector(click_for_every_building[key]).innerHTML) === false){
                        
                        current_lvl[key] = parseInt(document.querySelector(click_for_every_building[key]).innerHTML.match(/[1-9][0-9]*/)[0].replace(/ /g,"")) - 1;   
                    
                    } else {

                        current_lvl[key] = parseInt(document.querySelector(current_lvl_building[key]).innerHTML);
                    }
                    
                }
                
                for (const [key, value] of Object.entries(current_lvl)) {

                    if (current_lvl[key] < build_plan[key] && document.querySelector(click_for_every_building[key])){
                        building_that_we_can_build.push(key);
                    }
                }

                if (building_that_we_can_build.length !=0){

                    var building_selected = click_for_every_building[building_that_we_can_build[Math.floor(Math.random()*building_that_we_can_build.length)]];

                    document.querySelector(building_selected).click();

                }


            } else if(parseInt(document.querySelector(population).innerHTML) <= 30 && document.querySelector(click_for_every_building["farm"])) {
        
                document.querySelector(click_for_every_building["farm"]).click();

            }

            await delay(1500);

        }

    }, 4000 + Math.floor(Math.random() * 10));  
}

function lvl_up_buildings(preferences_list){

    var ship_logic = 0;

    document.querySelector(open_building).click();

    setTimeout(() => {

        var current_lvl = {
            "main": -1,
            "hide": -1,
            "lumber": -1,
            "stoner": -1,
            "ironer": -1,
            "market": -1,
            "docks": -1,
            "barracks": -1,
            "wall": -1,
            "storage": -1,
            "farm": -1,
            "academy": -1,
            "temple": -1
        };

        for (const [key, value] of Object.entries(current_lvl)) {
            
            current_lvl[key] = parseInt(document.querySelector(current_lvl_building[key]).innerHTML);
        
        }

        
        for (const [key, value] of Object.entries(current_lvl)) {

            if (current_lvl[key] != -1){
    
                if (current_lvl[key] == building_plan_for_ship[key]){
                    ship_logic = 0;
                } else if (current_lvl[key] < building_plan_for_ship[key]){
                    ship_logic = 1;
                } else if (current_lvl[key] > building_plan_for_ship[key]){
                    ship_logic = 0;
                }

                if (ship_logic == 1){
                    break
                }
            }
        }

    }, 2000 + Math.floor(Math.random() * 10));

    setTimeout(() => {

        if (ship_logic == 1){

            build(building_plan_for_ship);

        } else if(ship_logic == 0){

            if (Object.keys(preferences_list).length >= 1){

                var current_lvl = {
                    "main": -1,
                    "hide": -1,
                    "lumber": -1,
                    "stoner": -1,
                    "ironer": -1,
                    "market": -1,
                    "docks": -1,
                    "barracks": -1,
                    "wall": -1,
                    "storage": -1,
                    "farm": -1,
                    "academy": -1,
                    "temple": -1
                };
        
                for (const [key, value] of Object.entries(current_lvl)) {
                    
                    current_lvl[key] = parseInt(document.querySelector(current_lvl_building[key]).innerHTML);
                
                }

                for (const [key, value] of Object.entries(preferences_list)) {

                    if (current_lvl[key] == building_max_lvl[key]){

                        delete preferences_list[key];

                    }

                }

                if (Object.keys(preferences_list).length == 0){

                    build(building_plan_normal);

                }
                else if (Object.keys(preferences_list).length >= 1){
                
                    build(preferences_list);

                }
            }
            else if (Object.keys(preferences_list).length == 0){
                
                build(building_plan_normal);                

            }
        }

    }, 3000 + Math.floor(Math.random() * 10));

    setTimeout(() => {

        document.querySelector(close_all).click();
    
    }, 22000 + Math.floor(Math.random() * 100));

}

function do_triumphal_parade(){
    
    if (parseInt(document.querySelector(battle_points).innerHTML) >= 300){

        document.querySelector(agora).click();

        setTimeout(() => {

            document.querySelector(triumph_parade).click();
        
        }, 1000 + Math.floor(Math.random() * 100));

        setTimeout(() => {

            document.querySelector(close_all).click();
        
        }, 2000 + Math.floor(Math.random() * 100));

    }
}

function inject_code(){

    var inject = document.createElement('script');
    inject.src = chrome.runtime.getURL('js//inject.js');
    inject.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(inject);
}

chrome.storage.local.get(['how_often'], function(result) {
setInterval(function () {

    document.querySelector(profile).click();

    setTimeout(() => {

        cities_num = parseInt(document.querySelector(no_of_cities).innerHTML.match(/[1-9][0-9]*/)[0].replace(/ /g,""));

    }, 1200 + Math.floor(Math.random() * 100));


    setTimeout(async() => {

        for (let i = 0; i < cities_num; i++) {

            var startTime = performance.now()

            chrome.storage.local.get(['number_of_days'], function(result) {
                console.log('Day');
                console.log(result['number_of_days']);
                daily_reward(result['number_of_days']);
            });

            await delay(7000)
            chrome.storage.local.get(['building_preferences'], function(result) {
                console.log('Preferences');
                console.log(result['building_preferences']);
                for (const [key, value] of Object.entries(result['building_preferences'])) {

                    result['building_preferences'][key] = building_plan_normal[key];
                }
                
                console.log(result['building_preferences']);
                lvl_up_buildings(result['building_preferences']);
            });
            await delay(40000);
            chrome.storage.local.get(['triumph_parade'], function(result) {
                console.log('Triumphal parade');
                console.log(result['triumph_parade']);

                if (result['triumph_parade'] == 1){
                    do_triumphal_parade();
                }

            });
            await delay(12000);
            document.querySelector(next_city).click();

            var endTime = performance.now();

            console.log(`Total time spent per city = ${endTime - startTime} milliseconds`);
            console.log(new Date().toLocaleString());
        }

    }, 1500 + Math.floor(Math.random() * 100));

}, 60000 * result['how_often'] + Math.floor(Math.random() * 1000));
}); //60000 = 1 min

inject_code();