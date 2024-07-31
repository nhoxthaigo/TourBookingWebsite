document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var items = document.querySelectorAll(".tour-packages-item");
    var totalItems = items.length;
    var itemsPerPage = 3;
    var dots = document.querySelectorAll(".dot");

    function showItems(startIndex, direction) {
        for (var i = 0; i < totalItems; i++) {
            if (i >= startIndex && i < startIndex + itemsPerPage) {
            items[i].style.display = "block";
            items[i].classList.add('slide-in');
            } else {
            items[i].style.display = "none";
            items[i].classList.remove('slide-in');
            }
            updateDots(startIndex / itemsPerPage);

        }
    function updateDots(activeIndex) {
        dots.forEach(function(dot, index) {
            if (index === activeIndex)
        {
        dot.classList.add("active");
        }
        else 
        {
        dot.classList.remove("active");
        }
        });
        }


        if (direction === 'prev') {
            document.querySelector('.tour-packages-items').classList.add('slide-right');
            } else {
            document.querySelector('.tour-packages-items').classList.add('slide-left');
        }


        setTimeout(function() {
        document.querySelector('.tour-packages-items').classList.remove('slide-left', 'slide-right');
        }, 500);
        }

        showItems(currentIndex);

        document.getElementsByClassName("button-pre")[0].addEventListener("click", function() {
            if (currentIndex > 0) {
            currentIndex -= itemsPerPage;
            showItems(currentIndex, 'prev');
            }
        });

        document.getElementsByClassName("button-next")[0].addEventListener("click", function() {
            if (currentIndex + itemsPerPage < totalItems) {
            currentIndex += itemsPerPage;
            showItems(currentIndex, 'next');
            }
        });
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentIndex = index * itemsPerPage;
                showItems(currentIndex);
            });
        });



});