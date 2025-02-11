/* Задания на урок:


2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

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

  function makeChanges() {
    poster.style.background = "url(img/bg.jpg)";
    genre.textContent = "драма";
  }

  function deleteAdv(arr) {
    arr.forEach((item) => {
      item.remove();
    });
  }

  deleteAdv(adv);
  makeChanges();
});
