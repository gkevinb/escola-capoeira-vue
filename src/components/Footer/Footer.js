export default {
    name: "footer-comp",
    data() {
        return {
        };
    },
    created() {

    },
    methods: {
        redirectFacebook: function () {
            let mobileDeviceTestExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
            /* Tests if mobile device */
            if (mobileDeviceTestExp.test(navigator.userAgent)){
                window.location.assign('fb://profile/135132893211321')
            }else{
                window.location.assign('https://www.facebook.com/escolacapoeirahu/')
            }
        }
    }
};
