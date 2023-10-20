/* eslint-disable */
import {createApp} from 'vue'
import App from './App.vue'

window.onload = function () {
  createExample()
}
function createExample() {
  const container = document.createElement('div');
  container.setAttribute('id', 'example-content-app')
  container.setAttribute('style', 'position: absolute;\n' +
      '    display: flex;\n' +
      '    top: 50%;\n' +
      '    width: 400px;\n' +
      '    left: 50%;\n' +
      '    height: 400px;\n' +
      '    transform: translate(-50%, -50%);\n' +
      '    align-items: center;\n' +
      '    justify-content: center;\n' +
      '    background: #507ebf45;\n' +
      '    border: 1px solid rgba(0, 0, 0, 0.05);\n' +
      '    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n' +
      '    border-radius: 12px;')
  document.body.appendChild(container)
  const url = window.location.href;
  console.log(url)
  const app = createApp(App,{url: url})
  app.mount('#example-content-app');
}
chrome.runtime.onMessage.addListener(function(request)
{
  if (request.target === 'CONTENT' && request.from === 'BACKGROUND') {

  }
});