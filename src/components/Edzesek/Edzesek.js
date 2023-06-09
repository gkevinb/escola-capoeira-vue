import Practice from '../Practice/Practice.vue'
import City from '../City/City.vue'

export default {
    name: "edzések-tab",
    props: {
        input: Object
    },
    components: {
        'practice' : Practice,
        'city': City
    },
    data() {
        return {
            practices: [
                {
                    trainer: 'Contramestre Tocha',
                    city: 'Budapest',
                    place: 'VÁROSLIGET (Nyári Edzés)',
                    address: 'Városliget',
                    times: [ 'Hétfő: 19:00-20:30', 'Szerda: 19:00-20.30'],
                    mapLink: 'https://goo.gl/maps/8iyCsvdxatjGDEx9A',
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    facebookId: '100000954874709'
                },
                {
                  trainer: 'Bodzsár Enikő /Gaivota/',
                  city: 'Budapest',
                  place: 'MOZGÁSCENTRUM',
                  address: 'Lövölde tér 7',
                  times: [ 'Kedd: 18:30-20:00', 'Csütörtök: 18:30-20.00'],
                  mapLink: 'https://www.google.com/maps/place/Mozg%C3%A1scentrum/@47.5069607,19.0697023,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dda67e6ed66b:0xdf3a66c189513c0e!8m2!3d47.5070056!4d19.0719593',
                  facebookLink: 'https://www.facebook.com/enikogaivota.bodzsar',
                  facebookId: '100001667319907',
                  phone: '+36706703696'
              },
                {
                    trainer: 'Contramestre Tocha',
                    city: 'Budapest',
                    place: 'VÖRÖSMARTY MIHÁLY GIMNÁZIUM (Nyáron szünetel)',
                    address: 'Horánszky utca 11.',
                    times: [ 'Hétfő: 18:30-20:00', 'Szerda: 18:30-20:00'],
                    mapLink: 'https://www.google.com/maps/place/V%C3%B6r%C3%B6smarty+Mih%C3%A1ly+High+School/@47.4906453,19.06317,16z/data=!4m5!3m4!1s0x4741dc5c10045203:0x2df4549a94f59955!8m2!3d47.4918825!4d19.0674842',
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    facebookId: '100000954874709'
                },
                // {
                //     trainer: 'Contramestre Tocha',
                //     city: 'Budapest',
                //     place: 'RAJKÓ-TALENTUM TÁNC ÉS ZENEMŰVÉSZETI ISKOLA',
                //     type: '(Kezdő edzés)',
                //     address: 'Rottenbiller u. 16-22.',
                //     times: [ 'Hétfő: 18:00-19:00', 'Szerda: 18:00-19:00'],
                //     mapLink: 'https://www.google.com/maps/place/Rajk%C3%B3-Talentum+T%C3%A1nc-+%C3%A9s+Zenem%C5%B1v%C3%A9szeti+Iskola/@47.5008359,19.0674089,14.84z/data=!4m5!3m4!1s0x0:0xa6d1b129ebfa5d0e!8m2!3d47.5020732!4d19.0771871',
                //     facebookLink: 'https://www.facebook.com/tocha.cecab',
                //     facebookId: '100000954874709'
                // },
                // {
                //     trainer: 'Contramestre Tocha',
                //     city: 'Budapest',
                //     place: 'RAJKÓ-TALENTUM TÁNC ÉS ZENEMŰVÉSZETI ISKOLA',
                //     address: 'Rottenbiller u. 16-22.',
                //     times: [ 'Hétfő: 19:00-20:30', 'Szerda: 19:00-20.30'],
                //     mapLink: 'https://www.google.com/maps/place/Rajk%C3%B3-Talentum+T%C3%A1nc-+%C3%A9s+Zenem%C5%B1v%C3%A9szeti+Iskola/@47.5008359,19.0674089,14.84z/data=!4m5!3m4!1s0x0:0xa6d1b129ebfa5d0e!8m2!3d47.5020732!4d19.0771871',
                //     facebookLink: 'https://www.facebook.com/tocha.cecab',
                //     facebookId: '100000954874709'
                // },
                // {
                //     trainer: 'Contramestre Tocha',
                //     city: 'Budapest',
                //     place: 'BME SPORTKÖZPONT',
                //     address: 'Bertalan Lajos utca 4-6.',
                //     times: [ 'Szerda: 17:00-18:00', 'Péntek: 16:30-17:30'],
                //     mapLink: 'https://www.google.com/maps/place/BME+Sport+Center/@47.4795111,19.0533978,15.35z/data=!4m5!3m4!1s0x4741dc530fe8a959:0x74e47bc7a728a3ff!8m2!3d47.4796628!4d19.0575069',
                //     facebookLink: 'https://www.facebook.com/tocha.cecab',
                //     facebookId: '100000954874709'
                // },
                {
                    trainer: 'Contramestre Tocha',
                    city: 'Budapest',
                    place: 'CSÍK FERENC ÁLTALÁNOS ISKOLA ÉS GIMNÁZIUM',
                    type: '(Gyerek edzés)',
                    address: 'Medve utca 5-7.',
                    times: [ 'Kedd: 17:00-18:00', 'Csütörtök: 17:00-18:00'],
                    mapLink: 'https://www.google.hu/maps/place/Csik+Ferenc+%C3%81ltal%C3%A1nos+Iskola+%C3%A9s+Gimn%C3%A1zium/@47.508314,19.0353854,19z/data=!4m13!1m7!3m6!1s0x4741dc1b8a0a946f:0xfa739fdd81afe4e2!2sBudapest,+Medve+u.+1,+1027!3b1!8m2!3d47.5079118!4d19.0358038!3m4!1s0x4741dc1b8a4a5b75:0xdac38a057a5e5a68!8m2!3d47.508614!4d19.03577',
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    facebookId: '100000954874709'
                },
                // {
                //     trainer: 'Contramestre Tocha',
                //     city: 'Budapest',
                //     place: 'RAJKÓ-TALENTUM TÁNC ÉS ZENEMŰVÉSZETI ISKOLA',
                //     type: '(Zene óra)',
                //     address: 'Rottenbiller u. 16-22.',
                //     times: [ 'Péntek: 19:00-20:00'],
                //     mapLink: 'https://www.google.com/maps/place/Rajk%C3%B3-Talentum+T%C3%A1nc-+%C3%A9s+Zenem%C5%B1v%C3%A9szeti+Iskola/@47.5008359,19.0674089,14.84z/data=!4m5!3m4!1s0x0:0xa6d1b129ebfa5d0e!8m2!3d47.5020732!4d19.0771871',
                //     facebookLink: 'https://www.facebook.com/tocha.cecab',
                //     facebookId: '100000954874709'
                // },
                {
                    trainer: 'Contramestre Tocha',
                    city: 'Budapest',
                    place: 'LÓNYAY UTCAI REFORMÁTUS GIMNÁZIUM ÉS KOLLÉGIUM',
                    address: 'Kinizsi utca 1-7.',
                    times: [ 'Péntek: 16:00-17:30'],
                    mapLink: 'https://goo.gl/maps/CKXyc1iFAybv8ts38',
                    facebookLink: 'https://www.facebook.com/tocha.cecab',
                    facebookId: '100000954874709'
                },
                {
                    trainer: 'Kriszt Sándor /Apressado/',
                    city: 'Kecskemét',
                    place: 'ZRÍNYI ILONA ÁLTALÁNOS ISKOLA',
                    address: 'Katona József tér 14',
                    times: [ 'Kedd: 18:00-19:30', 'Csütörtök: 18:00-19:30'],
                    mapLink: 'https://www.google.hu/maps?q=Kecskem%C3%A9t,+Katona+J%C3%B3zsef+t%C3%A9r+14.&hl=hu&ie=UTF8&ll=46.905238,19.694216&spn=0.002104,0.006539&sll=46.904908,19.695413&sspn=0.002104,0.006539&hnear=6000+Kecskem%C3%A9t,+Katona+J%C3%B3zsef+t%C3%A9r+14&t=m&z=18',
                    // facebookLink: 'https://www.facebook.com/kriszt.sandor',
                    // facebookId: '100000745997402',
                    facebookLink: 'https://www.facebook.com/capoeira.kecskemet',
                    facebookId: '474188249324250',
                    websiteLink : 'http://capoeirakecskemet.hu/',
                    instagram : 'capoeira.kecskemet',
                    phone: '+36305412899'
                },
                {
                    trainer: 'Kriszt Sándor /Apressado/',
                    city: 'Kecskemét',
                    place: 'ZRÍNYI ILONA ÁLTALÁNOS ISKOLA',
                    type: '(Gyerek edzés)',
                    address: 'Katona József tér 14',
                    times: [ 'Kedd: 17:00-18:00', 'Csütörtök: 17:00-18:00'],
                    mapLink: 'https://www.google.hu/maps?q=Kecskem%C3%A9t,+Katona+J%C3%B3zsef+t%C3%A9r+14.&hl=hu&ie=UTF8&ll=46.905238,19.694216&spn=0.002104,0.006539&sll=46.904908,19.695413&sspn=0.002104,0.006539&hnear=6000+Kecskem%C3%A9t,+Katona+J%C3%B3zsef+t%C3%A9r+14&t=m&z=18',
                    // facebookLink: 'https://www.facebook.com/kriszt.sandor',
                    // facebookId: '100000745997402',
                    facebookLink: 'https://www.facebook.com/capoeira.kecskemet',
                    facebookId: '474188249324250',
                    websiteLink : 'http://capoeirakecskemet.hu/',
                    instagram : 'capoeira.kecskemet',
                    phone: '+36305412899'
                },
                {
                    trainer: 'Kriszt Sándor /Apressado/',
                    city: 'Kecskemét',
                    place: 'HAKKODA DOJO',
                    address: 'Burga utca 1.',
                    times: [ 'Vasárnap 17:00-18:30'],
                    mapLink: 'https://www.google.com/maps/place/Kecskem%C3%A9t,+Burga+u.+1,+6000/@46.9008225,19.6820888,15.23z/data=!4m5!3m4!1s0x4743da6cb54ca53d:0x7356ff80c2b12d43!8m2!3d46.9015536!4d19.6866855',
                    // facebookLink: 'https://www.facebook.com/kriszt.sandor',
                    // facebookId: '100000745997402',
                    facebookLink: 'https://www.facebook.com/capoeira.kecskemet',
                    facebookId: '474188249324250',
                    websiteLink : 'http://capoeirakecskemet.hu/',
                    instagram : 'capoeira.kecskemet',
                    phone: '+36305412899'
                },
                // {
                //     trainer: 'Estágiário Bamboo',
                //     city: 'Jászberény',
                //     place: 'ANGYALKERT ÓVODA',
                //     address: 'Jásztelki út 22.',
                //     times: [ 'Hétfő: 16:15-17:15', 'Szerda: 16:30-17:30', 'Péntek: 18:00-19:30'],
                //     mapLink: 'https://www.google.com/maps/place/J%C3%A1szber%C3%A9ny,+J%C3%A1sztelki+%C3%BAt+22,+5100/@47.4998411,19.9202906,15.17z/data=!4m5!3m4!1s0x474106e3635a00c1:0x85ba826fc1facdcd!8m2!3d47.4996915!4d19.9257726',
                //     facebookLink: 'https://www.facebook.com/szappanos.balint',
                //     facebookId: '100001289872531'
                // }
            ]
        };
    },
    created() {

    },
    methods: {
        filterPracticesByCity: function (city) {
            return this.practices.filter(function(practice){
                return practice.city == city
            })
        }
    }
};
