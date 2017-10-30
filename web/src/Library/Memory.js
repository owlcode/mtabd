export default class Memory {
    static save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static read(key) {
        let out;
        try {
            out = JSON.parse(localStorage.getItem(key));
            return out;
        } catch (e) {
            return null;
        }

    }

    static clear(key) {
        if (key) {
            localStorage.clear(key);
        } else {
            localStorage.clear();
        }
    }
}