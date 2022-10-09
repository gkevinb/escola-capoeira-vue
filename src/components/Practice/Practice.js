export default {
    name: "practice",
    props: {
        practice: Object
    },
    data() {
        return {};
    },
    created() {

    },
    methods: {
        stripHTTP: function () {
            return this.practice.websiteLink.slice(7, this.practice.websiteLink.length - 1)
        },
        formatPhoneLink: function(phoneNumber) {
            return 'tel:' + phoneNumber
        },
        formatInstagramLink: function(instagramHandle) {
            return 'https://www.instagram.com/' + instagramHandle + '/'
        },
        redirectFacebook: function () {
            let mobileDeviceTestExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
            /* Tests if mobile device */
            if (mobileDeviceTestExp.test(navigator.userAgent)){
                window.location.assign('fb://profile/' + this.practice.facebookId)
            }else{
                window.location.assign(this.practice.facebookLink)
            }
        }
    }
};