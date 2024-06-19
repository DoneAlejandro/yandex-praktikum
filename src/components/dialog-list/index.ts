import Handlebars from 'handlebars';
import './dialog-list.scss';
export { default as DialogList } from './dialog-list.hbs?raw';
Handlebars.registerHelper('chat-page-list', () => {
	return [
		{ name: 'Опоссум', message: 'Изображение', unread: '2', avatar: '../../assets/img/kchay.jpg' },
		{ name: 'Енот', message: 'Go на свалку!' },
		{ name: 'Барсук', message: 'А у кого ключи от сарая?', unread: '4' },
	];
});
