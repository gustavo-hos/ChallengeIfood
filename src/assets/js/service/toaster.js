import { injectable } from 'inversify';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const BLUE_GRADIENT = "linear-gradient(to right, #56ccf2, #2f80ed);";
const RED_GRADIENT = "linear-gradient(to right, #ff9966, #ff5e62);";
const GREEN_GRADIENT = "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6);";

const ToastType = {
    info: BLUE_GRADIENT,
    alert: RED_GRADIENT,
    success: GREEN_GRADIENT
}

@injectable()
class ToasterService {


    fire(text, duration, toastType, onClickFn) {
        Toastify({
            text: text,
            duration: duration * 1000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
              background: ToastType[toastType],
            },
            onClick: onClickFn
          }).showToast();
    }

    info(text, duration) {
        this.fire(text, duration, "info", () => {});
    }

    alert(text, duration) {
        this.fire(text, duration, "alert", () => {});
    }

    success(text, duration) {
        this.fire(text, duration, "success", () => {});
    }
}

export default ToasterService;