import Practice from '../Practice/Practice.vue'

export default {
    name: "edzések-tab",
    props: {
        input: Object
    },
    components: {
        'practice' : Practice
    },
    data() {
        return {
            practices: [
                {
                    trainer: 'Contramestre Tocha',
                    city: 'Budapest',
                    place: 'VÖRÖSMARTY MIHÁLY GIMNÁZIUM',
                    address: 'Horánszky utca 11.',
                    // address: '1085 Budapest, VIII. kerület, Horánszky utca 11.',
                    times: [ 'Hétfő: 20:00-21:30', 'Szerda: 19:00-20.30'],
                    mapLink: 'https://www.google.com/maps/place/V%C3%B6r%C3%B6smarty+Mih%C3%A1ly+High+School/@47.4906453,19.06317,16z/data=!4m5!3m4!1s0x4741dc5c10045203:0x2df4549a94f59955!8m2!3d47.4918825!4d19.0674842',
                    // facebookLink: 'fb://page/?id=3080300442011755',
                    // https://www.facebook.com/photo.php?fbid=3080300442011755&set=a.141307859244376&type=3&source=11&referrer_profile_id=100000954874709
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    messengerLink: 'https://www.messenger.com/t/tocha.cecab'
                },
                {
                    trainer: 'Contramestre Tocha',
                    city: 'Budapest',
                    place: 'BME SPORTKÖZPONT',
                    address: 'Bertalan Lajos utca 4-6.',
                    // address: '1085 Budapest, VIII. kerület, Horánszky utca 11.',
                    times: [ 'Szerda: 17:00-18:00', 'Péntek: 16:30-17:30'],
                    mapLink: 'https://www.google.com/maps/place/BME+Sport+Center/@47.4795111,19.0533978,15.35z/data=!4m5!3m4!1s0x4741dc530fe8a959:0x74e47bc7a728a3ff!8m2!3d47.4796628!4d19.0575069',
                    // facebookLink: 'fb://page/?id=3080300442011755',
                    // https://www.facebook.com/photo.php?fbid=3080300442011755&set=a.141307859244376&type=3&source=11&referrer_profile_id=100000954874709
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    messengerLink: 'https://www.messenger.com/t/tocha.cecab'
                },
                {
                    trainer: 'Estágiário Furacão',
                    city: 'Budapest',
                    place: 'RAJKÓ-TALENTUM TÁNC ÉS ZENEMŰVÉSZETI ISKOLA',
                    address: 'Rottenbiller u. 16-22.',
                    // address: '1085 Budapest, VIII. kerület, Horánszky utca 11.',
                    times: [ 'Péntek: 19:00-21:00'],
                    mapLink: 'https://www.google.com/maps/place/BME+Sport+Center/@47.4795111,19.0533978,15.35z/data=!4m5!3m4!1s0x4741dc530fe8a959:0x74e47bc7a728a3ff!8m2!3d47.4796628!4d19.0575069',
                    // facebookLink: 'fb://page/?id=3080300442011755',
                    // https://www.facebook.com/photo.php?fbid=3080300442011755&set=a.141307859244376&type=3&source=11&referrer_profile_id=100000954874709
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    messengerLink: 'https://www.messenger.com/t/tocha.cecab'
                }
            ]
        };
    },
    created() {

    },
    methods: {

    }
};
