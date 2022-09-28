
let cart = []

document.querySelector('.cart').addEventListener('click', () => {
  document.querySelector('.korzina').style.display = 'block'
  document.querySelector('.back-to-main').style.display = 'block'
  document.querySelector('.grid-item').style.display = 'none'
  document.querySelector('.product-title').style.display = 'none'
  document.querySelector('.products').style.display = 'none'
  document.querySelector('.girl').style.display = 'none'
  document.querySelector('.best-products').style.display = 'none'
  document.querySelector('.map').style.display = 'none'
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.korzina').style.display = 'flex'
  
  for(item of cart){
    document.querySelector('.korzina').append(item)
  }

})

document.querySelector('.back-to-main').addEventListener('click', () => {
  document.querySelector('.korzina').style.display = 'none'
  document.querySelector('.back-to-main').style.display = 'none'
  document.querySelector('.main').style.display = 'block'
  document.querySelector('.grid-item').style.display = 'block'
  document.querySelector('.product-title').style.display = 'block'
  document.querySelector('.products').style.display = 'flex'
  document.querySelector('.girl').style.display = 'block'
  document.querySelector('.best-products').style.display = 'block'
  document.querySelector('.map').style.display = 'block'
  document.querySelector('.main').style.display = 'block'
  document.querySelector('.grid-item').innerHTML = `
  <div class="grid-item">
            <div class="block1">
                <div class="item">
                    <img src="./images/aos.png">
                        <div class="item-flx"><img src="./images/liquid.png"><p>450 мл</p></div>
                        <h1 class="item-h1">AOS средство для мытья посуды <br> Crystal</h1>
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
                <div class="item">
                    <img src="./images/ariel.png">
                        <div class="item-flx"><img src="./images/liquid.png"><p>15X28.8 г</p></div>
                        <h1 class="item-h1">ARIEL Автмат Гель СМС жидкое <br> в растворимых капсулах Liquid Capsules Горный родник</h1> 
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
                <div class="item">
                    <img src="./images/sorti.png">
                        <div class="item-flx"><img src="./images/liquid.png"><p>450 мл</p></div>
                        <h1 class="item-h1">AOS Ср-во для мытья посуды <br> Апельсин+мята</h1>
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
                <div class="item">
                    <img src="./images/bimax.png" width: 181px;
                    height: 172px;>
                        <div class="item-flx"><img src="./images/liquid.png"><p>1500 г</p></div>
                        <h1 class="item-h1">BIMAX Порошок стиральный <br> Автомат 100 пятен COMPACT</h1>
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
            </div>
            <div class="block2">
                <div class="item">
                    <img src="./images/aos.png">
                        <div class="item-flx"><img src="./images/liquid.png"><p>450 мл</p></div>
                        <h1 class="item-h1">AOS средство для мытья посуды <br> Crystal</h1>
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
                <div class="item">
                    <img src="./images/ariel.png">
                        <div class="item-flx"><img src="./images/liquid.png"><p>15X28.8 г</p></div>
                        <h1 class="item-h1">ARIEL Автмат Гель СМС жидкое <br>в растворимых капсулах Liquid Capsules Горный родник</h1> 
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h1>48,76 ₸</h1>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
                <div class="item">
                    <img src="./images/sorti.png">
                        <div class="item-flx"><img src="./images/liquid.png"><p>450 мл</p></div>
                        <h1 class="item-h1">AOS Ср-во для мытья посуды <br> Апельсин+мята</h1>
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div>
                <div class="item">
                    <img src="./images/bimax.png" width: 181px;
                    height: 172px;>
                        <div class="item-flx"><img src="./images/liquid.png"><p>1500 г</p></div>
                        <h1 class="item-h1">BIMAX Порошок стиральный <br> Автомат 100 пятен COMPACT</h1>
                        <h5><span>Штрихкод:</span>4604049097548</h5>
                        <h5><span>Производитель:</span>Нэфис</h5>
                        <h5><span>Бренд:</span>AOS</h5>
                        <h5><span>Цена:</span>48,76 ₸</h5>
                        <button class="add-cart">Добавить в корзину<img src="./images/korzina-light.png" alt=""></button>
                </div> 
            </div>
`
})

let buttons = document.querySelectorAll('.add-cart')

for(button of buttons) {
  button.addEventListener('click',addToCart)
}

function addToCart(event){
  cart.push(event.target.parentElement)}
