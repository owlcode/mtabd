export default class Memory {
    static save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static read(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    static clear(key) {
        if (key) {
            localStorage.clear(key);
        } else {
            localStorage.clear();
        }
    }
}