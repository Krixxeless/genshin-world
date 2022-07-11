export const getCharacterBanner = (characters, weapons, main_characters_id) => {
    const characters_banner = characters.filter(character => character.id < 26 || character.id === main_characters_id.find(item => item === character.id));
    const weapons_banner = weapons.filter(weapon => weapon.id < 32)
    return [...characters_banner, ...weapons_banner]
}

export const getWeaponBanner = (characters, weapons, main_weapons_id) => {
    const characters_banner = characters.filter(character => character.id < 21);
    const weapons_banner = weapons.filter(weapon => weapon.id < 33 || weapon.id === main_weapons_id.find(item => item === weapon.id))
    return [...characters_banner, ...weapons_banner]
}

const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const dropItem = (banner, rare) => {
    const items = banner.filter(item => item.rare === rare);
    return getRandomItem(items);
}

let FourStarChance = 5.100
let FiveStarChance = 0.600

let FourStarCounter = 0;
let FiveStarCounter = 0;

export const wish = (banner) => {
    let chance = Math.random() * 100;
    if (FourStarCounter >= 8 && FourStarCounter < 10) {
        FourStarChance += FourStarCounter
    } else if (FourStarCounter === 10) {
        return dropItem(banner, 4)
    }
    if (FiveStarCounter >= 74 && FourStarCounter < 90) {
        FiveStarChance += FiveStarCounter / 10 * 2
    } else if (FourStarCounter === 90) {
        return dropItem(banner, 5)
    }
    if (chance > FourStarChance) {
        FourStarCounter += 1;
        FiveStarCounter += 1;
        return dropItem(banner, 3)
    } else if (chance <= FourStarChance && chance > FiveStarChance) {
        FourStarCounter = 0;
        FiveStarCounter += 1;
        return dropItem(banner, 4)
    } else {
        FourStarCounter += 0;
        FiveStarCounter = 0;
        return dropItem(banner, 5)
    }
}
