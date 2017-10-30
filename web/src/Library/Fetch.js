import Settings from './Settings';

class Fetch {
    static get(url) {
        return new Promise((resolve, reject) => {
            debugger;
            fetch(
                this._getUrlFormat(url),
                this._getDefaultConfigurationJson()
            )
                .then(res => res.json)
                .then(content => resolve(content))
                .catch(error => reject(error));
        });
    }

    static post(url, body) {
        return new Promise((resolve, reject) => {
            fetch(
                this._getUrlFormat(url),
                this._getDefaultConfigurationJson()
            )
                .then(res => res.json)
                .then(content => resolve(content))
                .catch(error => reject(error));
        });
    }

    static put(url, body) {
        return new Promise((resolve, reject) => {
            fetch(this._getUrlFormat(url), this._getDefaultConfigurationJson())
                .then(res => res.json)
                .then(content => resolve(content))
                .catch(error => reject(error));
        });
    }

    static remove(url) {
        return new Promise((resolve, reject) => {
            fetch(this._getUrlFormat(url), this._getDefaultConfigurationJson())
                .then(res => res.json)
                .then(content => resolve(content))
                .catch(error => reject(error));
        });
    }

    static _getDefaultConfigurationJson() {
        return {
            method: 'GET'
        }
    }

    static _getUrlFormat(url) {
        return Settings.apiUrl + '/' + url;
    }
}

export default Fetch;