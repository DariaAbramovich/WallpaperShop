import React, { useState } from 'react';
import './chat.scss';

const ChatBot = ({language}) => {
  const [messages, setMessages] = useState([
    { text: "Здравствуйте! Как я могу вам помочь?", sender: 'bot' }
  ]);

  const responseOptions = [
    "Что вы предлагаете?",
    "Где вы находитесь?",
    "Как работает ваш сайт?",
    "Какие у вас есть обои?",
    "Можно ли вернуть товар?"
  ];

  const [input, setInput] = useState('');
  const [showOptions, setShowOptions] = useState(true);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input.trim(), sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      handleBotResponse(newMessage);
      setInput('');
    }
  };

  const handleUserResponse = (response) => {
    const newMessage = { text: response, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    handleBotResponse(newMessage);
  };

  const handleBotResponse = (message) => {
    let response;
    const text = message.text.toLowerCase();

    if (text.includes('что вы предлагаете?')) {
      response = 'Мы предлагаем широкий ассортимент обоев различных типов и цветов.';
    } else if (text.includes('где вы находитесь?')) {
      response = 'Наш офис находится в Минске по нескольким адресам: ул.Перавая, ул.Вторая, ул.Третья, также мы осуществляем доставку по всей Беларуси.';
    } else if (text.includes('как работает ваш сайт?')) {
      response = 'На нашем сайте вы можете выбрать обои по категориям, добавить их в корзину и оформить заказ, также вы можете самостоятельно создать обои, если перейдете в Конструктор.';
    } else if (text.includes('какие у вас есть обои?')) {
      response = 'У нас есть виниловые, флизелиновые и бумажные обои. Вы можете выбрать из множества дизайнов или создать свой собственный.';
    } else if (text.includes('политика возврата') || text.includes('вернуть товар') || text.includes('возврат товара')) {
      response = 'Вы можете вернуть товар в течение 10 дней с момента покупки, обратившись по горячему номеру(+37544ХХХХХХХ, +37529ХХХХХХХ)';
    } else if (text.includes('информация о доставке') || text.includes('варианты доставки')) {
      response = 'Мы предлагаем стандартные и экспресс-опции доставки по всей беларуси. Время доставки зависит от вашего местоположения. Подробности можно узнать, обратившись по горячему номеру(+37544ХХХХХХХ, +37529ХХХХХХХ).';
    } else if (text.includes('способы оплаты') || text.includes('варианты оплаты') || text.includes('оплата')) {
      response = 'Мы принимаем различные способы оплаты, включая кредитные карты, PayPal и банковские переводы.';
    } else if (text.includes('советы по клейке обоев') || text.includes('как клеить обои')) {
      response = 'Для получения советов по установке обоев посетите нашу страницу руководства по установке. Мы предоставляем пошаговые инструкции.';
    } else {
      response = 'Извините, я не понимаю ваш запрос. Пожалуйста, уточните ваш вопрос.';
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
    }, 1000);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="chat-bot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      {showOptions && (
        <div className="response-options">
          {responseOptions.map((option, index) => (
            <button key={index} onClick={() => handleUserResponse(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
      <div className="options-toggle">
        <button onClick={toggleOptions}>{showOptions ? 'Свернуть' : 'Развернуть'}</button>
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;

// import React, { useState } from 'react';
// import './chat.scss';

// const ChatBot = ({ language }) => {
//   const [messages, setMessages] = useState([
//     { text: language === 'en' ? "Hello! How can I help you?" : "Здравствуйте! Как я могу вам помочь?", sender: 'bot' }
//   ]);

//   const responseOptions = [
//     language === 'en' ? "What do you offer?" : "Что вы предлагаете?",
//     language === 'en' ? "Where are you located?" : "Где вы находитесь?",
//     language === 'en' ? "How does your website work?" : "Как работает ваш сайт?",
//     language === 'en' ? "What wallpapers do you have?" : "Какие у вас есть обои?",
//     language === 'en' ? "Can I return the item?" : "Можно ли вернуть товар?"
//   ];

//   const [input, setInput] = useState('');
//   const [showOptions, setShowOptions] = useState(true);
//   const [currentLanguage, setCurrentLanguage] = useState(language);

//   const responses = {
//     'Что вы предлагаете?': {
//       ru: 'Мы предлагаем широкий ассортимент обоев различных типов и цветов.',
//       // en: 'We offer a wide range of wallpapers of various types and colors.'
//     },
//     'Где вы находитесь?': {
//       ru: 'Наш офис находится в Минске по нескольким адресам: ул.Перавая, ул.Вторая, ул.Третья, также мы осуществляем доставку по всей Беларуси.',
//       // en: 'Our office is located in Minsk at several addresses: ul. Peravaya, ul. Vtoraya, ul. Tretya, we also deliver throughout Belarus.'
//     },
//     'Как работает ваш сайт?': {
//       ru: 'На нашем сайте вы можете выбрать обои по категориям, добавить их в корзину и оформить заказ, также вы можете самостоятельно создать обои, если перейдете в Конструктор.',
//       // en: 'On our website, you can choose wallpapers by categories, add them to the cart, and place an order, you can also create wallpapers yourself by going to the Constructor.'
//     },
//     'Какие у вас есть обои?': {
//       ru: 'У нас есть виниловые, флизелиновые и бумажные обои. Вы можете выбрать из множества дизайнов или создать свой собственный.',
//       // en: 'We have vinyl, non-woven, and paper wallpapers. You can choose from a variety of designs or create your own.'
//     },
//     'Можно ли вернуть товар?': {
//       ru: 'Вы можете вернуть товар в течение 10 дней с момента покупки, обратившись по горячему номеру(+37544ХХХХХХХ, +37529ХХХХХХХ)',
//       // en: 'You can return the goods within 10 days from the date of purchase by calling the hotline(+37544XXXXXX, +37529XXXXXX)'
//     },
//     // Add more responses as needed
//     'What do you offer?': {
//       // ru: 'Мы предлагаем широкий ассортимент обоев различных типов и цветов.',
//       en: 'We offer a wide range of wallpapers of various types and colors.'
//     },
//     'Where are you located?': {
//       // ru: 'Наш офис находится в Минске по нескольким адресам: ул.Перавая, ул.Вторая, ул.Третья, также мы осуществляем доставку по всей Беларуси.',
//       en: 'Our office is located in Minsk at several addresses: ul. Peravaya, ul. Vtoraya, ul. Tretya, we also deliver throughout Belarus.'
//     },
//     'How does your website work?': {
//       // ru: 'На нашем сайте вы можете выбрать обои по категориям, добавить их в корзину и оформить заказ, также вы можете самостоятельно создать обои, если перейдете в Конструктор.',
//       en: 'On our website, you can choose wallpapers by categories, add them to the cart, and place an order, you can also create wallpapers yourself by going to the Constructor.'
//     },
//     'What wallpapers do you have?': {
//       // ru: 'У нас есть виниловые, флизелиновые и бумажные обои. Вы можете выбрать из множества дизайнов или создать свой собственный.',
//       en: 'We have vinyl, non-woven, and paper wallpapers. You can choose from a variety of designs or create your own.'
//     },
//     'Can I return the item?': {
//       // ru: 'Вы можете вернуть товар в течение 10 дней с момента покупки, обратившись по горячему номеру(+37544ХХХХХХХ, +37529ХХХХХХХ)',
//       en: 'You can return the goods within 10 days from the date of purchase by calling the hotline(+37544XXXXXX, +37529XXXXXX)'
//     }
//   };

//   const handleSend = () => {
//     if (input.trim()) {
//       const newMessage = { text: input.trim(), sender: 'user' };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       handleBotResponse(newMessage);
//       setInput('');
//     }
//   };

//   const handleUserResponse = (response) => {
//     const newMessage = { text: response, sender: 'user' };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     handleBotResponse(newMessage);
//   };

//   const handleBotResponse = (message) => {
//     let response;
//     const text = message.text;

//     // Match question regardless of language
//     response = responses[text] ? responses[text][currentLanguage] : language === 'en' ? 'Sorry, I do not understand your request. Please clarify your question.' : 'Извините, я не понимаю ваш запрос. Пожалуйста, уточните ваш вопрос.';

//     setTimeout(() => {
//       setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
//     }, 1000);
//   };

//   const toggleOptions = () => {
//     setShowOptions(!showOptions);
//   };

//   const toggleLanguage = () => {
//     setCurrentLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
//   };

//   return (
//     <div className="chat-bot">
//       <div className="chat-window">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       {showOptions && (
//         <div className="response-options">
//           {responseOptions.map((option, index) => (
//             <button key={index} onClick={() => handleUserResponse(option)}>
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//       <div className="options-toggle">
//         <button onClick={toggleOptions}>{showOptions ? language === 'en' ? 'Collapse' : 'Свернуть' : language === 'en' ? 'Expand' : 'Развернуть'}</button>
//       </div>
     
//       <div className="chat-input">
//         <inputs
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//         />
//         <button onClick={handleSend}>{language === 'en' ? 'Send' : 'Отправить'}</button>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
