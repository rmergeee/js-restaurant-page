export default class Utils {
    static createTag = (tag, className) => {
        const element = document.createElement(tag);
        element.className = className;
        return element;
    }

    static createTagWithText = (tag, className, text) => {
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = text;
        return element;
    }

    static createQuickImg = (src, alt) => {
        const quickImg = this.createTag("div", "quick-img");
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        const p = document.createElement("p");
        p.textContent = alt;
        quickImg.append(
            img,
            p
        )
        return quickImg;
    }

    static createCoffeCard(src, alt) {
        const position = this.createTag("div", "menu-position");
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        const p = document.createElement("p");
        const h4 = document.createElement("h4");
        const info = this.createTag("div", "coffe-info");
        h4.innerHTML = `Cafe con Lache <span class="price">$150</span>`;
        p.textContent = "3 criollitos, Mermelada";
        info.append(h4, p);
        position.append(img, info);
        return position;
    }

    static createCookCard(cook, socialIcons) {
        const card = this.createTag("article", "cook");
        const img = this.createTag("img", "cook-img");
        const info = this.createTag("div", "cook-info");

        const h3 = this.createTagWithText("h3", "cook-name", cook.name);
        const p = this.createTagWithText("p", "cook-position", cook.pos);
        const media = this.createTag("div", "cook-social-media");

        const img1 = this.createTag("img", "cook-img");
        const img2 = this.createTag("img", "cook-img");
        const img3 = this.createTag("img", "cook-img");

        img.src = cook.src;
        img.alt = cook.name;

        img1.src = socialIcons[0];
        img2.src = socialIcons[1];
        img3.src = socialIcons[2];

        media.append(img1,img2,img3);
        info.append(h3,p,media);
        card.append(img, info);
        
        return card;
    }
}