export default class Utils {
    constructor() {
        this.createTag = (tag, className) => {
            const element = document.createElement(tag);
            element.className = className;
            return element;
        }
    }
}