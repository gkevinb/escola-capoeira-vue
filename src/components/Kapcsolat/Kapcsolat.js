export default {
    name: "kapcsolat-tab",
    data() {
        return {
            contacts: [
                {
                    name: 'Tocha Fabiano',
                    capoeiraName: 'Contramestre Tocha',
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    facebookId: '100000954874709'
                },
                {
                    name: 'Ács Bea',
                    capoeiraName: 'Graduada Bea',
                    facebookLink: 'https://www.facebook.com/bea.acs.5',
                    facebookId: '615787357',
                    phone: '+36302517231'
                },
                {
                    name: 'Botos András',
                    capoeiraName: 'Estágiário Furacão',
                    facebookLink: 'https://www.facebook.com/andras.botos.3',
                    facebookId: '100001537112922'
                },
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
            setTimeout(function () {
                window.location.assign(contact.facebookLink)
            }, 200);
            window.location.assign('fb://profile/' + contact.facebookId)
        }
    }
};
