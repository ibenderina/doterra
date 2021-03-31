export default () => {
  return (
      <section className="main auth">
        <div className="wrapper">

          <div className="auth__container auth--head">
            <h1 className="auth__header">ОТ ИСПОЛЬЗОВАНИЯ ЭФИРНЫХ МАСЕЛ doTERRA ТЕРАПЕВТИЧЕСКОГО КЛАССА ВАС ОТДЕЛЯЮТ
              ВСЕГО НЕСКОЛЬКО ПРОСТЫХ ШАГОВ!
            </h1>
            <h2 className="auth__header-second">
              Давайте вместе с вами пройдём процесс регистрации:
              <a className="auth__link btn" href="https://www.mydoterra.com/Application/index.cfm?EnrollerID=10757736&Theme=DefaultTheme&ReturnURL=www.mydoterra.com/irinalu&LNG=ru&iact=1">
                Перейти на сайт для регистрации
              </a>
              и параллельно следуйте рекомендациям ниже.
            </h2>
          </div>

          <div className="auth__container auth--one">
            <h2 className="auth__step-header">ШАГ 1 — СКЛАД</h2>
            <div className="info">
              <div className="info__img-col">
                <img className="info__img" src="/img/step1.png"/>
              </div>
              <div className="info__text-col">
                <p className="info__text-desc">Выберите, с какого склада вы хотите осуществить свой заказ:</p>
                <ul className="info__text-list">
                  <li className="info__text-item">
                    С московского склада заказ доставят за 2-4 рабочих дня, но есть нюанс — многие продукты
                    на российском рынке ещё в процессе сертификации, поэтому ассортимент ограничен.
                  </li>
                  <li className="info__text-item">
                    На американском складе ассортимент полный, есть даже лимитированные товары, но нюанс
                    в том, что посылка будет идти через таможню около трёх недель.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="auth__container auth--two">
            <h2 className="auth__step-header">ШАГ 2 — СТАТУС</h2>
            <div className="info">
              <div className="info__img-col">
                <img className="info__img" src="/img/step2.png"/>
              </div>
              <div className="info__text-col">
                <p className="info__text-desc">Выберите ваш статус:</p>
                <ul className="info__text-list">
                  <li className="info__text-item">
                    Привилегированный покупатель получает скидку 25%, имеет возможность подключится к программе
                    лояльности и получать подарки месяца.
                  </li>
                  <li className="info__text-item">
                    Велнес консультант, как и клиент, получает скидку 25%, имеет возможность подключится к программе
                    лояльности и получать подарок месяца. А также, он получает свою реферальную ссылку, имеет
                    возможность приглашать других клиентов и получать за это комиссионные вознаграждения. Если вы
                    пока что не решили, хотите ли быть консультантом, зарегистрируйтесь как покупатель. В будущем
                    вы сможете перейти в статус консультанта, связавшись со мной, если захотите.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="auth__container auth--three">
            <h2 className="auth__step-header">ШАГ 3 — АНКЕТА</h2>
            <div className="info">
              <div className="info__img-col">
                <img className="info__img" src="/img/step3.png"/>
                <img className="info__img" src="/img/step3-2.png"/>
              </div>
              <div className="info__text-col">
                <p className="info__text-desc">Заполните личные данные:</p>
                <ul className="info__text-list">
                  <li className="info__text-item">
                    Имя и Фамилию кириллицей.
                  </li>
                  <li className="info__text-item">
                    Имя и Фамилию латиницей.
                  </li>
                  <li className="info__text-item">
                    Имя со-заявителя нужно в том случае, если вы с супругом заполняете один аккаунт на двоих
                    (по правилам doTERRA муж и жена не имеют права регистрировать два разных аккаунта).
                    Оставляйте поля пустыми, если вы регистрируете аккаунт только на себя.
                  </li>
                  <li className="info__text-item">
                    Укажите адрес по прописке и адрес доставки по-русски.
                  </li>
                  <li className="info__text-item">
                    Заполните номер телефона в формате 79161234567.
                  </li>
                  <li className="info__text-item">
                    Укажите ваш действующий емэйл, на него будет приходить информация о заказах.
                  </li>
                  <li className="info__text-item">
                    Если вы выбрали доставку из США, укажите номер паспорта, дату выдачи, кем выдан и номер
                    ИНН — эти данные нужны для прохождения вашей посылки через таможню.
                  </li>
                  <li className="info__text-item">
                    Укажите дату вашего рождения.
                  </li>
                  <li className="info__text-item">
                    ID рекрутёра и спонсора должно высветиться автоматически, если вы прошли по ссылке выше.
                    Если нет, то введите ID 10757736 и нажмите «Проверить» — должно высветиться имя Irina Lukina.
                  </li>
                  <li className="info__text-item">
                    Придумайте и запомните пароль.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="auth__container auth--four">
            <h2 className="auth__step-header">ШАГ 4 — ЗАКАЗ</h2>
            <div className="info">
              <div className="info__img-col">
                <img className="info__img" src="/img/step4.png"/>
                <img className="info__img" src="/img/step4-2.png"/>
              </div>
              <div className="info__text-col">
                <p className="info__text-desc">Это скриншот регистрационных наборов московского склада. У вас есть возможность выбрать:</p>
                <ul className="info__text-list">
                  <li className="info__text-item">
                    Если вы не знаете, что из масел выбрать на первом этапе — выбирайте один из двух заготовленных
                    компанией наборов, которые одинаковы по составу эфирных масел и смесей, но разные по
                    объёму и подаркам:
                    <ul className="info__text-item--inner-list inner-list">
                      <li className="inner-list__item">
                        В «Семейном наборе» масла по 5 мл и в подарок вы получаете смесь «Slim&Sassy»
                        для регулирования аппетита.
                      </li>
                      <li className="inner-list__item">
                        В «Эфирном доме» те же масла по 15 мл и в подарок вы получаете Диффузор «Лепесток».
                        Вы платите в два раза больше, а получаете в три раза больше — я рекомендую этот набор!
                      </li>
                    </ul>
                    <img className="info__text-img" src="/img/step4-3.png"/>
                  </li>
                  <li className="info__text-item">
                    Второй вариант — добавить в корзину «Регистрационный взнос», другими словами годовое членство
                    в компании, которое даёт 25% скидку и добавить в корзину те товары, которые нужны вам.
                    Пример на скриншоте — в корзине Нероли и Имбирь.
                  </li>
                </ul>
                <a className="auth__link btn" href="https://media.doterra.com/ru-otg/ru/forms/otg-pricelist.pdf">
                  Прайс-лист московского склада
                </a>
              </div>
            </div>
          </div>

          <div className="auth__container auth--five">
            <h2 className="auth__step-header">ШАГ 5 — ОПЛАТА</h2>
            <div className="info">
              <div className="info__img-col">
                <img className="info__img" src="/img/step5.png"/>
              </div>
              <div className="info__text-col">
                <p className="info__text-desc">Оплата возможна только банковской картой. Для начала Яндекс касса спишет 1 проверочный рубль и вам
                  на телефон придёт пароль. Затем будет списана вся сумма (уже без проверочной смс).
                </p>
                <p className="info__text-desc">Важно:</p>
                <ul className="info__text-list">
                  <li className="info__text-item">
                    Процесс регистрации не будет завершён пока вы не произведёте оплату.
                  </li>
                  <li className="info__text-item">
                    Если вы закроете страницу и решите вернуться к оплате на следующий день, вам нужно будет
                    заново заполнять анкету своих личных данных.
                  </li>
                  <li className="info__text-item">
                    Заказ должен быть оплачен в течение 15 минут.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="auth__container auth--six">
            <h2 className="auth__step-header">ШАГ 6 — ДОСТАВКА</h2>
            <div className="info">
              <div className="info__img-col">
                <img className="info__img" src="/img/step6.png"/>
              </div>
              <div className="info__text-col">
                <p className="info__text-desc">На следующей странице вы увидите подтверждение об оплате и оформлении заказа.</p>
                <ul className="info__text-list">
                  <li className="info__text-item">
                    Если вы выбрали доставку службой СДЕК, то курьер вам позвонит на номер телефона,
                    указанный при регистрации, непосредственно перед доставкой.
                  </li>
                  <li className="info__text-item">
                    Если вы выбрали «Самовывоз», то ваш заказ будет ждать вас в офисе
                    компании сразу же после оплаты заказа.
                  </li>
                </ul>
                <p className="info__text-desc">Москва, метро Динамо, Ленинградский проспект 31А, строение 1, « ТЦ Монарх», 1 этаж.</p>
                <a className="auth__link btn" href="https://www.doterra.com/RU/ru_RU/contact-us">
                  Контакты офиса doTERRA
                </a>
                <p className="info__text-desc">Также, на странице подтверждения, что вас заказ оформлен, вы увидите вопрос «Хотите
                  получить БЕСПЛАТНЫЙ продукт месяца, оформив ежемесячный заказ?».
                </p>
                <p className="info__text-desc">Вы можете нажать «Нет, спасибо». Мы с вами сделаем это позже, например, в следующем месяце.
                  Я расскажу вам все преимущества программы лояльности и вы примите для себя решение «Да» или «Нет».
                </p>
              </div>
            </div>
          </div>

          <div className="auth__container auth--bottom">
            <p className="info__text-desc">Наслаждайтесь вашими новыми эфирными маслами! А если у вас возникнут
              вопросы, обращайтесь:
            </p>
            <ul className="info__my-links-list">
              <li className="info__my-links-item info__my-links-item--telegram btn">
                <a className="info__my-link" href="tg://resolve?domain=ibenderina">в Telegram</a>
              </li>
              <li className="info__my-links-item info__my-links-item-whatsapp btn">
                <a className="info__my-link" href="https://wa.me/79258478610">в WhatsApp</a>
              </li>
            </ul>
          </div>

        </div>
      </section>
  );
};
