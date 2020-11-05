import css from './index.css'
export default function() {
    const dom = document.getElementById('app');
    dom.innerHTML = `<div>xx维欧氏</div>`
    dom.onclick = () => {
        const d = document.createElement('div');
        d.innerHTML = 'xxxxx';
        document.body.append(d);
    }
}