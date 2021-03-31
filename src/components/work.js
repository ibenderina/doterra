export default () => {
  return (
      <section className="main">
        <div className="wrapper">
          <h1 className="main__header">Как стать партнером Дотерра</h1>
          <h2 className="main__header-second">Какие преимущества вы получаете?</h2>
          <p className="main__text">
            Заключив договор с компанией dōTERRA, вы сможете получить ряд преимуществ:
          </p>
          <ul className="benefits">
            <li className="benefits__item">
              Покупать продукцию со скидкой 25% от розничной цены.
            </li>
            <li className="benefits__item">
              Получать бонусы в размере 10-30% от покупки, которые можно обменять на товар.
            </li>
            <li className="benefits__item">
              Получать продукт месяца в подарок при условии покупки от 125PV.
            </li>
            <li className="benefits__item">
              Иметь возможность развивать полноценный бизнес, строить сеть партнеров и увеличивать свой доход.
            </li>
          </ul>
          <p className="main__text">
            При регистрации вам нужно будет выбрать - регистрироваться в качестве Привилегированного Покупателя или
            Велнес Консультанта. Если вы еще сомневатесь, хотите ли развивать свой бизнес или просто покупать продукцию
            для себя, предлагаю для начала выбрать первый вариант, с ним вы сохраните все преимущества, описанные выше.
            В течение 14 дней вы сможете протестировать аптечку, понять, все ли вам нравится и хотите ли вы вести бизнес,
            и я смогу перевести вас в статус Консультанта, который может растить свою команду и увеличивать доход.
          </p>
          <a className="main__auth-link" href="https://www.mydoterra.com/Application/index.cfm?EnrollerID=10757736&Theme=DefaultTheme&ReturnURL=www.mydoterra.com/irinalu&LNG=ru&iact=1">
            Зарегистрироваться
          </a>
          <span className="main__questions">Остались вопросы? Напишите мне в
            <a className="main__questions-link" href="tg://resolve?domain=ibenderina"> Telegram</a>
          </span>
        </div>
      </section>
  );
};
