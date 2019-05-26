// 최상단 홈, 로그인, 회원정보 등
(function() {
    var toplist = document.getElementById("toplist");
    var menu = toplist.children;
    var menuLength = menu.length;

    var menuList = menu;
    
    for( var i = 0; i < menuLength; i++ ) {
        (
            function(j) {
                var obj = menuList[j];
                if( obj.addEventListener ) {
                    obj.addEventListener(
                        'click',
                        function() {
                            alert(obj.id);
                        },
                        false
                    );
                } else {
                    obj.attachEvent(
                        'onclick',
                        function() {
                            alert(obj.name);
                        },
                        false
                    );
                }
            }
        )(i);
    }
})();

// jQuery의 one을 자바스크립트로 구현
// 검색 버튼
function submit(event) {
    var e = event || window.event;
    var searchForm = document.getElementById("mainform");
    var search_text = document.getElementById("search_text").value;
    if( search_text === '' ) {
        alert("검색어를 입력하세요");
    } else {
        if(e.currentTarget.dataset.triggered) return;
        e.currentTarget.dataset.triggered = true;
        searchForm.submit();
    }
}

// Event Listener - IIFE 사용하여 등록
(function() {    
    var search_top_submit = document.getElementById("search_top");
    if(search_top_submit.addEventListener) {
        search_top_submit.addEventListener('click', submit, false);
    } else {
        search_top_submit.attachEvent('onclick', submit);
    }
}());

// Left Menu 아코디언 효과
(function() {
            
    var accordion = document.getElementsByClassName("accordion");
    for( var i = 0; i < accordion.length; i++ ) {
        // 클로저
        (function(j) {
                var accordion_obj = accordion[j];
                if(accordion_obj.addEventListener) {
                    accordion_obj.addEventListener('click'
                    , function() {
                        this.classList.toggle("active");
                        if( this.classList.contains("active") ) {
                            var toggleList = document.getElementsByClassName("active");
                            if(toggleList.length > 0) {
                                for( var inner = 0; inner < toggleList.length; inner++ ) {
                                    if(toggleList[inner] != this) {
                                        toggleList[inner].classList.remove("active")
                                    }
                                }   
                            }
                        } 
                    }
                    , false);
                } else {
                    accordion_obj.attachEvent('onclick'
                    , function() {
                        this.classList.toggle("active");
                        if( this.classList.contains("active") ) {
                            var toggleList = document.getElementsByClassName("active");
                            if(toggleList.length > 0) {
                                for( var inner = 0; inner < toggleList.length; inner++ ) {
                                    if(toggleList[inner] != this) {
                                        toggleList[inner].classList.remove("active")
                                    }
                                }   
                            }
                        } 
                    });
                }
            }
        )(i);
    }
}());

// Left Menu 클릭
function moveEvent(e) {
    var selectObj = document.getElementsByClassName("select");
    
    var event = e || window.event;
    if( selectObj.length > 0 ) {
        var obj = selectObj[0];
        if( e.target == obj ) {
    
        } else {
            obj.classList.remove('select');
            e.target.classList.add('select');
        }
    } else {
        e.target.classList.add('select');
    }
    
    // 이동시키기


    if(event.stopPropagation) event.stopPropagation();
    event.cancelBubble = true;
}

// Left Menu 이벤트 등록
(function() {
    var leftMenu = document.getElementsByClassName("item");
    
    var menuArr = new Array();
    var menuLength = leftMenu.length;
    for( var i = 0; i < menuLength; i++ ) {
        var innerLength = leftMenu[i].children.length;
        var inner = leftMenu[i].children;
        for( var j = 0; j < innerLength; j++ ) {
            menuArr.push(inner[j]);
        }
    }
    menuLength = menuArr.length;
    for( var i = 0; i < menuLength; i++ ) {
        var obj = menuArr[i];
        // 
        if( obj.localName === 'a' ) {
            if( obj.addEventListener ) {
                obj.addEventListener(
                    'click', function(event) {
                        moveEvent(event);
                    }, false
                );
                
            } else {
                obj.attachEvent(
                    'onclick', function(event) {
                        moveEvent(event);
                    }, false
                );
            }
        } else {
            continue;
        }
    }
})();

// Main의 이미지 slider banner
var slideIdx = 0;

function showDivs(idx) {

    var slideImage = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    var dotsLength = dots.length;

    for (var i = 0; i < dotsLength; i++) {
        dots[i].classList.remove("dotactive");
    }

    var slideLength = slideImage.length;

    slideIdx = idx;

    if( idx > slideLength ) {
        slideIdx = 1;
    }

    if( idx < 1 ) {
        slideIdx = slideLength;
    }

    for( var imgIdx = 0; imgIdx < slideLength; imgIdx++ ) {
        if(imgIdx == (slideIdx - 1)) {
            slideImage[imgIdx].style.display = "block";
        } else {
            slideImage[imgIdx].style.display = "none";
        }
    }

    dots[slideIdx-1].classList.add("dotactive");
}

function plusDivs(n) {
    showDivs(slideIdx += n);
}

(function() {
    setTimeout(function() {
        plusDivs(1);
        setInterval(plusDivs, 10000, 1);
    }, 0, 1);
})();

(function() {
    var slideDot = document.getElementsByClassName("dot");

    var dotLength = slideDot.length;

    if(dotLength > 0) {
        for(var i = 0; i < dotLength; i++) {
            (
                function(j) {
                    var obj = slideDot[j];

                    if( obj.addEventListener ) {
                        obj.addEventListener('click', function() {
                            showDivs((j + 1));
                        }, false);
                    } else {
                        obj.attachEvent('onclick', function() {
                            showDivs((j + 1));
                        }, false);
                    }
                }
            )(i)
        }
    }
})();

(function() {
    var prevBtn = document.getElementById("prevBanner");
    var nextBtn = document.getElementById("nextBanner");

    if( prevBtn.addEventListener ) {
        prevBtn.addEventListener('click', function() {
            plusDivs(-1);
        }, false);
    } else {
        prevBtn.attachEvent('onclick', function() {
            plusDivs(-1);
        }, false);
    }

    if( nextBtn.addEventListener ) {
        nextBtn.addEventListener('click', function() {
            plusDivs(1);
        }, false);
    } else {
        nextBtn.attachEvent('onclick', function() {
            plusDivs(1);
        }, false);
    }
})();