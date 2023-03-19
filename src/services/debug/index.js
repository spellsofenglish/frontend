/**
 * @prettier
 */

const DEBUG_PREFIX = '[SOE INFORM] : ';
const DEBUG_PREFIX_SUCCESS = '[SOE SUCCESS] : ';
const DEBUG_PREFIX_ERROR = '[SOE ERROR] : ';

class Debug {
  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  developmentInfo = ['info', 'success', 'error'];

  /**
   * isDevStatuses returns true if method (argument - name of method) is allowed for development mode.
   * In case it is not dev mod returns false.
   */
  isDevStatuses(method) {
    if (this.isDevelopment) {
      return this.developmentInfo.includes(method);
    }

    return false;
  }

  /**
   * To show an info
   */
  info(message, ...data) {
    if (this.isDevStatuses('info')) {
      console.log(`%c${new Date().toISOString()}`, 'color: blue', DEBUG_PREFIX, message, data);
    }
  }

  /**
   * To show a success info
   */
  success(message, ...data) {
    if (this.isDevStatuses('success')) {
      console.info(
        `%c${new Date().toISOString()} %c${DEBUG_PREFIX_SUCCESS}`,
        'color: green',
        'color: green',
        message,
        data,
      );
    }
  }

  /**
   * To show an error info
   */
  error(message, ...data) {
    if (this.isDevStatuses('error')) {
      console.log(
        `%c${new Date().toISOString()} %c${DEBUG_PREFIX_ERROR}`,
        'color: red',
        'color: red',
        message,
        data,
      );
    }
  }

  /**
   * For console clearing
   */
  clear() {
    console.clear();
  }
}

const debug = new Debug();

export default debug;
