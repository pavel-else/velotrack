export default {
    // В модуле остаются активные объекты
    // Их нужно перенести, после этого удалить модуль

    state: {
        cmds: [
            'getProducts',
            'getOrders', 
            'getClients', 
            'getHistory', 
            'getTariffs', 
            'getCategories', 
            'getOptions', 
            'getLogs',
            'getHeaders'
        ],
        
        // Необходимо для работы некоторых компонентов, например Картинок товара
        app_id: null,

        // options передается на сервер
        options: {

            rent_min_time:     0, //min
            rent_round_bill:   0,

            lastOrderID:       null,
            lastOrderTime:     null,
            lastOrderInterval: 180000, //ms 

            registration_time: 0,
        },
        
        now: Date.now(),



        // activeBranch: 'dev',
        activeBranch: 'master',
        branch: {
            master: {
                url: 'https://rentix.biz/api/request.php',
                path: 'https://rentix.biz/' // Параметр нужен для запросов user_uploads
            },
            dev: {
                url: 'https://test.rentix.biz/api/request.php',
                path: 'localhost:8080/'
            }
        },
    
        depositList: [
            {
                id_rent: 1,
                name: 'Паспорт'
            },
            {
                id_rent: 2,
                name: 'Водительское'
            },
            {
                id_rent: 3,
                name: 'Военный билет'
            },
            {
                id_rent: 4,
                name: 'Загран. паспорт'
            },
            {
                id_rent: 5,
                name: 'Мед. полис'
            },
            {
                id_rent: 6,
                name: 'Снилс'
            },
            {
                id_rent: 7,
                name: 'Студентческий'
            },
            {
                id_rent: 8,
                name: 'Водительское'
            },
            {
                id_rent: 9,
                name: 'Другое'
            }
        ],

        promotions: [
            {
                id: 1,
                name: '30%',
                discount: 30
            },
            {
                id: 2,
                name: 'Студент - 10%',
                discount: 10
            }
        ],
    },

    mutations: {
        setOptions(state, options) {
            if (!options) {
                return
            }
            
            options.map(opt => {
                state.options[opt.name] = opt.value
            })
        },
        setOption(state, {option, value}) {
            if (!option) {
                return
            }

            state.options[option] = value

            console.log('setOption', option, state.options[option])
        },
        now(state, date) {
            state.now = date
        },
        setAppId(state, appId) {
            state.app_id = appId;
        }
    },

    actions: {
        startTimer({commit}) {
            setInterval(() => {commit('now', Date.now())}, 1000);
        },
        setAppId(commit, appId) {
            commit('setAppId', appId);
        }
    },

    getters: {
        now(state) {
            return state.now
        },
        options(state) {
            return state.options
        },

        //depricated
        depositList(state) {
            return state.depositList
        },
        deposits(state) {
            return state.depositList
        },
        promotions(state) {
            return state.promotions
        },

        activeBranch(state) {
            return state.activeBranch
        },

        activePath(state) {
            return state.branch[state.activeBranch].path
        },

        url(state) {
            return state.branch[state.activeBranch].url
        },

        appID(state) {
            return state.app_id;
        },
    }
}