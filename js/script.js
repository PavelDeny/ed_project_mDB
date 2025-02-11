/* Задания на урок:

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img");
  const poster = document.querySelector(".promo__bg");
  const genre = document.querySelector(".promo__genre");

  const movieList = document.querySelector(".promo__interactive-list");

  function makeChanges() {
    poster.style.background = "url(img/bg.jpg)";
    genre.textContent = "драма";
  }

  function deleteAdv(arr) {
    arr.forEach((item) => {
      item.remove();
    });
  }

  const sortArr = function (arr) {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
      </li>
      
      `;
    });
  }

  createMovieList(movieDB.movies, movieList);

  deleteAdv(adv);
  makeChanges();
});
