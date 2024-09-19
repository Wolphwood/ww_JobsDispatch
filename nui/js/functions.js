Array.prototype.get = function(index) {
    if (index < 0) return this[this.length + index];
    return this[index];
}

NodeList.prototype.array = function() {
    return Array.from(this);
}

function hexToRGBA(hex) {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
          hex = hex.split('').map(char => char + char).join('');
    } else if (hex.length === 4) {
          hex = hex.split('').map(char => char + char).join('');
    } else if (hex.length !== 6 && hex.length !== 8) {
          throw new Error('Invalid hex color format');
    }

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;

    if (a === 1) {
          return {r,g,b};
    } else {
          return {r,g,b,a};
    }
}

function rgbaToHex({ r, g, b, a = 1 }) {
    // Fonction utilitaire pour convertir une valeur en chaîne hexadécimale à 2 chiffres
    function toHex(value) {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    // Convertir les valeurs r, g, b en hexadécimal
    const rHex = toHex(r);
    const gHex = toHex(g);
    const bHex = toHex(b);

    // Convertir l'alpha en hexadécimal si présent et différent de 1
    if (a < 1) {
        const aHex = toHex(Math.round(a * 255));
        return `#${rHex}${gHex}${bHex}${aHex}`;
    }

    // Retourner la couleur en hexadécimal sans alpha
    return `#${rHex}${gHex}${bHex}`;
}

function AdjustLuminance(rgb, l = 1) {
    function clamp(v, mn, mx) {
        return Math.min(Math.max(mn, v), mx);
    }
    
    // Mélanger la couleur avec du blanc (éclaircir) ou du noir (assombrir)
    function mixWith(color1, color2, weight) {
        return clamp(Math.round(color1 * (1 - weight) + color2 * weight), 0, 255);
    }

    // Ajuster la couleur en fonction de la luminance
    function adjustColor(r, g, b, l) {
        if (l < 1) {
            // Mélanger avec du noir pour assombrir
            return {
                r: mixWith(r, 0, 1 - l),
                g: mixWith(g, 0, 1 - l),
                b: mixWith(b, 0, 1 - l),
            };
        } else {
            // Mélanger avec du blanc pour éclaircir
            return {
                r: mixWith(r, 255, l - 1),
                g: mixWith(g, 255, l - 1),
                b: mixWith(b, 255, l - 1),
            };
        }
    }

    let { r, g, b } = rgb;
    return adjustColor(r, g, b, l);
}

// Animation & Transition Waiter
const AwaitTransition = (element) => new Promise(rs => element.addEventListener('transitionend', rs, { once: true }));
const AwaitAnimation = (element) => new Promise(rs => element.addEventListener('animationend', rs, { once: true }));
const Wait = (ms) => new Promise(rs => setTimeout(rs, ms));

function generateUUID(...l) {
    const c = () => ("000" + ((Math.random() * 46656) | 0).toString(36)).slice(-3).toUpperCase();
    let z = l.flat(Infinity);
    let u;
    do {
        u = c() + c();
    } while (z.includes(u));
    
    return u;
}

function GetElementStyle(element) {
    return window.getComputedStyle(element);
}

function GetElementTransitionDuration(element) {
    return parseFloat(GetElementStyle(element).transitionDuration);
}

function GetElementTransitionDurationInMilliseconds(element) {
    return GetElementTransitionDuration(element) * 1000;
}

async function SimplePlaySoundEffect({url, volume=1, speed=1, loop=false, end=null}) {
	var audio = new Audio(url);
    audio.volume = volume;
    audio.loop = loop;
    audio.mozPreservesPitch = false;
    audio.playbackRate = speed;
	if (end !== null) audio.onended=end;
    await audio.play();

    return audio;
}