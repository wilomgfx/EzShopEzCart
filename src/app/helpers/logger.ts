//wraper for  console
export class Logger {
    static log(message: any) {
        if (typeof window.console !== 'undefined') {
            window.console.log(message);
        }
    }
}
