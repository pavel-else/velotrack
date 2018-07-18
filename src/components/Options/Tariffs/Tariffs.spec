Тарифы хранятся в Сторе в виде массива, где каждый элемент - объект (тариф).
Тарифы могут быть почасовые, суточные, фиксированные.
Если тариф суточный или фиксированный, то стоимость тарифа пишется в max

tariffs = [
    {
        id_rent: 1,     // id по таблице тарифов в БД с привязкой к компании
        name, // название
        type, //тип тарифа. h - почасовой, d - суточный (циклический), f - фиксированный(единоразовый)
        h: null || [120, 80, 80, 30], // расчасовка. Зависит от типа, может быть пустым или массивом чисел
        min: 0,
        max: 600,
        note: "Примечание" 
    },
    {}
]

Описание ui.

Модуль отображает таблицу тарифов, основные характеристики тарифов.
При клике по тарифу открывается модальное окно, содержащее подробную информацию о тарифе.
В модальном окне можно редактировать информацию.
В модальном окне есть кнопки Сохранить, Отмена и Удалить (тариф)

В списке тарифов есть кнопка добавления нового тарифа.
При клике по ней открывается модальное окно с полями для заполнения и кнопками сохранить и отмена


Логика

1. Получаем массив тарифов из Стора
2. В шаблоне выводим в цикле
3. По клику по тарифу передаем выбранный тариф в модалку
4. После изменений в модалке жментся батон Сохранить
5. Измененный тариф отправляется на сервер
6. Функции Добавления, Изменения, Удаления  реализуются в модалке
