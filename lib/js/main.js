'use strict';
// Mobile Menu toggle
let closeBtn = document.getElementById('menu-close');
let openBtn = document.getElementById('menu-open');
let navigation = document.getElementById('mobile-nav-container');

 closeBtn.addEventListener('click', function() {
    closeBtn.classList.add('display');
    openBtn.classList.remove('display');
    navigation.classList.add('display');
 });
 openBtn.addEventListener('click', function() {
     navigation.classList.remove('display');
     closeBtn.classList.remove('display');
     openBtn.classList.add('display');
 });

 // Mobile Menu List toggle

 let toggleBtns = document.querySelectorAll('.dropdown-list');
 let listItems = document.querySelectorAll('.listItems');

 
toggleBtns.forEach(function(e) {
    e.addEventListener('click', function() {
        e.lastElementChild.classList.toggle('list-items-show');
        let element = e.firstElementChild;
        element.firstElementChild.classList.toggle('arrow-up');
    });
});