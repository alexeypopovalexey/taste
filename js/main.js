//Работа с модальными окнами "Log in" и "Sign UP"
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#sign");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    createAccountForm.classList.remove("hidden");

  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("hidden");
    createAccountForm.classList.add("hidden");
  });

  document.querySelector("#signUp").addEventListener("click", e => {
    e.preventDefault();
    createAccountForm.classList.remove("hidden");
  })

  document.querySelector("#logIn").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("hidden");
  });

  document.querySelector("#exitLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("hidden");
  });


  document.querySelector("#exitSign").addEventListener("click", e => {
    e.preventDefault();
    createAccountForm.classList.add("hidden");
  });

  
});

//Счечтик чисел
const period = 40;
const ourBlock = document.querySelector(".statistics__row")
const vision = document.querySelector(".vision")
let recipes = document.querySelector("#recipes");
let users = document.querySelector("#users");
let reviews = document.querySelector("#reviews");
let media = document.querySelector("#media");
let spices = document.querySelector("#spices");


function counter(num, elem) {
  let step = Math.round(num / period);
  let result = 0;
  let interval = setInterval(() => {
    result = result + step;
    if (num > result) {

      if ((num - result) < step) {
        result = result + (num - result);
        clearInterval(interval)
      }
    }
      let arr = String(result).split('');
      arr.splice(-3, 0, ',')
      let answer = arr.join("")
      elem.innerHTML = answer;
  }, period)
};


function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible
}


document.addEventListener("scroll", () => {
  if (isVisible(ourBlock) && !ourBlock.classList.contains("vision")) {
    ourBlock.classList.add("vision")
    counter(23567, recipes)
    counter(431729, users)
    counter(892173, reviews)
    counter(56581, media)
    counter(3182, spices)

  };
  if (!isVisible(ourBlock) && ourBlock.classList.contains("vision")) {
    ourBlock.classList.remove("vision")
  };
})

//Burger menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector("#burgerMenu");
  const burgerMenuLink = document.querySelector("#burgerMenuLinkImg");
  const burgerMenuOverlay = document.querySelector("#burgerMenuOverlay");
  const headerItem = document.querySelector("#headerItem")

  document.querySelector("#burger-menu").addEventListener("click", e => {
    e.preventDefault
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit")
    burgerMenuOverlay.classList.toggle("burger-menu__overlay")
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
  document.querySelector("#burgerMenuOverlay").addEventListener("click", e => {
    e.preventDefault
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive")
  });
  document.querySelector("#burger-menu__link-header").addEventListener("click", e => {
    e.preventDefault
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
  document.querySelector("#burger-menu__link-service").addEventListener("click", e => {
    e.preventDefault
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
  document.querySelector("#burger-menu__link-app").addEventListener("click", e => {
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
  document.querySelector("#burger-menu__link-feedback").addEventListener("click", e => {
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
  document.querySelector("#burger-menu__link-content").addEventListener("click", e => {
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
  document.querySelector("#burger-menu__link-statistics").addEventListener("click", e => {
    burgerMenuOverlay.classList.toggle("burger-menu__overlay-exit");
    burgerMenuOverlay.classList.toggle("burger-menu__overlay");
    burgerMenu.classList.toggle("burger-menu__nav");
    burgerMenu.classList.toggle("burger-menu__nav-active");
    burgerMenuLink.classList.toggle("burger-menu__lines");
    burgerMenuLink.classList.toggle("burger-menu__active");
    headerItem.classList.toggle("header__item-container");
    headerItem.classList.toggle("header__item-container-disactive");
  });
});
//Рестораны
const toUp = document.querySelector('#toUp');
const toDown = document.querySelector('#toDown');


let ourRestaurants = [
  {
    nameRest : 'Italian',
    recipesRest : 327,
  },
  {
    nameRest : 'Indian',
    recipesRest : 856,
  },
  {
    nameRest : 'French',
    recipesRest : 27,
  },
  {
    nameRest : 'Steakhouse',
    recipesRest : 174,
  },
  {
    nameRest : 'Seafood',
    recipesRest : 731,
  },
  {
    nameRest : 'Sushi',
    recipesRest : 237,
  },
  {
    nameRest : 'Mexicano',
    recipesRest : 529,
  },
  {
    nameRest : 'Chinese',
    recipesRest : 145,
  },
  {
    nameRest : 'Pizza',
    recipesRest : 327,
  },
  {
    nameRest : 'America',
    recipesRest : 1437,
  },
]

function copmareRest (a, b) {
  if (a.recipesRest > b.recipesRest) return 1;
  if (a.recipesRest === b.recipesRest) return 0;
  if (a.recipesRest < b.recipesRest) return -1;
}

const currentRest = ourRestaurants.sort(copmareRest);
const contentMain = document.querySelector("#contentMain");

    for (let item of currentRest) {
    contentMain.insertAdjacentHTML("beforeend",
      `<div class="content__main-item" id="${item.nameRest}">
          <h5 class=" content__main-item-subtitle" >
            ${item.recipesRest} Recipes
          </h5>
          <h4 class="content__main-item-title">
            ${item.nameRest}
          </h4>
        </div>`
    )
  }


document.querySelector("#toUp").addEventListener("click", e => {
    e.preventDefault();
    contentMain.innerHTML = '';
    for (let item of currentRest) {
    contentMain.insertAdjacentHTML("beforeend",
      `<div class="content__main-item" id="${item.nameRest}">
          <h5 class=" content__main-item-subtitle" >
            ${item.recipesRest} Recipes
          </h5>
          <h4 class="content__main-item-title">
            ${item.nameRest}
          </h4>
        </div>`
    )
  }
  toUp.classList.toggle("content__active-btn");
  toDown.classList.toggle("content__active-btn");
  toUp.classList.toggle("content__disactive-btn");
  toDown.classList.toggle("content__disactive-btn");
});

document.querySelector("#toDown").addEventListener("click", e => {
    e.preventDefault();
    contentMain.innerHTML = '';
    for (let item of currentRest) {
    contentMain.insertAdjacentHTML("afterbegin",
      `<div class="content__main-item" id="${item.nameRest}">
          <h5 class=" content__main-item-subtitle" >
            ${item.recipesRest} Recipes
          </h5>
          <h4 class="content__main-item-title">
            ${item.nameRest}
          </h4>
        </div>`
    )
  }
  toUp.classList.toggle("content__active-btn");
  toDown.classList.toggle("content__active-btn");
  toUp.classList.toggle("content__disactive-btn");
  toDown.classList.toggle("content__disactive-btn");
});