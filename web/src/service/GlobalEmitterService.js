export default class GlobalEmitterService {
    static emit = (status) => {
        const event = new CustomEvent('spinner-load', { detail: status });
        window.dispatchEvent(event);
    }

    // static loggedInEmitter = (loggedIn) => {
    //     const event = new CustomEvent('auth-changed', { detail: loggedIn });
    //     window.dispatchEvent(event);
    // }
}