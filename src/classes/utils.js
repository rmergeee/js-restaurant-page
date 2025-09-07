export default class Utils {
    static createTag = (tag, className) => {
        const element = document.createElement(tag);
        element.className = className;
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

}