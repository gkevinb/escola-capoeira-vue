export default {
    name: "kapcsolat-tab",
    data() {
        return {
            email: 'info@escolacapoeira.hu',
            contacts: [
                {
                    name: 'Tocha Fabiano',
                    capoeiraName: 'Contramestre Tocha',
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    facebookId: '100000954874709',
                    phone: '+36305812192'
                },
                {
                    name: 'Torma Andrea',
                    capoeiraName: 'Aluna Felina',
                    facebookLink: 'https://www.facebook.com/andrea.torma.9',
                    facebookId: '1069949104',
                    phone: '+36306111051'
                },
                {
                    name: 'Botos András',
                    capoeiraName: 'Graduado Furacão',
                    facebookLink: 'https://www.facebook.com/andras.botos.3',
                    facebookId: '100001537112922',
                    phone: '+36303142189'
                },
                {
                  name: 'Bodzsár Enikő',
                  capoeiraName: 'Graduada Gaivota',
                  facebookLink: 'https://www.facebook.com/enikogaivota.bodzsar',
                  facebookId: '100001667319907',
                  phone: '+36706703696'
                }
            ]
        };
    },
    created() {

    },
    methods: {
        formatPhoneLink: function(phoneNumber) {
            return 'tel:' + phoneNumber
        },
        redirectFacebook: function (contact) {
            let mobileDeviceTestExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
            /* Tests if mobile device */
            if (mobileDeviceTestExp.test(navigator.userAgent)){
                window.location.assign('fb://profile/' + contact.facebookId)
            }else{
                window.location.assign(contact.facebookLink)
            }
        }
    }
};
