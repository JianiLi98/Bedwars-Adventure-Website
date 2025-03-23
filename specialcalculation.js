/* arrays of objects for each categories' items */
let currentArmor = 0;
const armor = [
    { name: 'Diamond Armor', src: 'diamondArmor.webp', price: '6 Emeralds' },
    { name: 'Emerald Armor', src: 'Emerald_Armor.webp', price: '40 Emeralds' },
    { name: 'Iron Armor', src: 'Iron_Armor.webp', price: '120 Irons' },
    { name: 'Leather Armor', src: 'Leather_Armor.webp', price: '50 Irons' },
    { name: 'Void Armor', src: 'Void_Chestplate.webp', price: '18 Diamonds' },
    { name: 'Warrior Armor', src: 'Warrior_Armor.webp', price: '8 Emeralds' }
];


let currentWeapon = 0;
const weapons = [
    { name: 'Bow', src: 'Bow.webp', price: '20 Irons' },
    { name: 'Diamond Sword', src: 'Diamond_Sword.webp', price: '4 Emeralds' },
    { name: 'Iron Sword', src: 'Iron_Sword.webp', price: '6 Gold' },
    { name: 'Stone Sword', src: 'Stone_Sword.webp', price: '10 Irons' },
    { name: 'Wood Sword', src: 'Wood_Sword.webp', price: '3 Irons' }
];

let current_specialItems = 0;
const specialItem = [
    { name: 'Invisible Potion', src: 'Invisibility_Potion.webp', price: '2 Emeralds' },
    { name: 'Speed Potion', src: 'Speed_Potion.png', price: '1 Emeralds' },
    { name: 'Golden Apple', src: 'Golden_Apple.webp', price: '3 Gold' },
    { name: 'TNT', src: 'TNT.webp', price: '4 Golds' },
    { name: 'Fireball', src: 'Fireball.webp', price: '40 Irons' }
];

let current_block = 0;
const blocks = [
    { name: 'Wool', src: 'White_Wool.webp', price: '4 Irons' },
    { name: 'Clay', src: 'Clay.webp', price: '12 Irons' },
    { name: 'Endstone', src: 'End_Stone.webp', price: '20 Irons' },
    { name: 'Wood', src: 'Oak_Wood.webp', price: '4 Gold' },
    { name: 'Obsidian', src: 'Obsidian.webp', price: '8 Emeralds' }
];

let current_enchantment = 0;
const enchantments = [
    { name: 'Fire Enchant', src: 'Fire_Enchant.webp', price: '50 Irons' },
    { name: 'Static Enchant', src: 'Static_Enchant.webp', price: '2 Emeralds' },
    { name: 'Plunder Enchant', src: 'Plunder_Enchant.webp', price: '2 Emeralds' },
    { name: 'Execute Enchant', src: 'Execute_Enchant.webp', price: '50 Irons' },
    { name: 'Critical Strike', src: 'Critical_Strike_Enchant.webp', price: '8 Emeralds' },
    { name: 'Life Steal', src: 'Life_Steal_Enchant.webp', price: '50 Irons' },
    { name: 'Volley', src: 'Volley.webp', price: '8 Emeralds' },
    { name: 'Sticky Enchant', src: 'Sticky_Enchant.webp', price: '2 Emeralds' },
    { name: 'Forest Enchant', src: 'Forest_Enchant.webp', price: '2 Emeralds' },
    { name: 'Rapid Regeneration', src: 'Rapid_Regen_Enchant.webp', price: '3 Diamonds' },
    { name: 'Shield Generation', src: 'Shield_Gen_Enchant.webp', price: '3 Emeralds' },
]

/* creates a slideshow for the pictures to change when user clicks previous and next arrows */
function changePicture(direction, itemGroup) {
    let current;
    let items;
    let priceElementId;
    let nameElementId;

    if (itemGroup === 'armor') {
        current = currentArmor;
        items = armor;
        priceElementId = 'price_armor';
        nameElementId = 'name_armor';
    } else if (itemGroup === 'weapon') {
        current = currentWeapon;
        items = weapons;
        priceElementId = 'price_weapon';
        nameElementId = 'name_weapon';
    } else if (itemGroup === 'specialItems') {
        current = current_specialItems;
        items = specialItem;
        priceElementId = 'price_specialItems';
        nameElementId = 'name_specialItems';
    } else if (itemGroup === 'blocks') {
        current = current_block;
        items = blocks;
        priceElementId = 'price_blocks';
        nameElementId = 'name_blocks';
    } else if (itemGroup === 'enchantment') {
        current = current_enchantment;
        items = enchantments;
        priceElementId = 'price_enchantments';
        nameElementId = 'name_enchantments';
    }

    if (direction === 'next') {
        current = (current + 1) % items.length;
    } else if (direction === 'previous') {
        current = (current - 1 + items.length) % items.length;
    }

    /* changes item picture */
    if (itemGroup === 'armor') {
        currentArmor = current;
        document.getElementById('current_armor').src = armor[current].src;
    } else if (itemGroup === 'weapon') {
        currentWeapon = current;
        document.getElementById('current_weapon').src = weapons[current].src;
    } else if (itemGroup === 'specialItems') {
        current_specialItems = current;
        document.getElementById('current_specialItems').src = specialItem[current].src;
    } else if (itemGroup === 'blocks') {
        current_block = current
        document.getElementById('current_block').src = blocks[current].src;
    } else if (itemGroup === 'enchantment') {
        current_enchantment = current;
        document.getElementById('current_enchantment').src = enchantments[current].src;
    }

    /* changes item prices */
    let priceElement = document.getElementById(priceElementId);
    if (itemGroup === 'weapon') {
        priceElement.textContent = weapons[current].price;
    } else if (itemGroup === 'armor') {
        priceElement.textContent = armor[current].price;
    } else if (itemGroup === 'specialItems') {
        priceElement.textContent = specialItem[current].price;
    } else if (itemGroup === 'blocks') {
        priceElement.textContent = blocks[current].price;
    } else if (itemGroup === 'enchantment') {
        priceElement.textContent = enchantments[current].price;
    }

    /* changes item name display */
    let nameElement = document.getElementById(nameElementId);
    if (itemGroup == 'armor') {
        nameElement.textContent = armor[current].name;
    } else if (itemGroup === 'weapon') {
        nameElement.textContent = weapons[current].name;
    } else if (itemGroup === 'specialItems') {
        nameElement.textContent = specialItem[current].name;
    } else if (itemGroup === 'blocks') {
        nameElement.textContent = blocks[current].name;
    } else if (itemGroup === 'enchantment') {
        nameElement.textContent = enchantments[current].name;
    }
}

/* opens popup to display calculation results */
function openPopup() {
    document.getElementById("popUp").style.display = "block";


    function closePopup() {
        document.getElementById("popUp").style.display = "none";
    }

    document.querySelector('.closeButton').addEventListener('click', closePopup)
}

/* updates progress bar as user makes selection in the form */
document.addEventListener("DOMContentLoaded", function () {
    const totalselections = 5;
    let userSelection = 0;


    const updateProgressBar = () => {
        userSelection = 0;
        selections.forEach(select => {
            if (select.value != "") {
                userSelection++;
            }
        });

        const progress = (userSelection / totalselections) * 100;
        const barElement = document.getElementById("calculation_bar");
        barElement.style.width = progress + "%";
        barElement.textContent = Math.round(progress) + "%";
        barElement.classList.add("progress_percentages");

        if (userSelection === 0) {
            barElement.style.width = "0%";
            barElement.textContent = "0%";
        }
    };

    const selections = [
        document.getElementById('armor_selection'),
        document.getElementById('weapon_selection'),
        document.getElementById('specialItems_selection'),
        document.getElementById('block_selection'),
        document.getElementById('enchantment_selection')
    ];

    document.getElementById('resetButton').addEventListener('click', function () {
        selections.forEach(select => {
            select.value = "";
        });
        updateProgressBar();
    })


    selections.forEach(select => {
        select.addEventListener("change", () => {
            userSelection = selections.filter(select => select.value !== "").length;
            updateProgressBar();
        });
    });
});

/* calculates the total resources required to purchase item combination */
function process() {
    var armor_selection = document.getElementById('armor_selection').value;
    var weapon_selection = document.getElementById('weapon_selection').value;
    var specialItems_selection = document.getElementById('specialItems_selection').value;
    var block_selection = document.getElementById('block_selection').value;
    var enchantment_selection = document.getElementById('enchantment_selection').value;

    var selectedArmor = armor.find(item => item.name === armor_selection);
    var selectedWeapon = weapons.find(item => item.name === weapon_selection);
    var selectedSpecialItem = specialItem.find(item => item.name === specialItems_selection);
    var selectedBlock = blocks.find(item => item.name === block_selection)
    var selectedEnchantment = enchantments.find(item => item.name === enchantment_selection)

    var totalEmeralds = 0;
    var totalIron = 0;
    var totalGold = 0;
    var totalDiamond = 0;

    var armorPrice = selectedArmor.price;
    console.log("Armor Price:", armorPrice);
    var weaponPrice = selectedWeapon.price;
    console.log('Weapon Price:', weaponPrice);
    var specialItemPrice = selectedSpecialItem.price;
    console.log("Special Item Price:", specialItemPrice);
    var blockPrice = selectedBlock.price;
    console.log("Block Price:", blockPrice);
    var enchantmentPrice = selectedEnchantment.price;
    console.log("Enchantment Price:", enchantmentPrice)

    if (selectedArmor) {
        var armorPrice = selectedArmor.price;
        if (armorPrice.includes('Emeralds')) {
            totalEmeralds += parseInt(armorPrice);
        } else if (armorPrice.includes('Gold')) {
            totalGold += parseInt(armorPrice);
        } else if (armorPrice.includes('Irons')) {
            totalIron += parseInt(armorPrice);
        } else if (armorPrice.includes('Diamonds')) {
            totalDiamond += parseInt(armorPrice);
        }
    }

    if (selectedWeapon) {
        var weaponPrice = selectedWeapon.price;
        if (weaponPrice.includes('Emeralds')) {
            totalEmeralds += parseInt(weaponPrice);
        } else if (weaponPrice.includes('Gold')) {
            totalGold += parseInt(weaponPrice);
        } else if (weaponPrice.includes('Irons')) {
            totalIron += parseInt(weaponPrice);
        } else if (weaponPrice.includes('Diamonds')) {
            totalDiamond += parseInt(weaponPrice);
        }
    }

    if (selectedSpecialItem) {
        var specialItemPrice = selectedSpecialItem.price;
        if (specialItemPrice.includes('Emeralds')) {
            totalEmeralds += parseInt(specialItemPrice);
        } else if (specialItemPrice.includes('Gold')) {
            totalGold += parseInt(specialItemPrice);
        } else if (specialItemPrice.includes('Irons')) {
            totalIron += parseInt(specialItemPrice);
        } else if (specialItemPrice.includes('Diamonds')) {
            totalDiamond += parseInt(specialItemPrice);
        }
    }

    if (selectedBlock) {
        var blockPrice = selectedBlock.price;
        if (blockPrice.includes('Emeralds')) {
            totalEmeralds += parseInt(blockPrice);
        } else if (blockPrice.includes('Gold')) {
            totalGold += parseInt(blockPrice);
        } else if (blockPrice.includes('Irons')) {
            totalIron += parseInt(blockPrice);
        } else if (blockPrice.includes('Diamonds')) {
            totalDiamond += parseInt(blockPrice);
        }
    }

    if (selectedEnchantment) {
        var enchantmentPrice = selectedEnchantment.price;
        if (enchantmentPrice.includes('Emeralds')) {
            totalEmeralds += parseInt(enchantmentPrice);
        } else if (enchantmentPrice.includes('Gold')) {
            totalGold += parseInt(enchantmentPrice);
        } else if (enchantmentPrice.includes('Irons')) {
            totalIron += parseInt(enchantmentPrice);
        } else if (enchantmentPrice.includes('Diamonds')) {
            totalDiamond += parseInt(enchantmentPrice);
        }
    }


    console.log("Total Emeralds:", totalEmeralds);
    console.log("Total Gold:", totalGold);
    console.log("Total Irons:", totalIron);
    console.log("Total Diamonds", totalDiamond)



    document.getElementById('totalEmeralds').textContent = totalEmeralds;
    document.getElementById('totalGold').textContent = totalGold;
    document.getElementById('totalIron').textContent = totalIron;
    document.getElementById('totalDiamond').textContent = totalDiamond;

    openPopup();
}
document.getElementById('submitButton').addEventListener("click", process())

/* opens menu to naviagte using links across website. shifts page content as menu bar opens */
function openSidebar() {
    document.getElementById("content_sidebar").style.width = "250px";
    document.getElementById("content_sidebar").style.left = "0";
    document.querySelector(".main_content").style.marginLeft = "250px";
}

/* closes menu bar and shifts content of page to original position */
function closeSidebar() {
    document.getElementById("content_sidebar").style.width = '0';
    document.getElementById("content_sidebar").style.left = '-250px';
    document.getElementById("main").style.marginLeft = '0';
    document.querySelector(".main_content").style.marginLeft = '0';
}
