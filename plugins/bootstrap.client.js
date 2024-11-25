import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";


export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
        // 輔助函式的功能都放在 provide 物件內
        offcanvasBootstrap: (element, options = {}) => new bootstrap.Offcanvas(element, options),
        modalBootstrap: (element, options = {}) => new bootstrap.Modal(element, options),
        },
    };
});
