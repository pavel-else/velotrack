<template>
    <div class="print__page">
        <h2 class="print__title">Договор  проката №  {{ order.id_rent }}</h2>

        <p class="print__p print__p--date">
            <span>г. Армавир</span>
            <span class="print__date">{{ date }}</span>
        </p>

        <p class="print__p">
            Индивидуальный предприниматель Колтыков Анатолий Владимирович именуемый в дальнейшем <b>«Арендодатель»</b>, действующий на основании свидетельства о государственной регистрации физического лица в качестве индивидуального предпринимателя серия 23 №008878961, с одной стороны и <span class="print__renter">{{ renter }}</span>, именуемый в дальнейшем <b>«Арендатор»</b>, с другой стороны, в соответствии с требованиями статей 626-631 ГК РФ, заключили настоящий договор о нижеследующем:
        </p>

        <h3 class="print__caption">1. Предмет Договора</h3>
        <p class="print__p">
            1.1. Арендодатель сдает в прокат (во временное пользование за плату) имущество: {{ products_name_and_cost }} в полной исправности, оцениваемое в сумме {{ products_cost }} рублей.<br>
            1.2. Дата и время передачи имущества в аренду: {{ order.start_time }}<br>
            1.3. Залоговый документ: {{ deposit }}<br>
            1.4. Арендатор принимает в прокат Имущество и оплачивает его в соответствии с условиями настоящего Договора. Сдача Имущества в прокат не влечет за собой передачи права собственности на него.<br>
        </p>                

        <h3 class="print__caption">2. Права и обязанности  арендодателя</h3>
        <p class="print__p">
            2.1. Арендодатель принимает на себя обязательства:<br>
            2.1.1. Передать в прокат Арендатору Имущество надлежащего качества, в техническом состоянии, позволяющем беспрепятственно использовать его в соответствии с целевым назначением в течении всего периода действия настоящего Договора. <br>
            2.1.2. В присутствии Арендатора проверить работоспособность Имущества.<br> 
            2.1.3. Ознакомить Арендатора с правилами использования и содержания Имущества и предоставить Арендатору инструкцию по надлежащему использованию Имущества в соответствии с целевым назначением, а также по надлежащему содержанию и обслуживанию Имущества.<br> 
            2.1.4.  Не передавать личные и паспортные данные Арендатора третьим лицам.<br>
            2.2. В случае выявления в процессе приемки Арендатором недостатков качества Имущества, возникших не по вине Арендатора, полностью или частично препятствующих его использованию в соответствии с целевым назначением,  безвозмездно устранить выявленные недостатки или заменить его на Имущество, соответствующее требованиям пункта 2.1. настоящего Договора<br>
            2.3. Арендодатель не несет ответственности за вред, который может быть нанесен здоровью людей, а также за материальный ущерб, который может понести Арендатор в ходе эксплуатации Имущества
        </p>

        <h3 class="print__caption">3. Права И Обязанности  Арендатора</h3>
        <p class="print__p">
            Арендатор принимает на себя обязательства:<br>
            3.1. Оплатить Арендодателю стоимость проката Имущества в соответствии с условиями настоящего Договора.<br> 
            3.2. Использовать Имущество в соответствии с целевым назначением, осуществлять надлежащий уход, обслуживание и содержание Имущества в соответствии с полученными от Арендодателя инструкциями в течении всего срока проката.<br>
            3.3. Возвратить Имущество Арендодателю в установленный настоящим Договором срок, без неисправностей, повреждений внешнего вида и в чистом состоянии, пригодном для использования в соответствии с целевым назначением.<br>
            3.4. Немедленно уведомлять Арендодателя обо всех случаях причинения какого-либо ущерба или разрушения Имущества с описанием характера повреждений и с указанием причин их возникновения.<br>
            3.5. В случае возникновения повреждений внешнего вида и неисправности Имущества по вине Арендатора, возместить Арендодателю расходы по ремонту или замене Имущества.<br> 
            3.6.  При желании продлить срок аренды Имущества, Арендатор обязан за сутки до истечения этого срока уведомить Арендодателя о своем намерении по телефону указанном в п.6. настоящего Договора. В противном случае, Имущество считается возвращенным не вовремя.<br>
            3.7. В случае окончании срока аренды, и не возврата Имущества по вине Арендатора, Арендатору назначается плата за следующую неделю аренды Имущества согласно тарифу проката на данное Имущество и пеню в размере 20% от общей суммы проката
        </p>

        <h3 class="print__caption">4. Заключительные  Условия</h3>
        <p class="print__p">
            4.1. Настоящий Договор составлен в двух экземплярах, один из которых остается у арендодателя, второй выдается арендатору.<br>
            4.2. Настоящий Договор вступает в законную силу с момента подписания и действует до 31 декабря текущего года. <br>
            4.3. Отношения между Арендодателем и Арендатором, не предусмотренные положениями настоящего Договора, регламентируются действующим гражданским законодательством Российской Федерации.<br>
        </p>
        
        <h3 class="print__caption">5. Согласие На Обработку Персональных Данных</h3>
        <p class="print__p">
            5.1. Согласно Федерального закона № 152 ( ред. от 29.07.2017) "О персональных данных" подписывая настоящий Договор Арендатор дает согласие на обработку и хранение персональных данных в целях обеспечения соблюдения законов и иных нормативных правовых актов.<br>
            5.2 Согласно п. 5 ст. 6 Федерального закона № 152 ( ред. от 29.07.2017) "О персональных данных" обработка и хранение персональных данных необходима для исполнения настоящего Договора<br>

        </p>

        <h3 class="print__caption">6. Реквизиты  и  Подписи  Сторон</h3>
        <p class="print__p">
            <table class="print__p--info">
                <tr>
                    <td>
                        Арендодатель: ИП Колтыков Анатолий Владимирович<br>
                        ИНН: 230214171784<br>
                        ОГРНИП: 314237201600076<br>
                        Адрес: г.Армавир, ул.Луначарского, д.222<br>
                        Телефон: +7 (918) 941-34-34, +7 (903) 410-44-94
                    </td>
                    <td>
                        Арендатор: {{ renter }}<br>
                        Паспорт: {{ passport }}<br>
                        Место жительства: {{ address }}<br>
                        Телефон: {{ phone }}
                    </td>
                </tr>                        
                <tr>
                    <td>
                        АРЕНДОДАТЕЛЬ<br>
                        _______________/ ИП Колтыков А.В./<br>
                        {{ date }}    
                    </td>
                    <td>
                        АРЕНДАТОР<br>
                        ___________ /{{ renter_small}} /<br>
                        {{ date }}                                
                    </td>
                </tr>
            </table>
        </p>
    </div>
</template>

<script>
    import copy from '@/functions/copy';

    export default {
        created() {
            const order = this.$store.getters.orderToPrint;
            this.order = order ? copy(order) : {};
        },
        mounted() {
            this.print()
        },
        data() {
            return {
                order: null
            }
        },
        methods: {
            close() {
                this.$store.dispatch('unsetOrderToPrint');
            },

            print() {
                window.print()
                this.close()
            },
        },

        computed: {
            date() {
                const time = this.order.start_time

                const year = time.slice(0,4)
                const month = time.slice(5,7)
                const day = time.slice(8,10)

                return `${day}.${month}.${year} г.`
            },

            renter() {
                if (!this.customer) {
                    return '_______________________';
                }

                const f = this.customer.fname ? this.customer.fname : '';
                const s = this.customer.sname ? this.customer.sname : '';
                const t = this.customer.tname ? this.customer.tname : '';

                return `${ f } ${ s } ${ t }`.trim();
            },
            passport() {
                return this.customer ? this.customer.passport : ''
            },

            address() {
                return this.customer ? this.customer.address : ''
            },
            phone() {
                return this.customer ? this.customer.phone : ''
            },


            renter_small() {
                if (!this.customer) {
                    return '_______________________'
                }

                const fname = this.customer.fname
                const sname = this.customer.sname ? this.customer.sname[0] + '.' : ''
                const tname = this.customer.tname ? this.customer.tname[0] + '.' : ''

                return `${fname} ${sname} ${tname}`
            },

            products() {
                const subOrders = this.$store.getters.activeSubOrders.filter(i => i.order_id == this.order.id_rent);
                const products = subOrders.map(i => this.$store.getters.products.find(j => j.id_rent == i.product_id));
                
                return products;
            },
            products_name_and_cost() {
                return this.products.reduce((acc, item) => {
                    acc += `${item.name} (${item.cost} руб.), `

                    return acc
                }, '')
            },
            products_cost() {
                return this.products.reduce((acc, item) => {
                    acc += +item.cost

                    return acc
                }, 0)
            },
            customer() {
                return this.$store.getters.customers.find(i => i.id_rent == this.order.customer_id)
            },
            deposit () {                
                const deposit = this.$store.getters.deposits.find(i => i.id_rent == this.order.deposit)
                return deposit ? deposit.name : '______________'
            }
        }
    }
</script>

<style scoped>
    @page {
        size:  auto;   /* auto is the initial value */
        margin: 0mm;  /* this affects the margin in the printer settings */
    }

    p {
        margin: 0;
    }

    .print__page {
        width: 210mm;
        height: 297mm;
        box-sizing: border-box;
        padding: 10mm 10mm 10mm 15mm;

        line-height: 1.2;
        font-family: TimesNewRoman;
        font-size: 12px;

        background-color: #fff;
        color: #000;
    } 

    .print__title {
        margin: 10px 0 0 0;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px
    }
    .print__caption {
        margin: 15px 0 0 0;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px
    }
    .print__p {
        margin: 5px 0 0 0;
    }
    .print__p--date {
        display: flex;
        justify-content: space-between;
    }

    .print__p--info {
        width: 100%
    }
    .print__p--info td {
        width: 50%;
    }
</style>
