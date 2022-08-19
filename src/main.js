import { createApp } from 'vue'
import App from './App.vue'

require('./assets/styles/header.css');
require('./assets/styles/global.css');
require('./assets/styles/teamButton.css');
require('./assets/styles/title.css');
require('./assets/styles/stars.css');
require('./assets/scripts/stars.js');

createApp(App).mount('#app')