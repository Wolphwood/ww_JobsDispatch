const CONFIG = {
    container: {
        box: 'top right max-w-3xl',
        offset: {
            top: '10vh'
        }
    },
    notification: {
        container: 'w-full',
        card: {
            box: 'relative w-full rounded-lg shadow-lg',
            icon: 'text-3xl',
        },
        title: {
            box: 'flex items-center gap-2 p-4',
            text: 'text-2xl flex-1 text-2xl font-semibold',
            badge: 'px-3 py-0 rounded-full text-xl font-semibold',
        },
        detail: {
            box: 'p-3 rounded-bl-md rounded-br-md p-4',
            row: 'flex items-start gap-2 mb-2',
            icon: 'text-3xl',
        },
        respond: {
            box: 'absolute bottom-0 right-0 p-2 m-2',
            text: 'px-8 py-2 rounded-full text-xl',
            content: "[Y] Prendre"
        },
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.notifications-container');
    if (CONFIG.container.offset) Object.keys(CONFIG.container.offset).forEach(key => container.style.setProperty(`--offset-${key}`, CONFIG.container.offset[key]));
    container.classList.add(...CONFIG.container.box.split(/\s/g));
});

class NotificationHTML {
    #hidden;

    constructor(options = {}) {
        this.data = {};
        this.elements = null;
        this.#hidden = true;

        for (let key of Object.keys(options)) {
            if (['title', 'details', 'colors'].includes(key)) continue;
            this.data[key] = options[key];
        }

        if (options.title) {
            if (typeof options.title == 'string') {
                this.data.title = {
                    content: options.title
                }
            } else
            if (typeof options.title == 'object' && !Array.isArray(options.title)) {
                let { content, icon, badges, font, color } = options.title;
    
                badges = badges.map(badge => {
                    if (typeof badge == 'string') return { content: badge };
    
                    return {
                        content: badge.content,
                        color: badge.color,
                        font: badge.font,
                    };
                })
    
                this.data.title = {
                    content, icon, badges, font, color
                };
            } else {
                throw new Error(`Invalid value for 'data.title'`);
            }
        }

        if (options.details) {
            if (typeof options.details == 'string' || typeof options.details == 'number') {
                this.data.details = [{
                    content: options.details
                }];
            } else
            if (typeof options.details == 'object' && Array.isArray(options.details)) {
                this.data.details = [];
    
                options.details.forEach(detail => {
                    let {content, icon, font, color} = detail;
                    this.data.details.push({content, icon, font, color});
                });
            } else
            if (typeof options.details == 'object' && !Array.isArray(options.details)) {
                let {content, icon, font, color} = options.details;
                this.data.details = [{content, icon, font, color}];
            } else {
                throw new Error(`Invalid value for 'data.details'`);
            }
        }

        if (options.respond) {
            if (typeof options.respond == 'string' || typeof options.respond == 'number') {
                this.data.respond = [{
                    content: options.respond
                }];
            } else
            if (typeof options.respond == 'object' && !Array.isArray(options.respond)) {
                let { content, font, color, disabled } = options.respond;
                this.data.respond = { content, font, color, disabled };
            } else {
                throw new Error(`Invalid value for 'data.respond'`);
            }
        }
        
        if (options.colors) {
            if (typeof options.colors == 'object' && !Array.isArray(options.colors)) {
                this.data.colors = options.colors;

                for (let key in options.colors) {
                    this.data.colors[key] = ParseColorName(options.colors[key]);
                }

                let { primary, secondary } = this.data.colors;

                if (!!primary && ( !secondary || typeof secondary == 'number' )) {
                    let hex = ParseColorName(primary);
                    let rgb = hexToRGBA(hex);

                    let adjusted = AdjustLuminance(rgb, typeof secondary == 'number' ? secondary : 0.7);

                    this.data.colors.secondary = rgbaToHex(adjusted);
                }

                if (!!secondary && ( !primary || typeof primary == 'number' )) {
                    let hex = ParseColorName(secondary);
                    let rgb = hexToRGBA(hex);

                    let adjusted = AdjustLuminance(rgb, typeof primary == 'number' ? primary : 1.3);

                    this.data.colors.primary = rgbaToHex(adjusted);
                }
            } else {
                throw new Error(`Invalid value for 'data.colors'`);
            }
        }
    }

    #buildCardIcon(faicon) {
        let icon = document.createElement('i');
        icon.classList = CONFIG.notification.card.icon;
        icon.classList.add(...faicon.split(/[\s]/gi));

        return icon;
    }

    #buildIcon(faicon) {
        let icon = document.createElement('i');
        icon.classList = CONFIG.notification.detail.icon;
        if (faicon) icon.classList.add(...faicon.split(/[\s]/gi));

        return icon;
    }

    #buildTitleBadge(data) {
        let badge = document.createElement('p');
        badge.classList =  CONFIG.notification.title.badge;
        badge.classList.add('badge');

        if (data.color) badge.style.setProperty('--notification-badge-color', data.color);
        if (data.font) badge.style.setProperty('--notification-font-color', data.font);
        
        badge.innerText = data.content;

        return badge;
    }

    #buildTitleBox() {
        let div = document.createElement('div');
        div.classList = CONFIG.notification.title.box;
        div.classList.add('title');

        // badges
        this.data.title.badges?.forEach(badge => {
            div.appendChild( this.#buildTitleBadge( badge ) );
        });

        // title text
        let p = document.createElement('p');
        p.classList = CONFIG.notification.title.text;
        p.innerText = this.data.title.content;

        if (this.data.title.font) p.style.setProperty('--notification-font-color', this.data.title.font);
        
        div.appendChild( p );
        
        this.elements.title = {
            container: div, p,
            icon: this.data.title.icon,
            color: this.data.title.color,
            font: this.data.title.font,
        };

        // icon
        if (this.data.title.icon) {
            let icon = this.#buildCardIcon( this.data.title.icon );
            this.elements.title.icon = icon;
            if (this.data.title.color) icon.style.setProperty('--notification-font-color', this.data.title.color);
            div.appendChild( icon );
        }

        return div;
    }

    #buildDetails() {
        let div = document.createElement('div');
        div.classList = CONFIG.notification.detail.box;
        div.classList.add('details');

        this.elements.details = {
            container: div,
            children: [],
        }

        this.data.details.forEach(data => {
            let sdiv = document.createElement('div');
            sdiv.classList = CONFIG.notification.detail.row;

            let icon = this.#buildIcon(data.icon);
            if (data.color) icon.style.setProperty('--notification-font-color', data.color);
            
            let p = document.createElement('p');
            if (data.font) p.style.setProperty('--notification-font-color', data.font);
            if (data.content) {
                data.content.split(/\n/g).forEach((text, index, array) => {
                    p.appendChild( document.createTextNode(text) );
                    if (index < array.length - 1) p.appendChild( document.createElement('br') )
                });
            }

            sdiv.appendChild(icon);
            sdiv.appendChild(p);

            div.appendChild(sdiv);


            this.elements.details.children.push({
                container: sdiv,
                icon, p,
                color: data.color,
                font: data.font,
            });
        });

        if (this.data.respond) {
            if (!this.data.respond.disabled) {
                div.appendChild( this.#buildRespond() );
            }
        } else {
            div.appendChild( this.#buildRespond() );
        }
        
        return div;
    }

    #buildRespond() {
        let div = document.createElement('p');
        div.classList = CONFIG.notification.respond.box;
        div.classList.add('respond')

        let p = document.createElement('p');
        p.classList = CONFIG.notification.respond.text;
        p.innerText = this.data.respond?.content ?? CONFIG.notification.respond.content;

        if (this.data.respond?.font) p.style.setProperty('--notification-font-color', this.data.respond.font);
        if (this.data.respond?.color) p.style.setProperty('--notification-respond-color', this.data.respond.color);

        this.elements.respond = {
            container: div, p
        };

        div.appendChild(p);
        return div;
    }

    async show() {
        if (!this.elements) return;
        this.#hidden = false;
        
        let {container, notification} = this.elements;

        let { height } = notification.getBoundingClientRect();

        notification.classList.add('closed');
        await AwaitTransition(notification);

        if (typeof this.data.sound !== 'undefined') {
            let url = typeof this.data.sound == 'number' ? `./snd/${this.data.sound}.mp3` : this.data.sound;
            let volume = this.data.volume ?? 0.3;
            SimplePlaySoundEffect({url, volume});
        }

        container.style.setProperty('height', height + 'px');
        container.classList.add('mb-4');

        container.classList.remove('closed');
        notification.classList.remove('closed');
    }
    
    async hide() {
        if (!this.elements) return;
        this.#hidden = true;
        
        let {container, notification} = this.elements;

        container.classList.add('closed');
        notification.classList.add('closed');
        container.style.setProperty('height', '0px');
    }

    remove() {
        if (!this.elements) return;
        
        this.elements.container.remove();
        this.elements = null;
    }

    isClosed() {
        return this.#hidden;
    }

    getHeight() {
        let { container, notification } = this.elements;
        
        let [ch, nh] = [container.getBoundingClientRect().height, notification.getBoundingClientRect().height];

        return Math.max(ch, nh);
    }

    build() {
        if (this.elements) return;
        this.elements = {};

        let card = document.createElement('div');
        card.classList = CONFIG.notification.card.box;
        card.classList.add('notification');
        
        if (this.data.hidden) card.classList.add('hidden');

        if (this.data.title) card.appendChild( this.#buildTitleBox() );
        if (this.data.details) card.appendChild( this.#buildDetails() );

        for (let key in this.data.colors) {
            card.style.setProperty(`--notification-${key}-color`, this.data.colors[key]);
        }

        let container = document.createElement('div');
        container.classList = CONFIG.notification.container;
        container.classList.add("container", 'closed');
        container.style.setProperty('height', '0px');

        container.appendChild(card);

        this.elements.container = container;
        this.elements.notification = card;

        return container;
    }
}